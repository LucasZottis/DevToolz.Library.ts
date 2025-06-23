import { ConverterFactory } from '../../factory/converter-factory';

const factory = new ConverterFactory();
const converter = factory.getConverter('angle');

describe('Conversão completa entre unidades de ângulo', () => {

    // Testes de conversão para a mesma unidade
    describe('Conversões para a mesma unidade', () => {
        test('1 radiano → radiano ≈ 1.0', () => {
            expect(converter.convert(1, 'radiano', 'radiano')).toBeCloseTo(1.0, 10);
        });

        test('1 grau → grau ≈ 1.0', () => {
            expect(converter.convert(1, 'grau', 'grau')).toBeCloseTo(1.0, 10);
        });

        test('1 grado → grado ≈ 1.0', () => {
            expect(converter.convert(1, 'grado', 'grado')).toBeCloseTo(1.0, 10);
        });
    });

    // Conversões para a unidade base (radiano)
    describe('Conversões para unidade base (radiano)', () => {
        test('180 graus → radianos ≈ π', () => {
            expect(converter.convert(180, 'grau', 'radiano')).toBeCloseTo(Math.PI, 10);
        });

        test('200 grados → radianos ≈ π', () => {
            expect(converter.convert(200, 'grado', 'radiano')).toBeCloseTo(Math.PI, 10);
        });

        test('90 graus → radianos ≈ π/2', () => {
            expect(converter.convert(90, 'grau', 'radiano')).toBeCloseTo(Math.PI / 2, 10);
        });

        test('100 grados → radianos ≈ π/2', () => {
            expect(converter.convert(100, 'grado', 'radiano')).toBeCloseTo(Math.PI / 2, 10);
        });
    });

    // Conversões da unidade base (radiano) para outras
    describe('Conversões da unidade base (radiano)', () => {
        test('π radianos → graus ≈ 180', () => {
            expect(converter.convert(Math.PI, 'radiano', 'grau')).toBeCloseTo(180, 10);
        });

        test('π radianos → grados ≈ 200', () => {
            expect(converter.convert(Math.PI, 'radiano', 'grado')).toBeCloseTo(200, 10);
        });

        test('π/2 radianos → graus ≈ 90', () => {
            expect(converter.convert(Math.PI / 2, 'radiano', 'grau')).toBeCloseTo(90, 10);
        });

        test('π/2 radianos → grados ≈ 100', () => {
            expect(converter.convert(Math.PI / 2, 'radiano', 'grado')).toBeCloseTo(100, 10);
        });
    });

    // Testes com valores decimais e extremos
    describe('Conversões com valores fracionários e extremos', () => {
        test('0 graus → radianos = 0', () => {
            expect(converter.convert(0, 'grau', 'radiano')).toBe(0);
        });

        test('0 radianos → graus = 0', () => {
            expect(converter.convert(0, 'radiano', 'grau')).toBe(0);
        });

        test('360 graus → radianos ≈ 2π', () => {
            expect(converter.convert(360, 'grau', 'radiano')).toBeCloseTo(2 * Math.PI, 10);
        });

        test('400 grados → radianos ≈ 2π', () => {
            expect(converter.convert(400, 'grado', 'radiano')).toBeCloseTo(2 * Math.PI, 10);
        });

        test('0.5 radiano → grau ≈ 28.6479', () => {
            expect(converter.convert(0.5, 'radiano', 'grau')).toBeCloseTo(28.6478898, 6);
        });

        test('0.5 radiano → grado ≈ 31.830988618379067', () => {
            expect(converter.convert(0.5, 'radiano', 'grado')).toBeCloseTo(31.830988618379067, 6);
        });
    });

    // Conversões de ida e volta
    describe('Conversões de ida e volta (round-trip)', () => {
        test('grau → radiano → grau', () => {
            const original = 45;
            const rad = converter.convert(original, 'grau', 'radiano');
            const grau = converter.convert(rad, 'radiano', 'grau');
            expect(grau).toBeCloseTo(original, 10);
        });

        test('grado → radiano → grado', () => {
            const original = 50;
            const rad = converter.convert(original, 'grado', 'radiano');
            const gon = converter.convert(rad, 'radiano', 'grado');
            expect(gon).toBeCloseTo(original, 10);
        });

        test('radiano → grau → radiano', () => {
            const original = 1.2;
            const grau = converter.convert(original, 'radiano', 'grau');
            const rad = converter.convert(grau, 'grau', 'radiano');
            expect(rad).toBeCloseTo(original, 10);
        });

        test('radiano → grado → radiano', () => {
            const original = 0.75;
            const grado = converter.convert(original, 'radiano', 'grado');
            const rad = converter.convert(grado, 'grado', 'radiano');
            expect(rad).toBeCloseTo(original, 10);
        });
    });

    // Equivalências conhecidas
    describe('Equivalências de referência', () => {
        test('1 grau ≈ 0.0174533 radianos', () => {
            expect(converter.convert(1, 'grau', 'radiano')).toBeCloseTo(0.017453292519943295, 10);
        });

        test('1 grado ≈ 0.015708 radianos', () => {
            expect(converter.convert(1, 'grado', 'radiano')).toBeCloseTo(0.015707963267948967, 10);
        });

        test('1 radiano ≈ 57.2958 graus', () => {
            expect(converter.convert(1, 'radiano', 'grau')).toBeCloseTo(57.2957795, 6);
        });

        test('1 radiano ≈ 63.662 grados', () => {
            expect(converter.convert(1, 'radiano', 'grado')).toBeCloseTo(63.6619772, 6);
        });
    });
});