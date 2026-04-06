import { ThermalSensationCalculator } from './thermal-sensation.calculator';

describe('ThermalSensationCalculator', () => {
    let calculator: ThermalSensationCalculator;

    beforeEach(() => {
        calculator = new ThermalSensationCalculator();
    });

    describe('heatIndex', () => {
        test('calcula índice de calor com alta umidade', () => {
            const result = calculator.heatIndex(35, 80);
            expect(result).toBeCloseTo(56.55, 1);
        });

        test('calcula índice de calor com umidade moderada', () => {
            const result = calculator.heatIndex(30, 90);
            expect(result).toBeCloseTo(40.72, 1);
        });

        test('calcula índice de calor no limite de 27°C', () => {
            const result = calculator.heatIndex(27, 60);
            expect(result).toBeCloseTo(28.08, 1);
        });

        test('lança erro quando umidade é menor que 0', () => {
            expect(() => calculator.heatIndex(35, -1)).toThrow(
                "A umidade relativa deve estar entre 0 e 100."
            );
        });

        test('lança erro quando umidade é maior que 100', () => {
            expect(() => calculator.heatIndex(35, 101)).toThrow(
                "A umidade relativa deve estar entre 0 e 100."
            );
        });
    });

    describe('thermalSensation', () => {
        describe('Wind Chill (T ≤ 10°C e V > 4.8 km/h)', () => {
            test('aplica wind chill com temperatura positiva', () => {
                const result = calculator.thermalSensation(5, 20, 70);
                expect(result).toBeCloseTo(1.07, 1);
            });

            test('aplica wind chill com temperatura negativa', () => {
                const result = calculator.thermalSensation(-10, 30, 70);
                expect(result).toBeCloseTo(-19.52, 1);
            });

            test('retorna temperatura real quando vento ≤ 4.8 km/h', () => {
                const result = calculator.thermalSensation(5, 3, 70);
                expect(result).toBe(5);
            });

            test('retorna temperatura real quando vento = 0', () => {
                const result = calculator.thermalSensation(5, 0, 70);
                expect(result).toBe(5);
            });
        });

        describe('Temperatura amena (10°C < T < 27°C)', () => {
            test('retorna temperatura real', () => {
                const result = calculator.thermalSensation(20, 15, 60);
                expect(result).toBe(20);
            });

            test('retorna temperatura real independente do vento', () => {
                const result = calculator.thermalSensation(15, 50, 80);
                expect(result).toBe(15);
            });
        });

        describe('Heat Index (T ≥ 27°C)', () => {
            test('aplica heat index com alta umidade', () => {
                const result = calculator.thermalSensation(35, 5, 80);
                expect(result).toBeCloseTo(56.55, 1);
            });

            test('aplica heat index no limite de 27°C', () => {
                const result = calculator.thermalSensation(27, 5, 60);
                expect(result).toBeCloseTo(28.08, 1);
            });
        });

        describe('Validações', () => {
            test('lança erro quando velocidade do vento é negativa', () => {
                expect(() => calculator.thermalSensation(5, -1, 70)).toThrow(
                    "A velocidade do vento não pode ser negativa."
                );
            });

            test('lança erro quando umidade é menor que 0', () => {
                expect(() => calculator.thermalSensation(35, 5, -1)).toThrow(
                    "A umidade relativa deve estar entre 0 e 100."
                );
            });

            test('lança erro quando umidade é maior que 100', () => {
                expect(() => calculator.thermalSensation(35, 5, 101)).toThrow(
                    "A umidade relativa deve estar entre 0 e 100."
                );
            });
        });
    });
});
