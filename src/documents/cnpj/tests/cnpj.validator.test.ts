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
        it("deve retornar inválido para letras nas posições de DV (posições 13-14)", () => {
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

        it("deve retornar inválido para CNPJ alfanumérico com letras nas posições de DV", () => {
            const result = validator.validate("12ABC34501DEAB");
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
            expect(result.message).toBe("CNPJ é inválido.");
        });
    });

    // -------------------------------------------------------------------------
    // Dígitos verificadores inválidos
    // -------------------------------------------------------------------------

    describe("Dado um CNPJ com dígitos verificadores inválidos", () => {
        it("deve retornar inválido quando o primeiro dígito verificador está errado", () => {
            const result = validator.validate("11.222.333/0001-91");
            expect(result.isValid).toBe(false);
            expect(result.message).toBe("CNPJ é inválido.");
        });

        it("deve retornar inválido quando o segundo dígito verificador está errado", () => {
            const result = validator.validate("11.222.333/0001-80");
            expect(result.isValid).toBe(false);
            expect(result.message).toBe("CNPJ é inválido.");
        });

        it("deve retornar inválido para CNPJ alfanumérico com DV errado", () => {
            const result = validator.validate("12ABC34501DE36");
            expect(result.isValid).toBe(false);
            expect(result.message).toBe("CNPJ é inválido.");
        });
    });

    // -------------------------------------------------------------------------
    // CNPJs válidos — numérico
    // -------------------------------------------------------------------------

    describe("Dado um CNPJ numérico válido", () => {
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

        it("deve aceitar múltiplos CNPJs numéricos válidos conhecidos", () => {
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

    // -------------------------------------------------------------------------
    // CNPJs válidos — alfanumérico (IN RFB nº 2.229/2024)
    // -------------------------------------------------------------------------

    describe("Dado um CNPJ alfanumérico válido", () => {
        it.each([
            ["12ABC34501DE35", "sem máscara"],
            ["12.ABC.345/01DE-35", "com máscara"],
            ["AB12C34D000184", "AB12C34D0001-84 sem máscara"],
            ["AB.12C.34D/0001-84", "AB12C34D0001-84 com máscara"],
            ["A1B2C3D4E5F668", "A1B2C3D4E5F6-68 sem máscara"],
            ["A1.B2C.3D4/E5F6-68", "A1B2C3D4E5F6-68 com máscara"],
        ])("deve aceitar %s (%s)", (cnpj) => {
            const result = validator.validate(cnpj);
            expect(result.isValid).toBe(true);
            expect(result.message).toBe("Válido");
        });
    });

    // -------------------------------------------------------------------------
    // Autodetecção de formato
    // -------------------------------------------------------------------------

    describe("Autodetecção de formato", () => {
        it("detecta numérico automaticamente quando não há flag", () => {
            const result = validator.validate("11222333000181");
            expect(result.isValid).toBe(true);
        });

        it("detecta alfanumérico automaticamente quando não há flag e há letras", () => {
            const result = validator.validate("12.ABC.345/01DE-35");
            expect(result.isValid).toBe(true);
        });
    });

    // -------------------------------------------------------------------------
    // Flag explícita — format: 'alphanumeric'
    // -------------------------------------------------------------------------

    describe("Com flag explícita format: 'alphanumeric'", () => {
        it("aceita CNPJ alfanumérico válido", () => {
            const result = validator.validate("12ABC34501DE35", { format: "alphanumeric" });
            expect(result.isValid).toBe(true);
        });

        it("aceita CNPJ puramente numérico passado como alfanumérico", () => {
            const result = validator.validate("11222333000181", { format: "alphanumeric" });
            expect(result.isValid).toBe(true);
        });

        it("rejeita string vazia", () => {
            const result = validator.validate("", { format: "alphanumeric" });
            expect(result.isValid).toBe(false);
            expect(result.message).toBe("CNPJ está vazio.");
        });

        it("rejeita CNPJ com todos os caracteres iguais no modo alfanumérico", () => {
            // Letras nas posições de DV são bloqueadas pelo formato, portanto o caso
            // de repetição que chega ao check de isRepeatedChars usa dígitos.
            const result = validator.validate("00000000000000", { format: "alphanumeric" });
            expect(result.isValid).toBe(false);
            expect(result.message).toBe("CNPJ é inválido.");
        });
    });

    // -------------------------------------------------------------------------
    // Flag explícita — format: 'numeric'
    // -------------------------------------------------------------------------

    describe("Com flag explícita format: 'numeric'", () => {
        it("rejeita CNPJ com letras quando modo numérico é forçado", () => {
            const result = validator.validate("12ABC34501DE35", { format: "numeric" });
            expect(result.isValid).toBe(false);
            expect(result.message).toBe("CNPJ com formato inválido.");
        });

        it("aceita CNPJ numérico válido com flag numérica explícita", () => {
            const result = validator.validate("11222333000181", { format: "numeric" });
            expect(result.isValid).toBe(true);
        });
    });
});
