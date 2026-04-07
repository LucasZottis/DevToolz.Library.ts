import { GcdCalculator } from './gcd.calculator';

describe('GcdCalculator', () => {
    let calculator: GcdCalculator;

    beforeEach(() => {
        calculator = new GcdCalculator();
    });

    describe('calculate', () => {
        test('MDC de 12 e 8 é 4', () => {
            expect(calculator.calculate(12, 8)).toBe(4);
        });

        test('MDC de 100 e 75 é 25', () => {
            expect(calculator.calculate(100, 75)).toBe(25);
        });

        test('MDC de 7 e 3 é 1 (coprimos)', () => {
            expect(calculator.calculate(7, 3)).toBe(1);
        });

        test('MDC de 0 e 5 é 5', () => {
            expect(calculator.calculate(0, 5)).toBe(5);
        });

        test('MDC de 5 e 0 é 5', () => {
            expect(calculator.calculate(5, 0)).toBe(5);
        });

        test('MDC de números negativos: MDC(-12, 8) é 4', () => {
            expect(calculator.calculate(-12, 8)).toBe(4);
        });

        test('MDC de dois números negativos: MDC(-12, -8) é 4', () => {
            expect(calculator.calculate(-12, -8)).toBe(4);
        });

        test('MDC de um número consigo mesmo é o próprio número', () => {
            expect(calculator.calculate(6, 6)).toBe(6);
        });

        test('MDC de 1 e qualquer número é 1', () => {
            expect(calculator.calculate(1, 100)).toBe(1);
        });

        test('MDC de três valores: MDC(12, 8, 6) é 2', () => {
            expect(calculator.calculate(12, 8, 6)).toBe(2);
        });

        test('MDC de quatro valores: MDC(100, 75, 50, 25) é 25', () => {
            expect(calculator.calculate(100, 75, 50, 25)).toBe(25);
        });

        test('MDC de cinco valores: MDC(60, 48, 36, 24, 12) é 12', () => {
            expect(calculator.calculate(60, 48, 36, 24, 12)).toBe(12);
        });

        test('lança erro quando menos de dois valores são fornecidos', () => {
            expect(() => calculator.calculate(5)).toThrow("São necessários pelo menos dois valores.");
        });

        test('lança erro quando todos os valores são zero', () => {
            expect(() => calculator.calculate(0, 0)).toThrow("Todos os valores não podem ser zero simultaneamente.");
        });

        test('lança erro quando todos os valores são zero (múltiplos)', () => {
            expect(() => calculator.calculate(0, 0, 0)).toThrow("Todos os valores não podem ser zero simultaneamente.");
        });

        test('lança erro quando algum valor não é inteiro', () => {
            expect(() => calculator.calculate(1.5, 3)).toThrow("Os valores devem ser números inteiros.");
        });

        test('lança erro quando algum valor não é inteiro (múltiplos)', () => {
            expect(() => calculator.calculate(4, 2, 1.5)).toThrow("Os valores devem ser números inteiros.");
        });
    });
});
