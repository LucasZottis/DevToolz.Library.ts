import { CpfValidator } from "../cpf.validator";

describe("CpfValidator", () => {
    let validator: CpfValidator;

    beforeEach(() => {
        validator = new CpfValidator();
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
            expect(result.message).toBe("CPF não pode ter todos os dígitos iguais.");
        });
    });

    describe("Dado um CPF com dígito verificador inválido", () => {
        it("deve retornar inválido quando o primeiro dígito verificador está errado", () => {
            // CPF real: 529.982.247-25 — alteramos o primeiro dígito
            const result = validator.validate("529.982.247-35");
            expect(result.isValid).toBe(false);
            expect(result.message).toBe("Primeiro dígito verificador é inválido.");
        });

        it("deve retornar inválido quando o segundo dígito verificador está errado", () => {
            // CPF real: 529.982.247-25 — alteramos o segundo dígito
            const result = validator.validate("529.982.247-26");
            expect(result.isValid).toBe(false);
            expect(result.message).toBe("Segundo dígito verificador é inválido.");
        });
    });

    // -------------------------------------------------------------------------
    // Casos válidos
    // -------------------------------------------------------------------------

    describe("Dado um CPF válido", () => {
        it.each([
            "529.982.247-25",
            "111.444.777-35",
            "871.292.107-40",
            "153.509.460-56",
        ])("deve aceitar %s formatado", (cpf) => {
            const result = validator.validate(cpf);
            expect(result.isValid).toBe(true);
            expect(result.message).toBe("Válido");
        });

        it.each([
            "52998224725",
            "11144477735",
            "87129210740",
            "15350946056",
        ])("deve aceitar %s sem máscara", (cpf) => {
            const result = validator.validate(cpf);
            expect(result.isValid).toBe(true);
            expect(result.message).toBe("Válido");
        });
    });
});