// import { CpfFormatter } from "./cpf.formatter";

import { CpfFormatter } from "../cpf.formatter";

describe("CpfFormatter", () => {
    let formatter: CpfFormatter;

    beforeEach(() => {
        formatter = new CpfFormatter();
    });

    // -------------------------------------------------------------------------
    // applyMask
    // -------------------------------------------------------------------------

    describe("applyMask", () => {
        it("deve formatar CPF sem máscara para o padrão NNN.NNN.NNN-NN", () => {
            expect(formatter.applyMask("52998224725")).toBe("529.982.247-25");
        });

        it("deve formatar CPF com dígito verificador zero", () => {
            expect(formatter.applyMask("87129210740")).toBe("871.292.107-40");
        });

        it("deve formatar CPF iniciado com zero", () => {
            expect(formatter.applyMask("01234567890")).toBe("012.345.678-90");
        });

        it("deve retornar string vazia ao receber string vazia", () => {
            expect(formatter.applyMask("")).toBe("");
        });

        it("não deve alterar entrada com menos de 11 dígitos", () => {
            expect(formatter.applyMask("1234567")).toBe("1234567");
        });

        it("não deve alterar entrada com mais de 11 dígitos", () => {
            // A regex captura apenas os primeiros 11 dígitos — o excedente fica sem máscara
            const result = formatter.applyMask("529982247250");
            expect(result).toMatch(/^\d{3}\.\d{3}\.\d{3}-\d{2}/);
        });
    });

    // -------------------------------------------------------------------------
    // removeMask
    // -------------------------------------------------------------------------

    describe("removeMask", () => {
        it("deve remover pontos e traço do CPF formatado", () => {
            expect(formatter.removeMask("529.982.247-25")).toBe("52998224725");
        });

        it("deve retornar o mesmo valor se não houver máscara", () => {
            expect(formatter.removeMask("52998224725")).toBe("52998224725");
        });

        it("deve remover qualquer caractere não numérico", () => {
            expect(formatter.removeMask("529 982 247 25")).toBe("52998224725");
        });

        it("deve retornar string vazia ao receber string vazia", () => {
            expect(formatter.removeMask("")).toBe("");
        });

        it("deve retornar string vazia ao receber apenas caracteres não numéricos", () => {
            expect(formatter.removeMask("...--")).toBe("");
        });

        it("deve preservar zeros à esquerda", () => {
            expect(formatter.removeMask("012.345.678-90")).toBe("01234567890");
        });
    });

    // -------------------------------------------------------------------------
    // Simetria — applyMask ↔ removeMask
    // -------------------------------------------------------------------------

    describe("simetria entre applyMask e removeMask", () => {
        it("removeMask(applyMask(raw)) deve retornar o valor original", () => {
            const raw = "52998224725";
            expect(formatter.removeMask(formatter.applyMask(raw))).toBe(raw);
        });

        it("applyMask(removeMask(formatted)) deve retornar o valor original", () => {
            const formatted = "529.982.247-25";
            expect(formatter.applyMask(formatter.removeMask(formatted))).toBe(formatted);
        });
    });
});