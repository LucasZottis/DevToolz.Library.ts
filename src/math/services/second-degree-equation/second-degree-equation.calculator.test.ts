import { SecondDegreeEquationCalculator } from './second-degree-equation.calculator';

describe('SecondDegreeEquationCalculator', () => {
    let calculator: SecondDegreeEquationCalculator;

    beforeEach(() => {
        calculator = new SecondDegreeEquationCalculator();
    });

    describe('calculate', () => {
        test('x² - 5x + 6 = 0 => delta=1, x1=3, x2=2', () => {
            const result = calculator.calculate(1, -5, 6);
            expect(result.delta).toBe(1);
            expect(result.x1).toBe(3);
            expect(result.x2).toBe(2);
        });

        test('x² - 4 = 0 => delta=16, x1=2, x2=-2', () => {
            const result = calculator.calculate(1, 0, -4);
            expect(result.delta).toBe(16);
            expect(result.x1).toBe(2);
            expect(result.x2).toBe(-2);
        });

        test('x² - 2x + 1 = 0 => delta=0, x1=1, x2=1', () => {
            const result = calculator.calculate(1, -2, 1);
            expect(result.delta).toBe(0);
            expect(result.x1).toBe(1);
            expect(result.x2).toBe(1);
        });

        test('x² + x + 1 = 0 => delta < 0, x1=null, x2=null', () => {
            const result = calculator.calculate(1, 1, 1);
            expect(result.delta).toBe(-3);
            expect(result.x1).toBeNull();
            expect(result.x2).toBeNull();
        });

        test('2x² + 3x - 2 = 0 => delta=25, x1=0.5, x2=-2', () => {
            const result = calculator.calculate(2, 3, -2);
            expect(result.delta).toBe(25);
            expect(result.x1).toBe(0.5);
            expect(result.x2).toBe(-2);
        });

        test('a = 0 deve lançar erro', () => {
            expect(() => calculator.calculate(0, 3, 2)).toThrow("O coeficiente 'a' não pode ser zero em uma equação de 2º grau.");
        });
    });
});
