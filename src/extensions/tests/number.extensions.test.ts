import '../number.extensions';
import { NumberWordType } from '../number.extensions';

describe("Number.prototype.toWords", () => {
    describe("Numeric type (default)", () => {
        it("deve retornar 'zero' para 0", () => {
            expect((0).toWords()).toBe('zero');
        });

        it("deve retornar 'um' para 1", () => {
            expect((1).toWords()).toBe('um');
        });

        it("deve retornar 'treze' para 13", () => {
            expect((13).toWords()).toBe('treze');
        });

        it("deve retornar 'vinte' para 20", () => {
            expect((20).toWords()).toBe('vinte');
        });

        it("deve retornar 'vinte e um' para 21", () => {
            expect((21).toWords()).toBe('vinte e um');
        });

        it("deve retornar 'cem' para 100", () => {
            expect((100).toWords()).toBe('cem');
        });

        it("deve retornar 'cento e um' para 101", () => {
            expect((101).toWords()).toBe('cento e um');
        });

        it("deve retornar 'duzentos' para 200", () => {
            expect((200).toWords()).toBe('duzentos');
        });

        it("deve retornar 'duzentos e cinquenta e cinco' para 255", () => {
            expect((255).toWords()).toBe('duzentos e cinquenta e cinco');
        });

        it("deve retornar 'novecentos e noventa e nove' para 999", () => {
            expect((999).toWords()).toBe('novecentos e noventa e nove');
        });

        it("deve retornar 'mil' para 1000", () => {
            expect((1000).toWords()).toBe('mil');
        });

        it("deve retornar 'mil e um' para 1001", () => {
            expect((1001).toWords()).toBe('mil e um');
        });

        it("deve retornar 'mil e cem' para 1100", () => {
            expect((1100).toWords()).toBe('mil e cem');
        });

        it("deve retornar 'dois mil' para 2000", () => {
            expect((2000).toWords()).toBe('dois mil');
        });

        it("deve retornar 'dois mil e quinhentos' para 2500", () => {
            expect((2500).toWords()).toBe('dois mil e quinhentos');
        });

        it("deve retornar 'um milhão' para 1_000_000", () => {
            expect((1_000_000).toWords()).toBe('um milhão');
        });

        it("deve retornar 'dois milhões' para 2_000_000", () => {
            expect((2_000_000).toWords()).toBe('dois milhões');
        });

        it("deve retornar 'um milhão e um' para 1_000_001", () => {
            expect((1_000_001).toWords()).toBe('um milhão e um');
        });

        it("deve retornar 'um bilhão' para 1_000_000_000", () => {
            expect((1_000_000_000).toWords()).toBe('um bilhão');
        });

        it("deve retornar 'dois bilhões' para 2_000_000_000", () => {
            expect((2_000_000_000).toWords()).toBe('dois bilhões');
        });

        it("deve retornar numero negativo com prefixo 'menos'", () => {
            expect((-5).toWords()).toBe('menos cinco');
        });

        it("deve retornar 'menos mil e duzentos' para -1200", () => {
            expect((-1200).toWords()).toBe('menos mil e duzentos');
        });

        it("deve funcionar com tipo explicitamente Numeric", () => {
            expect((42).toWords(NumberWordType.Numeric)).toBe('quarenta e dois');
        });
    });

    describe("Monetary type", () => {
        it("deve retornar 'zero reais' para 0", () => {
            expect((0).toWords(NumberWordType.Monetary)).toBe('zero reais');
        });

        it("deve retornar 'um centavo' para 0.01", () => {
            expect((0.01).toWords(NumberWordType.Monetary)).toBe('um centavo');
        });

        it("deve retornar 'cinquenta centavos' para 0.50", () => {
            expect((0.50).toWords(NumberWordType.Monetary)).toBe('cinquenta centavos');
        });

        it("deve retornar 'um real' para 1.00", () => {
            expect((1).toWords(NumberWordType.Monetary)).toBe('um real');
        });

        it("deve retornar 'um real e um centavo' para 1.01", () => {
            expect((1.01).toWords(NumberWordType.Monetary)).toBe('um real e um centavo');
        });

        it("deve retornar 'um real e cinquenta centavos' para 1.50", () => {
            expect((1.50).toWords(NumberWordType.Monetary)).toBe('um real e cinquenta centavos');
        });

        it("deve retornar 'dois reais' para 2.00", () => {
            expect((2).toWords(NumberWordType.Monetary)).toBe('dois reais');
        });

        it("deve retornar 'dois reais e noventa e nove centavos' para 2.99", () => {
            expect((2.99).toWords(NumberWordType.Monetary)).toBe('dois reais e noventa e nove centavos');
        });

        it("deve retornar 'mil reais e cinquenta centavos' para 1000.50", () => {
            expect((1000.50).toWords(NumberWordType.Monetary)).toBe('mil reais e cinquenta centavos');
        });

        it("deve retornar negativo com prefixo 'menos'", () => {
            expect((-1).toWords(NumberWordType.Monetary)).toBe('menos um real');
        });

        it("deve retornar 'menos dois reais e cinquenta centavos' para -2.50", () => {
            expect((-2.50).toWords(NumberWordType.Monetary)).toBe('menos dois reais e cinquenta centavos');
        });
    });
});
