import { FractionCalculator } from "./fraction.calculator";

describe('FractionCalculator', () => {
    let calculator: FractionCalculator;

    beforeEach(() => {
        calculator = new FractionCalculator();
    });

    describe('decimalToFraction', () => {
        test('0.5 => 1/2', () => {
            const result = calculator.decimalToFraction(0.5);
            expect(result.numerator).toBe(1);
            expect(result.denominator).toBe(2);
        });

        test('0.25 => 1/4', () => {
            const result = calculator.decimalToFraction(0.25);
            expect(result.numerator).toBe(1);
            expect(result.denominator).toBe(4);
        });

        test('0.75 => 3/4', () => {
            const result = calculator.decimalToFraction(0.75);
            expect(result.numerator).toBe(3);
            expect(result.denominator).toBe(4);
        });

        test('0.1 => 1/10', () => {
            const result = calculator.decimalToFraction(0.1);
            expect(result.numerator).toBe(1);
            expect(result.denominator).toBe(10);
        });

        test('1.5 => 3/2', () => {
            const result = calculator.decimalToFraction(1.5);
            expect(result.numerator).toBe(3);
            expect(result.denominator).toBe(2);
        });

        test('2 => 2/1', () => {
            const result = calculator.decimalToFraction(2);
            expect(result.numerator).toBe(2);
            expect(result.denominator).toBe(1);
        });

        test('0 => 0/1', () => {
            const result = calculator.decimalToFraction(0);
            expect(result.numerator).toBe(0);
            expect(result.denominator).toBe(1);
        });

        test('-0.5 => -1/2', () => {
            const result = calculator.decimalToFraction(-0.5);
            expect(result.numerator).toBe(-1);
            expect(result.denominator).toBe(2);
        });

        test('-0.25 => -1/4', () => {
            const result = calculator.decimalToFraction(-0.25);
            expect(result.numerator).toBe(-1);
            expect(result.denominator).toBe(4);
        });

        test('lança erro para Infinity', () => {
            expect(() => calculator.decimalToFraction(Infinity)).toThrow("O valor deve ser um número finito.");
        });

        test('lança erro para -Infinity', () => {
            expect(() => calculator.decimalToFraction(-Infinity)).toThrow("O valor deve ser um número finito.");
        });
    });

    describe('fractionToDecimal', () => {
        test('1/2 => 0.5', () => {
            expect(calculator.fractionToDecimal(1, 2)).toBe(0.5);
        });

        test('1/4 => 0.25', () => {
            expect(calculator.fractionToDecimal(1, 4)).toBe(0.25);
        });

        test('3/4 => 0.75', () => {
            expect(calculator.fractionToDecimal(3, 4)).toBe(0.75);
        });

        test('3/2 => 1.5', () => {
            expect(calculator.fractionToDecimal(3, 2)).toBe(1.5);
        });

        test('2/1 => 2', () => {
            expect(calculator.fractionToDecimal(2, 1)).toBe(2);
        });

        test('-1/2 => -0.5', () => {
            expect(calculator.fractionToDecimal(-1, 2)).toBe(-0.5);
        });

        test('lança erro quando denominador é zero', () => {
            expect(() => calculator.fractionToDecimal(1, 0)).toThrow("O denominador não pode ser zero.");
        });
    });
});
