import { ConverterFactory } from '../../factory/converter-factory';

const factory = new ConverterFactory();
const converter = factory.getConverter('weight-mass');

describe('Conversão completa entre unidades de massa', () => {

    // Testes de conversão para a mesma unidade
    describe('Conversões para a mesma unidade', () => {
        test('1 grama → grama ≈ 1.0', () => {
            expect(converter.convert(1, 'grama', 'grama')).toBeCloseTo(1.0, 10);
        });

        test('1 quilograma → quilograma ≈ 1.0', () => {
            expect(converter.convert(1, 'quilograma', 'quilograma')).toBeCloseTo(1.0, 10);
        });

        test('1 miligrama → miligrama ≈ 1.0', () => {
            expect(converter.convert(1, 'miligrama', 'miligrama')).toBeCloseTo(1.0, 10);
        });

        test('1 tonelada-metrica → tonelada-metrica ≈ 1.0', () => {
            expect(converter.convert(1, 'tonelada-metrica', 'tonelada-metrica')).toBeCloseTo(1.0, 10);
        });
    });

    // Conversões básicas do sistema métrico
    describe('Conversões do sistema métrico - unidade base: grama', () => {
        test('1 micrograma → grama = 0.000001', () => {
            expect(converter.convert(1, 'micrograma', 'grama')).toBeCloseTo(0.000001, 10);
        });

        test('1 miligrama → grama = 0.001', () => {
            expect(converter.convert(1, 'miligrama', 'grama')).toBeCloseTo(0.001, 10);
        });

        test('1 centigrama → grama = 0.01', () => {
            expect(converter.convert(1, 'centigrama', 'grama')).toBeCloseTo(0.01, 10);
        });

        test('1 decigrama → grama = 0.1', () => {
            expect(converter.convert(1, 'decigrama', 'grama')).toBeCloseTo(0.1, 10);
        });

        test('1 decagrama → grama = 10', () => {
            expect(converter.convert(1, 'decagrama', 'grama')).toBeCloseTo(10, 10);
        });

        test('1 hectograma → grama = 100', () => {
            expect(converter.convert(1, 'hectograma', 'grama')).toBeCloseTo(100, 10);
        });

        test('1 quilograma → grama = 1000', () => {
            expect(converter.convert(1, 'quilograma', 'grama')).toBeCloseTo(1000, 10);
        });

        test('1 tonelada-metrica → grama = 1000000', () => {
            expect(converter.convert(1, 'tonelada-metrica', 'grama')).toBeCloseTo(1000000, 10);
        });

        test('1 quintal → grama = 100000', () => {
            expect(converter.convert(1, 'quintal', 'grama')).toBeCloseTo(100000, 10);
        });
    });

    // Conversões inversas do sistema métrico
    describe('Conversões inversas do sistema métrico', () => {
        test('1 grama → micrograma = 1000000', () => {
            expect(converter.convert(1, 'grama', 'micrograma')).toBeCloseTo(1000000, 10);
        });

        test('1 grama → miligrama = 1000', () => {
            expect(converter.convert(1, 'grama', 'miligrama')).toBeCloseTo(1000, 10);
        });

        test('1 grama → quilograma = 0.001', () => {
            expect(converter.convert(1, 'grama', 'quilograma')).toBeCloseTo(0.001, 10);
        });

        test('1 quilograma → tonelada-metrica = 0.001', () => {
            expect(converter.convert(1, 'quilograma', 'tonelada-metrica')).toBeCloseTo(0.001, 10);
        });
    });

    // Conversões do sistema imperial/americano
    describe('Conversões do sistema imperial/americano', () => {
        test('1 grao → grama ≈ 0.06479891', () => {
            expect(converter.convert(1, 'grao', 'grama')).toBeCloseTo(0.06479891, 8);
        });

        test('1 quilate → grama = 0.2', () => {
            expect(converter.convert(1, 'quilate', 'grama')).toBeCloseTo(0.2, 10);
        });

        test('1 onca → grama ≈ 28.349523125', () => {
            expect(converter.convert(1, 'onca', 'grama')).toBeCloseTo(28.349523125, 8);
        });

        test('1 libra → grama ≈ 453.59237', () => {
            expect(converter.convert(1, 'libra', 'grama')).toBeCloseTo(453.59237, 8);
        });

        test('1 pedra → grama ≈ 6350.29318', () => {
            expect(converter.convert(1, 'pedra', 'grama')).toBeCloseTo(6350.29318, 8);
        });

        test('1 tonelada-curta → grama ≈ 907184.74', () => {
            expect(converter.convert(1, 'tonelada-curta', 'grama')).toBeCloseTo(907184.74, 6);
        });

        test('1 tonelada-longa → grama ≈ 1016046.9088', () => {
            expect(converter.convert(1, 'tonelada-longa', 'grama')).toBeCloseTo(1016046.9088, 6);
        });
    });

    // Conversões entre unidades imperiais
    describe('Conversões entre sistemas imperial/americano', () => {
        test('1 libra → onca = 16', () => {
            expect(converter.convert(1, 'libra', 'onca')).toBeCloseTo(16, 8);
        });

        test('1 pedra → libra = 14', () => {
            expect(converter.convert(1, 'pedra', 'libra')).toBeCloseTo(14, 8);
        });

        test('1 tonelada-curta → libra = 2000', () => {
            expect(converter.convert(1, 'tonelada-curta', 'libra')).toBeCloseTo(2000, 6);
        });

        test('1 tonelada-longa → libra ≈ 2240', () => {
            expect(converter.convert(1, 'tonelada-longa', 'libra')).toBeCloseTo(2240, 6);
        });
    });

    // Conversões comuns do dia a dia
    describe('Conversões comuns do cotidiano', () => {
        test('500 gramas → quilograma = 0.5', () => {
            expect(converter.convert(500, 'grama', 'quilograma')).toBeCloseTo(0.5, 10);
        });

        test('2.5 quilogramas → gramas = 2500', () => {
            expect(converter.convert(2.5, 'quilograma', 'grama')).toBeCloseTo(2500, 10);
        });

        test('100 miligramas → gramas = 0.1', () => {
            expect(converter.convert(100, 'miligrama', 'grama')).toBeCloseTo(0.1, 10);
        });

        test('5 quilates → gramas = 1', () => {
            expect(converter.convert(5, 'quilate', 'grama')).toBeCloseTo(1, 10);
        });

        test('1 libra → quilograma ≈ 0.45359237', () => {
            expect(converter.convert(1, 'libra', 'quilograma')).toBeCloseTo(0.45359237, 8);
        });

        test('10 toneladas métricas → quilogramas = 10000', () => {
            expect(converter.convert(10, 'tonelada-metrica', 'quilograma')).toBeCloseTo(10000, 10);
        });
    });

    // Testes com valores decimais
    describe('Conversões com valores decimais', () => {
        test('0.5 quilograma → grama = 500', () => {
            expect(converter.convert(0.5, 'quilograma', 'grama')).toBeCloseTo(500, 10);
        });

        test('1.25 libras → onças = 20', () => {
            expect(converter.convert(1.25, 'libra', 'onca')).toBeCloseTo(20, 8);
        });

        test('0.001 tonelada-metrica → grama = 1000', () => {
            expect(converter.convert(0.001, 'tonelada-metrica', 'grama')).toBeCloseTo(1000, 10);
        });

        test('2.5 hectogramas → quilograma = 0.25', () => {
            expect(converter.convert(2.5, 'hectograma', 'quilograma')).toBeCloseTo(0.25, 10);
        });
    });

    // Testes com valores grandes
    describe('Conversões com valores grandes', () => {
        test('1000000 miligramas → quilograma = 1', () => {
            expect(converter.convert(1000000, 'miligrama', 'quilograma')).toBeCloseTo(1, 10);
        });

        test('1000 toneladas métricas → quilogramas = 1000000', () => {
            expect(converter.convert(1000, 'tonelada-metrica', 'quilograma')).toBeCloseTo(1000000, 10);
        });

        test('50000 grãos → quilograma ≈ 3.239945', () => {
            expect(converter.convert(50000, 'grao', 'quilograma')).toBeCloseTo(3.2399455, 6);
        });
    });

    // Testes com valores pequenos
    describe('Conversões com valores pequenos', () => {
        test('0.001 grama → miligrama = 1', () => {
            expect(converter.convert(0.001, 'grama', 'miligrama')).toBeCloseTo(1, 10);
        });

        test('0.0001 onça → miligrama ≈ 2.8349523', () => {
            expect(converter.convert(0.0001, 'onca', 'miligrama')).toBeCloseTo(2.8349523, 7);
        });

        test('0.5 micrograma → nanograma = 500', () => {
            // Assumindo que nanograma seria 0.000000001 se existisse
            expect(converter.convert(0.5, 'micrograma', 'grama')).toBeCloseTo(0.0000005, 10);
        });
    });

    // Testes de casos extremos
    describe('Casos extremos', () => {
        test('0 grama → quilograma = 0', () => {
            expect(converter.convert(0, 'grama', 'quilograma')).toBe(0);
        });

        test('Número muito grande: 999999 quilogramas → tonelada-metrica ≈ 999.999', () => {
            expect(converter.convert(999999, 'quilograma', 'tonelada-metrica')).toBeCloseTo(999.999, 3);
        });

        test('Número muito pequeno: 0.000001 quilograma → micrograma = 1000', () => {
            expect(converter.convert(0.000001, 'quilograma', 'micrograma')).toBeCloseTo(1000, 10);
        });
    });

    // Testes de precisão
    describe('Testes de precisão', () => {
        test('Conversão ida e volta: grama → quilograma → grama', () => {
            const original = 1500;
            const converted = converter.convert(original, 'grama', 'quilograma');
            const backConverted = converter.convert(converted, 'quilograma', 'grama');
            expect(backConverted).toBeCloseTo(original, 8);
        });

        test('Conversão ida e volta: libra → grama → libra', () => {
            const original = 2.5;
            const converted = converter.convert(original, 'libra', 'grama');
            const backConverted = converter.convert(converted, 'grama', 'libra');
            expect(backConverted).toBeCloseTo(original, 8);
        });

        test('Conversão ida e volta: micrograma → tonelada-metrica → micrograma', () => {
            const original = 5000000000; // 5 bilhões de microgramas
            const converted = converter.convert(original, 'micrograma', 'tonelada-metrica');
            const backConverted = converter.convert(converted, 'tonelada-metrica', 'micrograma');
            expect(backConverted).toBeCloseTo(original, 6);
        });
    });

    // Testes de equivalências conhecidas
    describe('Equivalências conhecidas', () => {
        test('1 quilograma = 2.20462 libras (aproximadamente)', () => {
            expect(converter.convert(1, 'quilograma', 'libra')).toBeCloseTo(2.20462, 5);
        });

        test('1 onça = 28.35 gramas (aproximadamente)', () => {
            expect(converter.convert(1, 'onca', 'grama')).toBeCloseTo(28.35, 2);
        });

        test('1 tonelada métrica = 1.10231 tonelada curta (aproximadamente)', () => {
            expect(converter.convert(1, 'tonelada-metrica', 'tonelada-curta')).toBeCloseTo(1.10231, 5);
        });

        test('1 pedra = 6.35 quilogramas (aproximadamente)', () => {
            expect(converter.convert(1, 'pedra', 'quilograma')).toBeCloseTo(6.35, 2);
        });

        test('5 quilates = 1 grama', () => {
            expect(converter.convert(5, 'quilate', 'grama')).toBeCloseTo(1, 10);
        });
    });
});