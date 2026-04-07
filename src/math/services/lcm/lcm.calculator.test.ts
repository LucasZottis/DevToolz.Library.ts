import { LcmCalculator } from './lcm.calculator';

describe('LcmCalculator', () => {
    let calculator: LcmCalculator;

    beforeEach(() => {
        calculator = new LcmCalculator();
    });

    describe('calculate', () => {
        test('MMC de 4 e 6 é 12', () => {
            expect(calculator.calculate(4, 6)).toBe(12);
        });

        test('MMC de 12 e 8 é 24', () => {
            expect(calculator.calculate(12, 8)).toBe(24);
        });

        test('MMC de 7 e 3 é 21 (coprimos)', () => {
            expect(calculator.calculate(7, 3)).toBe(21);
        });

        test('MMC de 0 e 5 é 0', () => {
            expect(calculator.calculate(0, 5)).toBe(0);
        });

        test('MMC de 5 e 0 é 0', () => {
            expect(calculator.calculate(5, 0)).toBe(0);
        });

        test('MMC de números negativos: MMC(-4, 6) é 12', () => {
            expect(calculator.calculate(-4, 6)).toBe(12);
        });

        test('MMC de dois números negativos: MMC(-4, -6) é 12', () => {
            expect(calculator.calculate(-4, -6)).toBe(12);
        });

        test('MMC de um número consigo mesmo é o próprio número', () => {
            expect(calculator.calculate(6, 6)).toBe(6);
        });

        test('MMC de 1 e qualquer número é o próprio número', () => {
            expect(calculator.calculate(1, 100)).toBe(100);
        });

        test('MMC de três valores: MMC(4, 6, 10) é 60', () => {
            expect(calculator.calculate(4, 6, 10)).toBe(60);
        });

        test('MMC de quatro valores: MMC(2, 3, 4, 5) é 60', () => {
            expect(calculator.calculate(2, 3, 4, 5)).toBe(60);
        });

        test('MMC de cinco valores: MMC(4, 6, 8, 10, 12) é 120', () => {
            expect(calculator.calculate(4, 6, 8, 10, 12)).toBe(120);
        });

        test('lança erro quando menos de dois valores são fornecidos', () => {
            expect(() => calculator.calculate(5)).toThrow("São necessários pelo menos dois valores.");
        });

        test('lança erro quando algum valor não é inteiro', () => {
            expect(() => calculator.calculate(1.5, 3)).toThrow("Os valores devem ser números inteiros.");
        });

        test('lança erro quando algum valor não é inteiro (múltiplos)', () => {
            expect(() => calculator.calculate(4, 2, 1.5)).toThrow("Os valores devem ser números inteiros.");
        });
    });
});
