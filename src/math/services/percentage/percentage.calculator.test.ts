import { PercentageCalculator } from "./percentage.calculator";

describe('PercentageCalculator', () => {
    let calculator: PercentageCalculator;

    beforeEach(() => {
        calculator = new PercentageCalculator();
    });

    describe('numberToPercentage', () => {
        test('50 de 200 é 25%', () => {
            expect(calculator.numberToPercentage(50, 200)).toBe(25);
        });

        test('1 de 4 é 25%', () => {
            expect(calculator.numberToPercentage(1, 4)).toBe(25);
        });

        test('100 de 100 é 100%', () => {
            expect(calculator.numberToPercentage(100, 100)).toBe(100);
        });

        test('0 de 100 é 0%', () => {
            expect(calculator.numberToPercentage(0, 100)).toBe(0);
        });

        test('200 de 100 é 200%', () => {
            expect(calculator.numberToPercentage(200, 100)).toBe(200);
        });

        test('1 de 3 é aproximadamente 33.33%', () => {
            expect(calculator.numberToPercentage(1, 3)).toBeCloseTo(33.333, 2);
        });

        test('lança erro quando o total é zero', () => {
            expect(() => calculator.numberToPercentage(50, 0)).toThrow("O total não pode ser zero.");
        });
    });

    describe('percentageToValue', () => {
        test('25% de 200 é 50', () => {
            expect(calculator.percentageToValue(25, 200)).toBe(50);
        });

        test('50% de 80 é 40', () => {
            expect(calculator.percentageToValue(50, 80)).toBe(40);
        });

        test('100% de 150 é 150', () => {
            expect(calculator.percentageToValue(100, 150)).toBe(150);
        });

        test('0% de 100 é 0', () => {
            expect(calculator.percentageToValue(0, 100)).toBe(0);
        });

        test('10% de 0 é 0', () => {
            expect(calculator.percentageToValue(10, 0)).toBe(0);
        });

        test('200% de 50 é 100', () => {
            expect(calculator.percentageToValue(200, 50)).toBe(100);
        });

        test('33.333% de 300 é aproximadamente 100', () => {
            expect(calculator.percentageToValue(33.333, 300)).toBeCloseTo(100, 1);
        });
    });
});
