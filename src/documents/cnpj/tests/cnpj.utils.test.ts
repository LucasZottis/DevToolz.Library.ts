import { charToDigitValue, calcVerifyingDigit, isRepeatedChars } from "../cnpj.utils";

describe("cnpj.utils", () => {

    // -------------------------------------------------------------------------
    // charToDigitValue
    // -------------------------------------------------------------------------

    describe("charToDigitValue", () => {
        it("converte '0' para 0", () => {
            expect(charToDigitValue("0")).toBe(0);
        });

        it("converte '9' para 9", () => {
            expect(charToDigitValue("9")).toBe(9);
        });

        it("converte 'A' para 17", () => {
            expect(charToDigitValue("A")).toBe(17);
        });

        it("converte 'Z' para 42", () => {
            expect(charToDigitValue("Z")).toBe(42);
        });

        it("normaliza letra minúscula para o mesmo valor da maiúscula", () => {
            expect(charToDigitValue("a")).toBe(charToDigitValue("A"));
        });

        it("produz valores consecutivos e crescentes para A–Z", () => {
            const valores = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                .split("")
                .map(c => charToDigitValue(c));
            for (let i = 1; i < valores.length; i++)
                expect(valores[i]).toBe(valores[i - 1] + 1);
        });
    });

    // -------------------------------------------------------------------------
    // calcVerifyingDigit — exemplo de referência "12ABC34501DE"
    // DV1 = 3 (startCounter = 5, soma = 459, 459 % 11 = 8, 11 - 8 = 3)
    // DV2 = 5 (startCounter = 6, soma = 424, 424 % 11 = 6, 11 - 6 = 5)
    // -------------------------------------------------------------------------

    describe("calcVerifyingDigit", () => {
        const base = "12ABC34501DE";

        it("calcula DV1 = '3' para base alfanumérica com startCounter=5", () => {
            expect(calcVerifyingDigit(5, base)).toBe("3");
        });

        it("calcula DV2 = '5' para base + DV1 com startCounter=6", () => {
            expect(calcVerifyingDigit(6, base + "3")).toBe("5");
        });

        it("mantém resultado correto para base puramente numérica (regressão)", () => {
            expect(calcVerifyingDigit(5, "112223330001")).toBe("8");
            expect(calcVerifyingDigit(6, "1122233300018")).toBe("1");
        });
    });

    // -------------------------------------------------------------------------
    // isRepeatedChars
    // -------------------------------------------------------------------------

    describe("isRepeatedChars", () => {
        it("detecta 14 dígitos iguais", () => {
            expect(isRepeatedChars("00000000000000")).toBe(true);
        });

        it("detecta 14 letras iguais", () => {
            expect(isRepeatedChars("AAAAAAAAAAAAAA")).toBe(true);
        });

        it("detecta 12 caracteres iguais (base de 12 sem DV)", () => {
            expect(isRepeatedChars("000000000000")).toBe(true);
        });

        it("não detecta CNPJ numérico válido como repetido", () => {
            expect(isRepeatedChars("11222333000181")).toBe(false);
        });

        it("não detecta CNPJ alfanumérico válido como repetido", () => {
            expect(isRepeatedChars("12ABC34501DE35")).toBe(false);
        });
    });
});
