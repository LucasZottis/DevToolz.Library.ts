import { RuleOfThreeCalculator } from "./rule-of-three.calculator";

describe('RuleOfThreeCalculator', () => {
    let calculator: RuleOfThreeCalculator;

    beforeEach(() => {
        calculator = new RuleOfThreeCalculator();
    });

    describe('simplaDireta', () => {
        test('2 está para 4 assim como 3 está para 6', () => {
            expect(calculator.simplaDireta(2, 4, 3)).toBe(6);
        });

        test('10 está para 50 assim como 3 está para 15', () => {
            expect(calculator.simplaDireta(10, 50, 3)).toBe(15);
        });

        test('5 está para 20 assim como 1 está para 4', () => {
            expect(calculator.simplaDireta(5, 20, 1)).toBe(4);
        });

        test('resultado fracionário', () => {
            expect(calculator.simplaDireta(3, 1, 1)).toBeCloseTo(0.333, 2);
        });

        test('valores negativos', () => {
            expect(calculator.simplaDireta(-2, 4, 3)).toBe(-6);
        });

        test('lança erro quando a é zero', () => {
            expect(() => calculator.simplaDireta(0, 4, 3)).toThrow("O valor 'a' não pode ser zero.");
        });

        test('lança erro para valores infinitos', () => {
            expect(() => calculator.simplaDireta(Infinity, 4, 3)).toThrow("Os valores devem ser números finitos.");
        });
    });

    describe('simplesInversa', () => {
        test('4 operários em 3 dias: 6 operários em 2 dias', () => {
            expect(calculator.simplesInversa(4, 3, 6)).toBe(2);
        });

        test('10 máquinas em 6 horas: 3 máquinas em 20 horas', () => {
            expect(calculator.simplesInversa(10, 6, 3)).toBe(20);
        });

        test('2 está para 8 inversamente como 4 está para 4', () => {
            expect(calculator.simplesInversa(2, 8, 4)).toBe(4);
        });

        test('valores negativos', () => {
            expect(calculator.simplesInversa(-4, 3, 6)).toBe(-2);
        });

        test('lança erro quando c é zero', () => {
            expect(() => calculator.simplesInversa(4, 3, 0)).toThrow("O valor 'c' não pode ser zero.");
        });

        test('lança erro para valores infinitos', () => {
            expect(() => calculator.simplesInversa(4, Infinity, 3)).toThrow("Os valores devem ser números finitos.");
        });
    });

    describe('composta', () => {
        test('dois fatores diretos', () => {
            // 4 trabalhadores em 3 dias fazem 12 unidades
            // 6 trabalhadores em 5 dias fazem x unidades
            // Ambos diretamente proporcionais
            const resultado = calculator.composta(12, [
                { a: 4, c: 6, proporcao: 'direta' },
                { a: 3, c: 5, proporcao: 'direta' },
            ]);
            expect(resultado).toBe(30);
        });

        test('fator direto e fator inverso', () => {
            // 4 canos, 6 dias, 2 piscinas
            // 6 canos, x dias, 3 piscinas
            // Canos: inversa (mais canos = menos dias), Piscinas: direta (mais piscinas = mais dias)
            // x = 6 * (4/6) * (3/2) = 6
            const resultado = calculator.composta(6, [
                { a: 4, c: 6, proporcao: 'inversa' },
                { a: 2, c: 3, proporcao: 'direta' },
            ]);
            expect(resultado).toBe(6);
        });

        test('um único fator direto equivale à regra de 3 simples direta', () => {
            const resultado = calculator.composta(4, [
                { a: 2, c: 3, proporcao: 'direta' },
            ]);
            expect(resultado).toBe(6);
        });

        test('um único fator inverso equivale à regra de 3 simples inversa', () => {
            const resultado = calculator.composta(3, [
                { a: 4, c: 6, proporcao: 'inversa' },
            ]);
            expect(resultado).toBe(2);
        });

        test('lança erro com lista de fatores vazia', () => {
            expect(() => calculator.composta(10, [])).toThrow("É necessário pelo menos um fator.");
        });

        test('lança erro quando a de fator direto é zero', () => {
            expect(() => calculator.composta(10, [{ a: 0, c: 5, proporcao: 'direta' }]))
                .toThrow("O valor 'a' de um fator direto não pode ser zero.");
        });

        test('lança erro quando c de fator inverso é zero', () => {
            expect(() => calculator.composta(10, [{ a: 5, c: 0, proporcao: 'inversa' }]))
                .toThrow("O valor 'c' de um fator inverso não pode ser zero.");
        });

        test('lança erro para valores infinitos', () => {
            expect(() => calculator.composta(Infinity, [{ a: 2, c: 3, proporcao: 'direta' }]))
                .toThrow("Os valores devem ser números finitos.");
        });
    });
});
