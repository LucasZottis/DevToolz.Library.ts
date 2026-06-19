import { CnpjGenerator } from "../cnpj.generator";
import { CnpjValidator } from "../cnpj.validator";

describe("CnpjGenerator", () => {
    let generator: CnpjGenerator;
    let validator: CnpjValidator;

    beforeEach(() => {
        generator = new CnpjGenerator();
        validator = new CnpjValidator();
    });

    // -------------------------------------------------------------------------
    // generate — numérico sem máscara
    // -------------------------------------------------------------------------

    describe("generate sem formatação", () => {
        it("deve retornar uma string com 14 dígitos", () => {
            const result = generator.generate();
            expect(result).toHaveLength(14);
            expect(result).toMatch(/^\d{14}$/);
        });

        it("deve gerar um CNPJ matematicamente válido", () => {
            const result = generator.generate();
            const validation = validator.validate(result);
            expect(validation.isValid).toBe(true);
        });

        it("não deve gerar CNPJ com todos os dígitos iguais", () => {
            for (let i = 0; i < 20; i++) {
                const result = generator.generate();
                expect(result).not.toMatch(/^(\d)\1{13}$/);
            }
        });

        it("deve gerar CNPJs diferentes entre chamadas", () => {
            const results = new Set(Array.from({ length: 20 }, () => generator.generate()));
            expect(results.size).toBeGreaterThan(1);
        });
    });

    // -------------------------------------------------------------------------
    // generate — numérico com máscara
    // -------------------------------------------------------------------------

    describe("generate com formatação", () => {
        it("deve retornar CNPJ no formato NN.NNN.NNN/NNNN-NN", () => {
            const result = generator.generate(true);
            expect(result).toMatch(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/);
        });

        it("deve gerar um CNPJ formatado matematicamente válido", () => {
            const result = generator.generate(true);
            const validation = validator.validate(result);
            expect(validation.isValid).toBe(true);
        });
    });

    // -------------------------------------------------------------------------
    // generate — alfanumérico (IN RFB nº 2.229/2024)
    // -------------------------------------------------------------------------

    describe("generate alfanumérico", () => {
        it("deve retornar string de 14 caracteres", () => {
            const result = generator.generate({ format: "alphanumeric" });
            expect(result).toHaveLength(14);
        });

        it("deve gerar apenas maiúsculas e dígitos nas primeiras 12 posições", () => {
            const result = generator.generate({ format: "alphanumeric" });
            expect(result.substring(0, 12)).toMatch(/^[A-Z0-9]{12}$/);
        });

        it("deve gerar DV numérico nas duas últimas posições", () => {
            const result = generator.generate({ format: "alphanumeric" });
            expect(result.substring(12)).toMatch(/^\d{2}$/);
        });

        it("deve gerar CNPJ alfanumérico matematicamente válido", () => {
            for (let i = 0; i < 20; i++) {
                const result = generator.generate({ format: "alphanumeric" });
                const validation = validator.validate(result);
                expect(validation.isValid).toBe(true);
            }
        });

        it("não deve gerar CNPJ alfanumérico com todos os caracteres iguais", () => {
            for (let i = 0; i < 20; i++) {
                const result = generator.generate({ format: "alphanumeric" });
                expect(result).not.toMatch(/^(.)\1{13}$/);
            }
        });

        it("deve gerar CNPJs alfanuméricos diferentes entre chamadas", () => {
            const results = new Set(
                Array.from({ length: 20 }, () => generator.generate({ format: "alphanumeric" }))
            );
            expect(results.size).toBeGreaterThan(1);
        });
    });
});
