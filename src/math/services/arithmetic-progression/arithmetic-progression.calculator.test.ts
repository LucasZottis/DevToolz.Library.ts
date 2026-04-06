import { ArithmeticProgressionCalculator } from './arithmetic-progression.calculator';

describe('ArithmeticProgressionCalculator', () => {
    let calculator: ArithmeticProgressionCalculator;

    beforeEach(() => {
        calculator = new ArithmeticProgressionCalculator();
    });

    describe('nthTerm', () => {
        test('PA (2, 3): 1º termo = 2', () => {
            expect(calculator.nthTerm(2, 3, 1)).toBe(2);
        });

        test('PA (2, 3): 2º termo = 5', () => {
            expect(calculator.nthTerm(2, 3, 2)).toBe(5);
        });

        test('PA (2, 3): 5º termo = 14', () => {
            expect(calculator.nthTerm(2, 3, 5)).toBe(14);
        });

        test('PA (10, -2): 4º termo = 4', () => {
            expect(calculator.nthTerm(10, -2, 4)).toBe(4);
        });

        test('PA (5, 0): 10º termo = 5 (PA constante)', () => {
            expect(calculator.nthTerm(5, 0, 10)).toBe(5);
        });
    });

    describe('sum', () => {
        test('PA (1, 1): soma dos 5 primeiros termos = 15', () => {
            expect(calculator.sum(1, 1, 5)).toBe(15);
        });

        test('PA (2, 3): soma dos 4 primeiros termos = 26', () => {
            expect(calculator.sum(2, 3, 4)).toBe(26);
        });

        test('PA (10, -2): soma dos 5 primeiros termos = 30', () => {
            expect(calculator.sum(10, -2, 5)).toBe(30);
        });

        test('PA (5, 0): soma dos 3 primeiros termos = 15 (PA constante)', () => {
            expect(calculator.sum(5, 0, 3)).toBe(15);
        });

        test('PA (1, 2): soma dos 1 primeiro termo = 1', () => {
            expect(calculator.sum(1, 2, 1)).toBe(1);
        });
    });

    describe('sequence', () => {
        test('PA (1, 1): primeiros 5 termos = [1, 2, 3, 4, 5]', () => {
            expect(calculator.sequence(1, 1, 5)).toEqual([1, 2, 3, 4, 5]);
        });

        test('PA (2, 3): primeiros 4 termos = [2, 5, 8, 11]', () => {
            expect(calculator.sequence(2, 3, 4)).toEqual([2, 5, 8, 11]);
        });

        test('PA (10, -2): primeiros 5 termos = [10, 8, 6, 4, 2]', () => {
            expect(calculator.sequence(10, -2, 5)).toEqual([10, 8, 6, 4, 2]);
        });

        test('PA (5, 0): primeiros 3 termos = [5, 5, 5] (PA constante)', () => {
            expect(calculator.sequence(5, 0, 3)).toEqual([5, 5, 5]);
        });

        test('PA (1, 2): 1 termo = [1]', () => {
            expect(calculator.sequence(1, 2, 1)).toEqual([1]);
        });
    });
});
