import { CpfGenerator } from "../cpf.generator";
import { CpfValidator } from "../cpf.validator";

describe("CpfValidator", () => {
    let validator: CpfValidator;
    let generator: CpfGenerator;

    beforeEach(() => {
        validator = new CpfValidator();
        generator = new CpfGenerator();
    });

    // -------------------------------------------------------------------------
    // Casos inválidos — estrutura
    // -------------------------------------------------------------------------

    describe("Dado um CPF vazio", () => {
        it("deve retornar inválido ao receber string vazia", () => {
            const result = validator.validate("");
            expect(result.isValid).toBe(false);
            expect(result.message).toBe("CPF está vazio.");
        });

        it("deve retornar inválido ao receber apenas espaços", () => {
            const result = validator.validate("   ");
            expect(result.isValid).toBe(false);
            expect(result.message).toBe("CPF está vazio.");
        });
    });

    describe("Dado um CPF com formato inválido", () => {
        it("deve retornar inválido para letras", () => {
            const result = validator.validate("abc.def.ghi-jk");
            expect(result.isValid).toBe(false);
            expect(result.message).toBe("CPF com formato inválido.");
        });

        it("deve retornar inválido para menos de 11 dígitos", () => {
            const result = validator.validate("1234567");
            expect(result.isValid).toBe(false);
            expect(result.message).toBe("CPF com formato inválido.");
        });

        it("deve retornar inválido para mais de 11 dígitos", () => {
            const result = validator.validate("123456789012");
            expect(result.isValid).toBe(false);
            expect(result.message).toBe("CPF com formato inválido.");
        });

        it("deve retornar inválido para máscara incorreta", () => {
            const result = validator.validate("123-456-789.01");
            expect(result.isValid).toBe(false);
            expect(result.message).toBe("CPF com formato inválido.");
        });
    });

    describe("Dado um CPF com todos os dígitos iguais", () => {
        it.each([
            "000.000.000-00",
            "111.111.111-11",
            "222.222.222-22",
            "333.333.333-33",
            "444.444.444-44",
            "555.555.555-55",
            "666.666.666-66",
            "777.777.777-77",
            "888.888.888-88",
            "999.999.999-99",
        ])("deve rejeitar %s", (cpf) => {
            const result = validator.validate(cpf);
            expect(result.isValid).toBe(false);
            expect(result.message).toBe("CPF é inválido.");
        });
    });

    describe("Dado um CPF com dígito verificador inválido", () => {
        it("deve retornar inválido quando o primeiro dígito verificador está errado", () => {
            const valid = generator.generate(false);
            const tampered = valid.substring(0, 9) + String((Number(valid[9]) + 1) % 10) + valid[10];
            const result = validator.validate(tampered);
            expect(result.isValid).toBe(false);
            expect(result.message).toBe("CPF é inválido.");
        });

        it("deve retornar inválido quando o segundo dígito verificador está errado", () => {
            const valid = generator.generate(false);
            const tampered = valid.substring(0, 10) + String((Number(valid[10]) + 1) % 10);
            const result = validator.validate(tampered);
            expect(result.isValid).toBe(false);
            expect(result.message).toBe("CPF é inválido.");
        });
    });

    // -------------------------------------------------------------------------
    // Casos válidos
    // -------------------------------------------------------------------------

    describe("Dado um CPF válido", () => {
        it("deve aceitar CPF gerado sem máscara", () => {
            const cpf = generator.generate(false);
            const result = validator.validate(cpf);
            expect(result.isValid).toBe(true);
            expect(result.message).toBe("Válido");
        });

        it("deve aceitar CPF gerado com máscara", () => {
            const cpf = generator.generate(true);
            const result = validator.validate(cpf);
            expect(result.isValid).toBe(true);
            expect(result.message).toBe("Válido");
        });

        it("deve aceitar 10 CPFs gerados consecutivamente", () => {
            for (let i = 0; i < 10; i++) {
                const cpf = generator.generate(i % 2 === 0);
                const result = validator.validate(cpf);
                expect(result.isValid).toBe(true);
            }
        });

        it("deve aceitar o mesmo CPF com e sem máscara", () => {
            const raw = generator.generate(false);
            const formatted = raw.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

            expect(validator.validate(raw).isValid).toBe(true);
            expect(validator.validate(formatted).isValid).toBe(true);
        });
    });
});
