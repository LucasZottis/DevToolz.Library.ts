import { CnpjFormatter } from "../cnpj.formatter";

describe("CnpjFormatter", () => {
    let formatter: CnpjFormatter;

    beforeEach(() => {
        formatter = new CnpjFormatter();
    });

    // -------------------------------------------------------------------------
    // applyMask
    // -------------------------------------------------------------------------

    describe("applyMask", () => {
        it("deve formatar CNPJ sem máscara para o padrão NN.NNN.NNN/NNNN-NN", () => {
            expect(formatter.applyMask("11222333000181")).toBe("11.222.333/0001-81");
        });

        it("deve formatar CNPJ iniciado com zero", () => {
            expect(formatter.applyMask("00000000000191")).toBe("00.000.000/0001-91");
        });

        it("deve retornar string vazia ao receber string vazia", () => {
            expect(formatter.applyMask("")).toBe("");
        });

        it("não deve alterar entrada com menos de 14 dígitos", () => {
            expect(formatter.applyMask("1234567")).toBe("1234567");
        });
    });

    // -------------------------------------------------------------------------
    // removeMask
    // -------------------------------------------------------------------------

    describe("removeMask", () => {
        it("deve remover pontos, barra e traço do CNPJ formatado", () => {
            expect(formatter.removeMask("11.222.333/0001-81")).toBe("11222333000181");
        });

        it("deve retornar o mesmo valor se não houver máscara", () => {
            expect(formatter.removeMask("11222333000181")).toBe("11222333000181");
        });

        it("deve remover qualquer caractere não numérico", () => {
            expect(formatter.removeMask("11 222 333 0001 81")).toBe("11222333000181");
        });

        it("deve retornar string vazia ao receber string vazia", () => {
            expect(formatter.removeMask("")).toBe("");
        });

        it("deve retornar string vazia ao receber apenas caracteres não numéricos", () => {
            expect(formatter.removeMask("..//--")).toBe("");
        });

        it("deve preservar zeros à esquerda", () => {
            expect(formatter.removeMask("00.000.000/0001-91")).toBe("00000000000191");
        });
    });

    // -------------------------------------------------------------------------
    // Simetria — applyMask ↔ removeMask
    // -------------------------------------------------------------------------

    describe("simetria entre applyMask e removeMask", () => {
        it("removeMask(applyMask(raw)) deve retornar o valor original", () => {
            const raw = "11222333000181";
            expect(formatter.removeMask(formatter.applyMask(raw))).toBe(raw);
        });

        it("applyMask(removeMask(formatted)) deve retornar o valor original", () => {
            const formatted = "11.222.333/0001-81";
            expect(formatter.applyMask(formatter.removeMask(formatted))).toBe(formatted);
        });
    });
});