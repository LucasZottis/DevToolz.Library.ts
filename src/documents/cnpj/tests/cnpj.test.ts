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
    });

    // -------------------------------------------------------------------------
    // validate
    // -------------------------------------------------------------------------

    // describe("validate", () => {
    //     it("deve retornar isValid true para CNPJ válido", () => {
    //         const result = Cnpj.validate("11222333000181");
    //         expect(result.isValid).toBe(true);
    //     });

    //     it("deve retornar isValid false para CNPJ inválido", () => {
    //         const result = Cnpj.validate("00000000000000");
    //         expect(result.isValid).toBe(false);
    //     });
    // });

    // -------------------------------------------------------------------------
    // generate
    // -------------------------------------------------------------------------

    // describe("generate", () => {
    //     it("deve retornar uma instância de Cnpj", () => {
    //         const cnpj = Cnpj.generate();
    //         expect(cnpj).toBeInstanceOf(Cnpj);
    //     });

    //     it("deve gerar um CNPJ com rootDigits de 8 caracteres", () => {
    //         const cnpj = Cnpj.generate();
    //         expect(cnpj.rootDigits).toHaveLength(8);
    //     });

    //     it("deve gerar um CNPJ com orderDigits de 4 caracteres", () => {
    //         const cnpj = Cnpj.generate();
    //         expect(cnpj.orderDigits).toHaveLength(4);
    //     });

    //     it("deve gerar um CNPJ com firstVerifyDigit de 1 caractere numérico", () => {
    //         const cnpj = Cnpj.generate();
    //         expect(cnpj.firstVerifyDigit).toMatch(/^\d$/);
    //     });

    //     it("deve gerar um CNPJ com secondVerifyDigit de 1 caractere numérico", () => {
    //         const cnpj = Cnpj.generate();
    //         expect(cnpj.secondVerifyDigit).toMatch(/^\d$/);
    //     });

    //     it("deve gerar CNPJ matematicamente válido", () => {
    //         const cnpj = Cnpj.generate();
    //         const result = Cnpj.validate(cnpj.toString());
    //         expect(result.isValid).toBe(true);
    //     });

    //     it("deve gerar CNPJ formatado matematicamente válido ao passar formatted=true", () => {
    //         const cnpj = Cnpj.generate(true);
    //         const result = Cnpj.validate(cnpj.toString());
    //         expect(result.isValid).toBe(true);
    //     });

    //     it("deve gerar CNPJs diferentes entre chamadas", () => {
    //         const results = new Set(Array.from({ length: 20 }, () => Cnpj.generate().toString()));
    //         expect(results.size).toBeGreaterThan(1);
    //     });
    // });

    // -------------------------------------------------------------------------
    // toString / toFormatted
    // -------------------------------------------------------------------------

    describe("toString", () => {
        it("deve retornar 14 dígitos sem máscara", () => {
            const cnpj = Cnpj.parse("11.222.333/0001-81");
            expect(cnpj.toString()).toBe("11222333000181");
        });

        it("deve retornar apenas dígitos", () => {
            const cnpj = Cnpj.parse("11.222.333/0001-81");
            expect(cnpj.toString()).toMatch(/^\d{14}$/);
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
    });
});