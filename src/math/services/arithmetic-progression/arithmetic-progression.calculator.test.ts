import { ArithmeticProgressionCalculator } from './arithmetic-progression.calculator';

describe('ArithmeticProgressionCalculator', () => {
    let calculator: ArithmeticProgressionCalculator;

    beforeEach(() => {
        calculator = new ArithmeticProgressionCalculator();
    });

    describe('calculate', () => {
        test('PA (2, 3, 1): nthTerm=2, sum=2, sequence=[2]', () => {
            const result = calculator.calculate(2, 3, 1);
            expect(result.nthTerm).toBe(2);
            expect(result.sum).toBe(2);
            expect(result.sequence).toEqual([2]);
        });

        test('PA (2, 3, 2): nthTerm=5, sum=7, sequence=[2, 5]', () => {
            const result = calculator.calculate(2, 3, 2);
            expect(result.nthTerm).toBe(5);
            expect(result.sum).toBe(7);
            expect(result.sequence).toEqual([2, 5]);
        });

        test('PA (2, 3, 5): nthTerm=14, sum=40, sequence=[2, 5, 8, 11, 14]', () => {
            const result = calculator.calculate(2, 3, 5);
            expect(result.nthTerm).toBe(14);
            expect(result.sum).toBe(40);
            expect(result.sequence).toEqual([2, 5, 8, 11, 14]);
        });

        test('PA (1, 1, 5): nthTerm=5, sum=15, sequence=[1, 2, 3, 4, 5]', () => {
            const result = calculator.calculate(1, 1, 5);
            expect(result.nthTerm).toBe(5);
            expect(result.sum).toBe(15);
            expect(result.sequence).toEqual([1, 2, 3, 4, 5]);
        });

        test('PA (10, -2, 5): nthTerm=2, sum=30, sequence=[10, 8, 6, 4, 2]', () => {
            const result = calculator.calculate(10, -2, 5);
            expect(result.nthTerm).toBe(2);
            expect(result.sum).toBe(30);
            expect(result.sequence).toEqual([10, 8, 6, 4, 2]);
        });

        test('PA (5, 0, 3): PA constante nthTerm=5, sum=15, sequence=[5, 5, 5]', () => {
            const result = calculator.calculate(5, 0, 3);
            expect(result.nthTerm).toBe(5);
            expect(result.sum).toBe(15);
            expect(result.sequence).toEqual([5, 5, 5]);
        });
    });
});
