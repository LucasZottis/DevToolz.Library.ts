import { PearsonCorrelationCalculator } from './pearson-correlation.calculator';

describe('PearsonCorrelationCalculator', () => {
    let calculator: PearsonCorrelationCalculator;

    beforeEach(() => {
        calculator = new PearsonCorrelationCalculator();
    });

    describe('calculate', () => {
        test('correlação perfeita positiva: r=1', () => {
            const x = [1, 2, 3, 4, 5];
            const y = [2, 4, 6, 8, 10];
            expect(calculator.calculate(x, y)).toBeCloseTo(1, 10);
        });

        test('correlação perfeita negativa: r=-1', () => {
            const x = [1, 2, 3, 4, 5];
            const y = [10, 8, 6, 4, 2];
            expect(calculator.calculate(x, y)).toBeCloseTo(-1, 10);
        });

        test('sem correlação: r próximo de 0', () => {
            const x = [1, 2, 3, 4, 5];
            const y = [3, 3, 3, 3, 3];
            expect(() => calculator.calculate(x, y)).toThrow(
                "Correlation is undefined when one or both arrays have zero variance."
            );
        });

        test('correlação parcial positiva', () => {
            const x = [1, 2, 3, 4, 5];
            const y = [1, 3, 2, 5, 4];
            const result = calculator.calculate(x, y);
            expect(result).toBeGreaterThan(0);
            expect(result).toBeLessThan(1);
        });

        test('correlação parcial negativa', () => {
            const x = [1, 2, 3, 4, 5];
            const y = [5, 3, 4, 2, 1];
            const result = calculator.calculate(x, y);
            expect(result).toBeLessThan(0);
            expect(result).toBeGreaterThan(-1);
        });

        test('lança erro quando arrays têm tamanhos diferentes', () => {
            expect(() => calculator.calculate([1, 2, 3], [1, 2])).toThrow(
                "Arrays must have the same length."
            );
        });

        test('lança erro quando arrays estão vazios', () => {
            expect(() => calculator.calculate([], [])).toThrow(
                "Arrays must not be empty."
            );
        });

        test('correlação com valores conhecidos', () => {
            const x = [2, 4, 4, 4, 5, 5, 7, 9];
            const y = [3, 1, 4, 1, 5, 9, 2, 6];
            const result = calculator.calculate(x, y);
            expect(result).toBeCloseTo(0.3160, 4);
        });
    });
});
