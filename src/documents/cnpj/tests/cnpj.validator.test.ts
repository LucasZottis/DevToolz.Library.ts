import { CnpjValidator } from "../cnpj.validator";

describe("CnpjValidator", () => {
    let validator: CnpjValidator;

    beforeEach(() => {
        validator = new CnpjValidator();
    });

    // -------------------------------------------------------------------------
    // Casos inválidos — estrutura
    // -------------------------------------------------------------------------

    describe("Dado um CNPJ vazio", () => {
        it("deve retornar inválido ao receber string vazia", () => {
            const result = validator.validate("");
            expect(result.isValid).toBe(false);
            expect(result.message).toBe("CNPJ está vazio.");
        });

        it("deve retornar inválido ao receber apenas espaços", () => {
            const result = validator.validate("   ");
            expect(result.isValid).toBe(false);
            expect(result.message).toBe("CNPJ está vazio.");
        });
    });

    describe("Dado um CNPJ com formato inválido", () => {
        it("deve retornar inválido para letras", () => {
            const result = validator.validate("ab.cde.fgh/ijkl-mn");
            expect(result.isValid).toBe(false);
            expect(result.message).toBe("CNPJ com formato inválido.");
        });

        it("deve retornar inválido para menos de 14 dígitos", () => {
            const result = validator.validate("1234567");
            expect(result.isValid).toBe(false);
            expect(result.message).toBe("CNPJ com formato inválido.");
        });

        it("deve retornar inválido para mais de 14 dígitos", () => {
            const result = validator.validate("112223330001810");
            expect(result.isValid).toBe(false);
            expect(result.message).toBe("CNPJ com formato inválido.");
        });

        it("deve retornar inválido para máscara incorreta", () => {
            const result = validator.validate("11-222-333/0001.81");
            expect(result.isValid).toBe(false);
            expect(result.message).toBe("CNPJ com formato inválido.");
        });
    });

    describe("Dado um CNPJ com todos os dígitos iguais", () => {
        it.each([
            "00.000.000/0000-00",
            "11.111.111/1111-11",
            "22.222.222/2222-22",
            "33.333.333/3333-33",
            "44.444.444/4444-44",
            "55.555.555/5555-55",
            "66.666.666/6666-66",
            "77.777.777/7777-77",
            "88.888.888/8888-88",
            "99.999.999/9999-99",
        ])("deve rejeitar %s", (cnpj) => {
            const result = validator.validate(cnpj);
            expect(result.isValid).toBe(false);
            expect(result.message).toBe("CNPJ não pode ter todos os dígitos iguais.");
        });
    });

    // -------------------------------------------------------------------------
    // Dígitos verificadores inválidos
    // -------------------------------------------------------------------------

    describe("Dado um CNPJ com dígitos verificadores inválidos", () => {
        it("deve retornar inválido quando o primeiro dígito verificador está errado", () => {
            const result = validator.validate("11.222.333/0001-91");
            expect(result.isValid).toBe(false);
            expect(result.message).toBe("Primeiro dígito verificador é inválido.");
        });

        it("deve retornar inválido quando o segundo dígito verificador está errado", () => {
            const result = validator.validate("11.222.333/0001-80");
            expect(result.isValid).toBe(false);
            expect(result.message).toBe("Segundo dígito verificador é inválido.");
        });
    });

    // -------------------------------------------------------------------------
    // CNPJs válidos
    // -------------------------------------------------------------------------

    describe("Dado um CNPJ válido", () => {
        it("deve aceitar CNPJ sem máscara", () => {
            const result = validator.validate("11222333000181");
            expect(result.isValid).toBe(true);
            expect(result.message).toBe("Válido");
        });

        it("deve aceitar CNPJ com máscara", () => {
            const result = validator.validate("11.222.333/0001-81");
            expect(result.isValid).toBe(true);
            expect(result.message).toBe("Válido");
        });

        it("deve aceitar múltiplos CNPJs válidos conhecidos", () => {
            const validos = [
                "11222333000181",
                "11.222.333/0001-81",
            ];

            validos.forEach(cnpj => {
                const result = validator.validate(cnpj);
                expect(result.isValid).toBe(true);
            });
        });
    });
});