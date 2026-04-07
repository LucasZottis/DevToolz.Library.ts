import { PrimeCalculator } from './prime.calculator';

describe('PrimeCalculator', () => {
    let calculator: PrimeCalculator;

    beforeEach(() => {
        calculator = new PrimeCalculator();
    });

    describe('isPrime', () => {
        test('0 não é primo', () => {
            expect(calculator.isPrime(0)).toBe(false);
        });

        test('1 não é primo', () => {
            expect(calculator.isPrime(1)).toBe(false);
        });

        test('2 é primo', () => {
            expect(calculator.isPrime(2)).toBe(true);
        });

        test('3 é primo', () => {
            expect(calculator.isPrime(3)).toBe(true);
        });

        test('4 não é primo', () => {
            expect(calculator.isPrime(4)).toBe(false);
        });

        test('7 é primo', () => {
            expect(calculator.isPrime(7)).toBe(true);
        });

        test('9 não é primo', () => {
            expect(calculator.isPrime(9)).toBe(false);
        });

        test('97 é primo', () => {
            expect(calculator.isPrime(97)).toBe(true);
        });

        test('100 não é primo', () => {
            expect(calculator.isPrime(100)).toBe(false);
        });

        test('número negativo não é primo', () => {
            expect(calculator.isPrime(-7)).toBe(false);
        });
    });

    describe('listPrimesInRange', () => {
        test('primos de 1 a 10: [2, 3, 5, 7]', () => {
            expect(calculator.listPrimesInRange(1, 10)).toEqual([2, 3, 5, 7]);
        });

        test('primos de 10 a 20: [11, 13, 17, 19]', () => {
            expect(calculator.listPrimesInRange(10, 20)).toEqual([11, 13, 17, 19]);
        });

        test('primos de 1 a 2: [2]', () => {
            expect(calculator.listPrimesInRange(1, 2)).toEqual([2]);
        });

        test('primos de 0 a 1: []', () => {
            expect(calculator.listPrimesInRange(0, 1)).toEqual([]);
        });

        test('primos de 14 a 16: []', () => {
            expect(calculator.listPrimesInRange(14, 16)).toEqual([]);
        });

        test('lança erro quando min > max', () => {
            expect(() => calculator.listPrimesInRange(10, 5)).toThrow(
                'O valor mínimo não pode ser maior que o valor máximo.'
            );
        });
    });
});
