import { Cpf } from "./cpf";

describe("Cpf", () => {

    // -------------------------------------------------------------------------
    // parse
    // -------------------------------------------------------------------------

    describe("parse", () => {
        it("deve criar um Cpf a partir de um valor formatado válido", () => {
            const cpf = Cpf.parse("529.982.247-25");
            expect(cpf).toBeInstanceOf(Cpf);
        });

        it("deve criar um Cpf a partir de um valor sem máscara válido", () => {
            const cpf = Cpf.parse("52998224725");
            expect(cpf).toBeInstanceOf(Cpf);
        });

        it("deve preencher baseDigits com os 8 primeiros dígitos", () => {
            const cpf = Cpf.parse("529.982.247-25");
            expect(cpf.baseDigits).toBe("52998224");
        });

        it("deve preencher regionDigit com o nono dígito", () => {
            const cpf = Cpf.parse("529.982.247-25");
            expect(cpf.regionDigit).toBe("7");
        });

        it("deve preencher firstVerifyDigit com o décimo dígito", () => {
            const cpf = Cpf.parse("529.982.247-25");
            expect(cpf.firstVerifyDigit).toBe("2");
        });

        it("deve preencher secondVerifyDigit com o décimo primeiro dígito", () => {
            const cpf = Cpf.parse("529.982.247-25");
            expect(cpf.secondVerifyDigit).toBe("5");
        });

        it("deve lançar erro ao receber CPF inválido", () => {
            expect(() => Cpf.parse("000.000.000-00")).toThrow();
        });

        it("deve lançar erro ao receber string vazia", () => {
            expect(() => Cpf.parse("")).toThrow("CPF está vazio.");
        });

        it("deve lançar erro ao receber formato inválido", () => {
            expect(() => Cpf.parse("123")).toThrow("CPF com formato inválido.");
        });

        it("deve lançar erro com mensagem correta para dígito verificador errado", () => {
            expect(() => Cpf.parse("529.982.247-99")).toThrow("Primeiro dígito verificador é inválido.");
        });
    });

    // -------------------------------------------------------------------------
    // tryParse
    // -------------------------------------------------------------------------

    describe("tryParse", () => {
        it("deve retornar instância de Cpf para valor válido", () => {
            const cpf = Cpf.tryParse("529.982.247-25");
            expect(cpf).toBeInstanceOf(Cpf);
        });

        it("deve retornar null para CPF inválido", () => {
            const cpf = Cpf.tryParse("000.000.000-00");
            expect(cpf).toBeNull();
        });

        it("deve retornar null para string vazia", () => {
            const cpf = Cpf.tryParse("");
            expect(cpf).toBeNull();
        });

        it("deve retornar null para formato inválido", () => {
            const cpf = Cpf.tryParse("abc");
            expect(cpf).toBeNull();
        });
    });

    // -------------------------------------------------------------------------
    // validate
    // -------------------------------------------------------------------------

    describe("validate", () => {
        it("deve retornar isValid true para CPF válido", () => {
            const result = Cpf.validate("529.982.247-25");
            expect(result.isValid).toBe(true);
        });

        it("deve retornar isValid false para CPF inválido", () => {
            const result = Cpf.validate("000.000.000-00");
            expect(result.isValid).toBe(false);
        });

        it("deve retornar mensagem descritiva no resultado", () => {
            const result = Cpf.validate("529.982.247-25");
            expect(result.message).toBe("Válido");
        });

        it("deve retornar mensagem de erro para CPF vazio", () => {
            const result = Cpf.validate("");
            expect(result.message).toBe("CPF está vazio.");
        });
    });

    // -------------------------------------------------------------------------
    // generate
    // -------------------------------------------------------------------------

    describe("generate", () => {
        it("deve retornar uma instância de Cpf", () => {
            const cpf = Cpf.generate();
            expect(cpf).toBeInstanceOf(Cpf);
        });

        it("deve gerar um CPF com baseDigits de 8 caracteres", () => {
            const cpf = Cpf.generate();
            expect(cpf.baseDigits).toHaveLength(8);
        });

        it("deve gerar um CPF com regionDigit de 1 caractere numérico", () => {
            const cpf = Cpf.generate();
            expect(cpf.regionDigit).toMatch(/^\d$/);
        });

        it("deve gerar um CPF com firstVerifyDigit de 1 caractere numérico", () => {
            const cpf = Cpf.generate();
            expect(cpf.firstVerifyDigit).toMatch(/^\d$/);
        });

        it("deve gerar um CPF com secondVerifyDigit de 1 caractere numérico", () => {
            const cpf = Cpf.generate();
            expect(cpf.secondVerifyDigit).toMatch(/^\d$/);
        });

        it("deve gerar CPF matematicamente válido", () => {
            const cpf = Cpf.generate();
            const result = Cpf.validate(cpf.toString());
            expect(result.isValid).toBe(true);
        });

        it("deve gerar CPF formatado matematicamente válido ao passar formatted=true", () => {
            const cpf = Cpf.generate(true);
            const result = Cpf.validate(cpf.toString());
            expect(result.isValid).toBe(true);
        });

        it("deve gerar CPFs diferentes entre chamadas", () => {
            const results = new Set(Array.from({ length: 20 }, () => Cpf.generate().toString()));
            expect(results.size).toBeGreaterThan(1);
        });
    });

    // -------------------------------------------------------------------------
    // toString / toFormatted
    // -------------------------------------------------------------------------

    describe("toString", () => {
        it("deve retornar 11 dígitos sem máscara", () => {
            const cpf = Cpf.parse("529.982.247-25");
            expect(cpf.toString()).toBe("52998224725");
        });

        it("deve retornar apenas dígitos", () => {
            const cpf = Cpf.parse("529.982.247-25");
            expect(cpf.toString()).toMatch(/^\d{11}$/);
        });
    });

    describe("toFormatted", () => {
        it("deve retornar o CPF no formato NNN.NNN.NNN-NN", () => {
            const cpf = Cpf.parse("52998224725");
            expect(cpf.toFormatted()).toBe("529.982.247-25");
        });

        it("deve retornar o mesmo resultado independente de o input ter máscara", () => {
            const semMascara = Cpf.parse("52998224725").toFormatted();
            const comMascara = Cpf.parse("529.982.247-25").toFormatted();
            expect(semMascara).toBe(comMascara);
        });
    });

    // -------------------------------------------------------------------------
    // Imutabilidade
    // -------------------------------------------------------------------------

    describe("imutabilidade", () => {
        it("baseDigits não deve ser alterável externamente", () => {
            const cpf = Cpf.parse("529.982.247-25");
            expect(() => {
                (cpf as any).baseDigits = "00000000";
            }).toThrow();
        });

        it("regionDigit não deve ser alterável externamente", () => {
            const cpf = Cpf.parse("529.982.247-25");
            expect(() => {
                (cpf as any).regionDigit = "0";
            }).toThrow();
        });

        it("firstVerifyDigit não deve ser alterável externamente", () => {
            const cpf = Cpf.parse("529.982.247-25");
            expect(() => {
                (cpf as any).firstVerifyDigit = "0";
            }).toThrow();
        });

        it("secondVerifyDigit não deve ser alterável externamente", () => {
            const cpf = Cpf.parse("529.982.247-25");
            expect(() => {
                (cpf as any).secondVerifyDigit = "0";
            }).toThrow();
        });
    });
});