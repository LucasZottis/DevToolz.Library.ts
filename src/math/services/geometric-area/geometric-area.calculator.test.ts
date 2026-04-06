import { GeometricAreaCalculator } from './geometric-area.calculator';

describe('GeometricAreaCalculator', () => {
    let calculator: GeometricAreaCalculator;

    beforeEach(() => {
        calculator = new GeometricAreaCalculator();
    });

    describe('square', () => {
        test('área do quadrado com lado 5 é 25', () => {
            expect(calculator.square(5)).toBe(25);
        });

        test('área do quadrado com lado 0 é 0', () => {
            expect(calculator.square(0)).toBe(0);
        });

        test('área do quadrado com lado 1 é 1', () => {
            expect(calculator.square(1)).toBe(1);
        });

        test('área do quadrado com lado 10 é 100', () => {
            expect(calculator.square(10)).toBe(100);
        });

        test('lança erro quando o lado é negativo', () => {
            expect(() => calculator.square(-5)).toThrow('O lado não pode ser negativo.');
        });
    });

    describe('rectangle', () => {
        test('área do retângulo com base 4 e altura 6 é 24', () => {
            expect(calculator.rectangle(4, 6)).toBe(24);
        });

        test('área do retângulo com base 0 é 0', () => {
            expect(calculator.rectangle(0, 5)).toBe(0);
        });

        test('área do retângulo com altura 0 é 0', () => {
            expect(calculator.rectangle(5, 0)).toBe(0);
        });

        test('lança erro quando a base é negativa', () => {
            expect(() => calculator.rectangle(-4, 6)).toThrow('A base não pode ser negativa.');
        });

        test('lança erro quando a altura é negativa', () => {
            expect(() => calculator.rectangle(4, -6)).toThrow('A altura não pode ser negativa.');
        });
    });

    describe('triangle', () => {
        test('área do triângulo com base 6 e altura 4 é 12', () => {
            expect(calculator.triangle(6, 4)).toBe(12);
        });

        test('área do triângulo com base 10 e altura 5 é 25', () => {
            expect(calculator.triangle(10, 5)).toBe(25);
        });

        test('área do triângulo com base 0 é 0', () => {
            expect(calculator.triangle(0, 5)).toBe(0);
        });

        test('lança erro quando a base é negativa', () => {
            expect(() => calculator.triangle(-6, 4)).toThrow('A base não pode ser negativa.');
        });

        test('lança erro quando a altura é negativa', () => {
            expect(() => calculator.triangle(6, -4)).toThrow('A altura não pode ser negativa.');
        });
    });

    describe('circle', () => {
        test('área do círculo com raio 1 é π', () => {
            expect(calculator.circle(1)).toBeCloseTo(Math.PI);
        });

        test('área do círculo com raio 0 é 0', () => {
            expect(calculator.circle(0)).toBe(0);
        });

        test('área do círculo com raio 5 é aproximadamente 78.54', () => {
            expect(calculator.circle(5)).toBeCloseTo(78.5398, 4);
        });

        test('lança erro quando o raio é negativo', () => {
            expect(() => calculator.circle(-3)).toThrow('O raio não pode ser negativo.');
        });
    });

    describe('trapezoid', () => {
        test('área do trapézio com bases 8 e 4 e altura 5 é 30', () => {
            expect(calculator.trapezoid(8, 4, 5)).toBe(30);
        });

        test('área do trapézio com bases iguais é igual ao retângulo', () => {
            expect(calculator.trapezoid(6, 6, 4)).toBe(24);
        });

        test('área do trapézio com base menor 0 é igual ao triângulo', () => {
            expect(calculator.trapezoid(6, 0, 4)).toBe(12);
        });

        test('lança erro quando a base maior é negativa', () => {
            expect(() => calculator.trapezoid(-8, 4, 5)).toThrow('A base maior não pode ser negativa.');
        });

        test('lança erro quando a base menor é negativa', () => {
            expect(() => calculator.trapezoid(8, -4, 5)).toThrow('A base menor não pode ser negativa.');
        });

        test('lança erro quando a altura é negativa', () => {
            expect(() => calculator.trapezoid(8, 4, -5)).toThrow('A altura não pode ser negativa.');
        });
    });

    describe('rhombus', () => {
        test('área do losango com diagonais 10 e 6 é 30', () => {
            expect(calculator.rhombus(10, 6)).toBe(30);
        });

        test('área do losango com diagonal 0 é 0', () => {
            expect(calculator.rhombus(0, 6)).toBe(0);
        });

        test('lança erro quando a diagonal maior é negativa', () => {
            expect(() => calculator.rhombus(-10, 6)).toThrow('A diagonal maior não pode ser negativa.');
        });

        test('lança erro quando a diagonal menor é negativa', () => {
            expect(() => calculator.rhombus(10, -6)).toThrow('A diagonal menor não pode ser negativa.');
        });
    });

    describe('parallelogram', () => {
        test('área do paralelogramo com base 7 e altura 3 é 21', () => {
            expect(calculator.parallelogram(7, 3)).toBe(21);
        });

        test('área do paralelogramo com base 0 é 0', () => {
            expect(calculator.parallelogram(0, 5)).toBe(0);
        });

        test('lança erro quando a base é negativa', () => {
            expect(() => calculator.parallelogram(-7, 3)).toThrow('A base não pode ser negativa.');
        });

        test('lança erro quando a altura é negativa', () => {
            expect(() => calculator.parallelogram(7, -3)).toThrow('A altura não pode ser negativa.');
        });
    });
});
