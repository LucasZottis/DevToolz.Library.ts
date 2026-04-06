import { ThermalSensationCalculator } from './thermal-sensation.calculator';

describe('ThermalSensationCalculator', () => {
    let calculator: ThermalSensationCalculator;

    beforeEach(() => {
        calculator = new ThermalSensationCalculator();
    });

    describe('calculate', () => {
        test('retorna sensação térmica com vento (T ≤ 10°C e V > 4.8 km/h)', () => {
            const result = calculator.calculate(5, 20);
            expect(result).toBeCloseTo(1.07, 1);
        });

        test('retorna a temperatura real quando T > 10°C', () => {
            const result = calculator.calculate(25, 30);
            expect(result).toBe(25);
        });

        test('retorna a temperatura real quando velocidade do vento ≤ 4.8 km/h', () => {
            const result = calculator.calculate(5, 3);
            expect(result).toBe(5);
        });

        test('retorna a temperatura real quando T = 10°C e V > 4.8 km/h', () => {
            const result = calculator.calculate(10, 10);
            expect(result).toBeCloseTo(8.62, 1);
        });

        test('retorna a temperatura real quando vento = 0', () => {
            const result = calculator.calculate(5, 0);
            expect(result).toBe(5);
        });

        test('sensação térmica com temperatura negativa', () => {
            const result = calculator.calculate(-10, 30);
            expect(result).toBeCloseTo(-19.52, 1);
        });

        test('lança erro quando velocidade do vento é negativa', () => {
            expect(() => calculator.calculate(5, -1)).toThrow(
                "A velocidade do vento não pode ser negativa."
            );
        });
    });
});
