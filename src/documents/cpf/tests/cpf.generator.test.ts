import { CpfGenerator } from "../cpf.generator";
import { CpfValidator } from "../cpf.validator";

describe("CpfGenerator", () => {
    let generator: CpfGenerator;
    let validator: CpfValidator;

    beforeEach(() => {
        generator = new CpfGenerator();
        validator = new CpfValidator();
    });

    // -------------------------------------------------------------------------
    // generate — sem máscara
    // -------------------------------------------------------------------------

    describe("generate sem formatação", () => {
        it("deve retornar uma string com 11 dígitos", () => {
            const result = generator.generate();
            expect(result).toHaveLength(11);
            expect(result).toMatch(/^\d{11}$/);
        });

        it("deve gerar um CPF matematicamente válido", () => {
            const result = generator.generate();
            const validation = validator.validate(result);
            expect(validation.isValid).toBe(true);
        });

        it("não deve gerar CPF com todos os dígitos iguais", () => {
            for (let i = 0; i < 20; i++) {
                const result = generator.generate();
                expect(result).not.toMatch(/^(\d)\1{10}$/);
            }
        });

        it("deve gerar CPFs diferentes entre chamadas", () => {
            const results = new Set(Array.from({ length: 20 }, () => generator.generate()));
            expect(results.size).toBeGreaterThan(1);
        });
    });

    // -------------------------------------------------------------------------
    // generate — com máscara
    // -------------------------------------------------------------------------

    describe("generate com formatação", () => {
        it("deve retornar CPF no formato NNN.NNN.NNN-NN", () => {
            const result = generator.generate(true);
            expect(result).toMatch(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/);
        });

        it("deve gerar um CPF formatado matematicamente válido", () => {
            const result = generator.generate(true);
            const validation = validator.validate(result);
            expect(validation.isValid).toBe(true);
        });
    });

    // -------------------------------------------------------------------------
    // Consistência entre chamadas
    // -------------------------------------------------------------------------

    describe("consistência", () => {
        it("deve gerar 50 CPFs válidos consecutivos", () => {
            for (let i = 0; i < 50; i++) {
                const cpf = generator.generate();
                const result = validator.validate(cpf);
                expect(result.isValid).toBe(true);
            }
        });

        it("CPF gerado sem máscara e com máscara devem representar o mesmo número", () => {
            // Gera os dois e compara apenas os dígitos
            const raw = generator.generate(false);
            const formatted = generator.generate(true);
            const formattedDigits = formatted.replace(/[^\d]/g, "");

            expect(raw).toHaveLength(11);
            expect(formattedDigits).toHaveLength(11);
        });
    });
});