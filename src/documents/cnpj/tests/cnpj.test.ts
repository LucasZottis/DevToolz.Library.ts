import { Cnpj } from "../cnpj";

describe("Cnpj", () => {

    // -------------------------------------------------------------------------
    // parse
    // -------------------------------------------------------------------------

    describe("parse", () => {
        it("deve retornar uma instância de Cnpj para CNPJ válido sem máscara", () => {
            const cnpj = Cnpj.parse("11222333000181");
            expect(cnpj).toBeInstanceOf(Cnpj);
        });

        it("deve retornar uma instância de Cnpj para CNPJ válido com máscara", () => {
            const cnpj = Cnpj.parse("11.222.333/0001-81");
            expect(cnpj).toBeInstanceOf(Cnpj);
        });

        it("deve lançar erro para CNPJ inválido", () => {
            expect(() => Cnpj.parse("00000000000000")).toThrow();
        });

        it("deve lançar erro para string vazia", () => {
            expect(() => Cnpj.parse("")).toThrow();
        });

        it("deve extrair rootDigits com 8 caracteres", () => {
            const cnpj = Cnpj.parse("11222333000181");
            expect(cnpj.rootDigits).toBe("11222333");
        });

        it("deve extrair orderDigits com 4 caracteres", () => {
            const cnpj = Cnpj.parse("11222333000181");
            expect(cnpj.orderDigits).toBe("0001");
        });

        it("deve extrair firstVerifyDigit com 1 caractere", () => {
            const cnpj = Cnpj.parse("11222333000181");
            expect(cnpj.firstVerifyDigit).toMatch(/^\d$/);
        });

        it("deve extrair secondVerifyDigit com 1 caractere", () => {
            const cnpj = Cnpj.parse("11222333000181");
            expect(cnpj.secondVerifyDigit).toMatch(/^\d$/);
        });

        it("deve retornar instância de Cnpj para CNPJ alfanumérico sem máscara", () => {
            const cnpj = Cnpj.parse("12ABC34501DE35");
            expect(cnpj).toBeInstanceOf(Cnpj);
        });

        it("deve retornar instância de Cnpj para CNPJ alfanumérico com máscara", () => {
            const cnpj = Cnpj.parse("12.ABC.345/01DE-35");
            expect(cnpj).toBeInstanceOf(Cnpj);
        });

        it("deve extrair rootDigits alfanumérico com 8 caracteres", () => {
            const cnpj = Cnpj.parse("12ABC34501DE35");
            expect(cnpj.rootDigits).toBe("12ABC345");
        });

        it("deve extrair orderDigits alfanumérico com 4 caracteres", () => {
            const cnpj = Cnpj.parse("12ABC34501DE35");
            expect(cnpj.orderDigits).toBe("01DE");
        });

        it("deve extrair firstVerifyDigit numérico de CNPJ alfanumérico", () => {
            const cnpj = Cnpj.parse("12ABC34501DE35");
            expect(cnpj.firstVerifyDigit).toBe("3");
        });

        it("deve extrair secondVerifyDigit numérico de CNPJ alfanumérico", () => {
            const cnpj = Cnpj.parse("12ABC34501DE35");
            expect(cnpj.secondVerifyDigit).toBe("5");
        });

        it("deve lançar erro para CNPJ alfanumérico com DV inválido", () => {
            expect(() => Cnpj.parse("12ABC34501DE36")).toThrow();
        });

        it("deve lançar erro para CNPJ alfanumérico ao forçar format: 'numeric'", () => {
            expect(() => Cnpj.parse("12ABC34501DE35", { format: "numeric" })).toThrow();
        });
    });

    // -------------------------------------------------------------------------
    // tryParse
    // -------------------------------------------------------------------------

    describe("tryParse", () => {
        it("deve retornar instância de Cnpj para CNPJ válido", () => {
            const cnpj = Cnpj.tryParse("11222333000181");
            expect(cnpj).toBeInstanceOf(Cnpj);
        });

        it("deve retornar null para CNPJ inválido", () => {
            const cnpj = Cnpj.tryParse("00000000000000");
            expect(cnpj).toBeNull();
        });

        it("deve retornar null para string vazia", () => {
            const cnpj = Cnpj.tryParse("");
            expect(cnpj).toBeNull();
        });

        it("deve retornar instância de Cnpj para CNPJ alfanumérico válido", () => {
            const cnpj = Cnpj.tryParse("12ABC34501DE35");
            expect(cnpj).toBeInstanceOf(Cnpj);
        });

        it("deve retornar null para CNPJ alfanumérico com DV inválido", () => {
            const cnpj = Cnpj.tryParse("12ABC34501DE36");
            expect(cnpj).toBeNull();
        });
    });

    // -------------------------------------------------------------------------
    // validate
    // -------------------------------------------------------------------------

    describe("validate", () => {
        it("deve retornar isValid true para CNPJ numérico válido", () => {
            const result = Cnpj.validate("11222333000181");
            expect(result.isValid).toBe(true);
        });

        it("deve retornar isValid false para CNPJ numérico inválido", () => {
            const result = Cnpj.validate("00000000000000");
            expect(result.isValid).toBe(false);
        });

        it("deve retornar isValid true para CNPJ alfanumérico válido", () => {
            const result = Cnpj.validate("12ABC34501DE35");
            expect(result.isValid).toBe(true);
        });

        it("deve retornar isValid false para CNPJ alfanumérico com DV errado", () => {
            const result = Cnpj.validate("12ABC34501DE36");
            expect(result.isValid).toBe(false);
        });

        it("deve aceitar format: 'alphanumeric' explícito", () => {
            const result = Cnpj.validate("12ABC34501DE35", { format: "alphanumeric" });
            expect(result.isValid).toBe(true);
        });
    });

    // -------------------------------------------------------------------------
    // generate
    // -------------------------------------------------------------------------

    describe("generate", () => {
        it("deve retornar uma instância de Cnpj numérico", () => {
            const cnpj = Cnpj.generate();
            expect(cnpj).toBeInstanceOf(Cnpj);
        });

        it("deve gerar CNPJ numérico com rootDigits de 8 dígitos", () => {
            const cnpj = Cnpj.generate();
            expect(cnpj.rootDigits).toHaveLength(8);
            expect(cnpj.rootDigits).toMatch(/^\d{8}$/);
        });

        it("deve gerar CNPJ numérico com orderDigits de 4 dígitos", () => {
            const cnpj = Cnpj.generate();
            expect(cnpj.orderDigits).toHaveLength(4);
            expect(cnpj.orderDigits).toMatch(/^\d{4}$/);
        });

        it("deve gerar CNPJ numérico com DVs de 1 dígito cada", () => {
            const cnpj = Cnpj.generate();
            expect(cnpj.firstVerifyDigit).toMatch(/^\d$/);
            expect(cnpj.secondVerifyDigit).toMatch(/^\d$/);
        });

        it("deve gerar CNPJ numérico matematicamente válido", () => {
            const cnpj = Cnpj.generate();
            expect(Cnpj.validate(cnpj.toString()).isValid).toBe(true);
        });

        it("deve gerar CNPJs diferentes entre chamadas", () => {
            const results = new Set(Array.from({ length: 20 }, () => Cnpj.generate().toString()));
            expect(results.size).toBeGreaterThan(1);
        });

        it("deve retornar instância de Cnpj alfanumérico", () => {
            const cnpj = Cnpj.generate({ format: "alphanumeric" });
            expect(cnpj).toBeInstanceOf(Cnpj);
        });

        it("deve gerar CNPJ alfanumérico com rootDigits de 8 caracteres [A-Z0-9]", () => {
            const cnpj = Cnpj.generate({ format: "alphanumeric" });
            expect(cnpj.rootDigits).toHaveLength(8);
            expect(cnpj.rootDigits).toMatch(/^[A-Z0-9]{8}$/);
        });

        it("deve gerar CNPJ alfanumérico com orderDigits de 4 caracteres [A-Z0-9]", () => {
            const cnpj = Cnpj.generate({ format: "alphanumeric" });
            expect(cnpj.orderDigits).toHaveLength(4);
            expect(cnpj.orderDigits).toMatch(/^[A-Z0-9]{4}$/);
        });

        it("deve gerar CNPJ alfanumérico com DVs sempre numéricos", () => {
            const cnpj = Cnpj.generate({ format: "alphanumeric" });
            expect(cnpj.firstVerifyDigit).toMatch(/^\d$/);
            expect(cnpj.secondVerifyDigit).toMatch(/^\d$/);
        });

        it("deve gerar CNPJ alfanumérico matematicamente válido", () => {
            for (let i = 0; i < 10; i++) {
                const cnpj = Cnpj.generate({ format: "alphanumeric" });
                expect(Cnpj.validate(cnpj.toString()).isValid).toBe(true);
            }
        });
    });

    // -------------------------------------------------------------------------
    // toString / toFormatted
    // -------------------------------------------------------------------------

    describe("toString", () => {
        it("deve retornar 14 dígitos sem máscara para CNPJ numérico", () => {
            const cnpj = Cnpj.parse("11.222.333/0001-81");
            expect(cnpj.toString()).toBe("11222333000181");
        });

        it("deve retornar apenas dígitos para CNPJ numérico", () => {
            const cnpj = Cnpj.parse("11.222.333/0001-81");
            expect(cnpj.toString()).toMatch(/^\d{14}$/);
        });

        it("deve retornar 14 caracteres alfanuméricos sem máscara para CNPJ alfanumérico", () => {
            const cnpj = Cnpj.parse("12.ABC.345/01DE-35");
            expect(cnpj.toString()).toBe("12ABC34501DE35");
        });
    });

    describe("toFormatted", () => {
        it("deve retornar o CNPJ no formato NN.NNN.NNN/NNNN-NN", () => {
            const cnpj = Cnpj.parse("11222333000181");
            expect(cnpj.toFormatted()).toBe("11.222.333/0001-81");
        });

        it("deve retornar o mesmo resultado independente de o input ter máscara", () => {
            const semMascara = Cnpj.parse("11222333000181").toFormatted();
            const comMascara = Cnpj.parse("11.222.333/0001-81").toFormatted();
            expect(semMascara).toBe(comMascara);
        });

        it("deve retornar CNPJ alfanumérico com máscara", () => {
            const cnpj = Cnpj.parse("12ABC34501DE35");
            expect(cnpj.toFormatted()).toBe("12.ABC.345/01DE-35");
        });

        it("deve retornar o mesmo resultado alfanumérico independente de o input ter máscara", () => {
            const semMascara = Cnpj.parse("12ABC34501DE35").toFormatted();
            const comMascara = Cnpj.parse("12.ABC.345/01DE-35").toFormatted();
            expect(semMascara).toBe(comMascara);
        });
    });

    // -------------------------------------------------------------------------
    // Imutabilidade
    // -------------------------------------------------------------------------

    describe("imutabilidade", () => {
        it("rootDigits não deve ser alterável externamente", () => {
            const cnpj = Cnpj.parse("11.222.333/0001-81");
            expect(() => {
                (cnpj as any).rootDigits = "00000000";
            }).toThrow();
        });

        it("orderDigits não deve ser alterável externamente", () => {
            const cnpj = Cnpj.parse("11.222.333/0001-81");
            expect(() => {
                (cnpj as any).orderDigits = "0000";
            }).toThrow();
        });

        it("firstVerifyDigit não deve ser alterável externamente", () => {
            const cnpj = Cnpj.parse("11.222.333/0001-81");
            expect(() => {
                (cnpj as any).firstVerifyDigit = "0";
            }).toThrow();
        });

        it("secondVerifyDigit não deve ser alterável externamente", () => {
            const cnpj = Cnpj.parse("11.222.333/0001-81");
            expect(() => {
                (cnpj as any).secondVerifyDigit = "0";
            }).toThrow();
        });

        it("rootDigits alfanumérico não deve ser alterável externamente", () => {
            const cnpj = Cnpj.parse("12ABC34501DE35");
            expect(() => {
                (cnpj as any).rootDigits = "00000000";
            }).toThrow();
        });
    });
});
