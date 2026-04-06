import { FirstDegreeEquationCalculator } from './first-degree-equation.calculator';

describe('FirstDegreeEquationCalculator', () => {
    let calculator: FirstDegreeEquationCalculator;

    beforeEach(() => {
        calculator = new FirstDegreeEquationCalculator();
    });

    describe('calculate', () => {
        test('2x + 4 = 0 => x = -2', () => {
            expect(calculator.calculate(2, 4)).toBe(-2);
        });

        test('3x - 9 = 0 => x = 3', () => {
            expect(calculator.calculate(3, -9)).toBe(3);
        });

        test('1x + 0 = 0 => x = 0', () => {
            expect(calculator.calculate(1, 0)).toBe(0);
        });

        test('-5x + 10 = 0 => x = 2', () => {
            expect(calculator.calculate(-5, 10)).toBe(2);
        });

        test('a = 0 deve lançar erro', () => {
            expect(() => calculator.calculate(0, 5)).toThrow("O coeficiente 'a' não pode ser zero em uma equação de 1º grau.");
        });
    });
});
