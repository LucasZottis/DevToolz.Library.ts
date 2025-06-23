import { ConverterFactory } from '../../factory/converter-factory';

const factory = new ConverterFactory();
const converter = factory.getConverter('power');

describe('Conversão completa entre unidades de potência', () => {

    // Testes de conversão para a mesma unidade
    describe('Conversões para a mesma unidade', () => {
        test('1 watt → watt ≈ 1.0', () => {
            expect(converter.convert(1, 'watt', 'watt')).toBeCloseTo(1.0, 10);
        });

        test('1 quilowatt → quilowatt ≈ 1.0', () => {
            expect(converter.convert(1, 'quilowatt', 'quilowatt')).toBeCloseTo(1.0, 10);
        });

        test('1 cavalo-vapor-eua → cavalo-vapor-eua ≈ 1.0', () => {
            expect(converter.convert(1, 'cavalo-vapor-eua', 'cavalo-vapor-eua')).toBeCloseTo(1.0, 10);
        });

        test('1 libra-pe-por-minuto → libra-pe-por-minuto ≈ 1.0', () => {
            expect(converter.convert(1, 'libra-pe-por-minuto', 'libra-pe-por-minuto')).toBeCloseTo(1.0, 10);
        });

        test('1 btu-por-minuto → btu-por-minuto ≈ 1.0', () => {
            expect(converter.convert(1, 'btu-por-minuto', 'btu-por-minuto')).toBeCloseTo(1.0, 10);
        });
    });

    // Conversões básicas - unidade base: watt
    describe('Conversões para unidade base (watt)', () => {
        test('1 quilowatt → watt = 1000', () => {
            expect(converter.convert(1, 'quilowatt', 'watt')).toBeCloseTo(1000, 10);
        });

        test('1 cavalo-vapor-eua → watt ≈ 745.69987158227022', () => {
            expect(converter.convert(1, 'cavalo-vapor-eua', 'watt')).toBeCloseTo(745.69987158227022, 8);
        });

        test('1 libra-pe-por-minuto → watt ≈ 0.0225969658', () => {
            expect(converter.convert(1, 'libra-pe-por-minuto', 'watt')).toBeCloseTo(0.0225969658, 10);
        });

        test('1 btu-por-minuto → watt ≈ 17.5842666667', () => {
            expect(converter.convert(1, 'btu-por-minuto', 'watt')).toBeCloseTo(17.5842666667, 8);
        });
    });

    // Conversões inversas da unidade base
    describe('Conversões da unidade base (watt)', () => {
        test('1000 watts → quilowatt = 1', () => {
            expect(converter.convert(1000, 'watt', 'quilowatt')).toBeCloseTo(1, 10);
        });

        test('745.69987158227022 watts → cavalo-vapor-eua = 1', () => {
            expect(converter.convert(745.69987158227022, 'watt', 'cavalo-vapor-eua')).toBeCloseTo(1, 8);
        });

        test('0.0225969658 watts → libra-pe-por-minuto = 1', () => {
            expect(converter.convert(0.0225969658, 'watt', 'libra-pe-por-minuto')).toBeCloseTo(1, 8);
        });

        test('17.5842666667 watts → btu-por-minuto = 1', () => {
            expect(converter.convert(17.5842666667, 'watt', 'btu-por-minuto')).toBeCloseTo(1, 8);
        });
    });

    // Conversões entre quilowatt e outras unidades
    describe('Conversões envolvendo quilowatt', () => {
        test('1 quilowatt → cavalo-vapor-eua ≈ 1.34102209', () => {
            expect(converter.convert(1, 'quilowatt', 'cavalo-vapor-eua')).toBeCloseTo(1.34102209, 6);
        });

        test('1 cavalo-vapor-eua → quilowatt ≈ 0.74569987', () => {
            expect(converter.convert(1, 'cavalo-vapor-eua', 'quilowatt')).toBeCloseTo(0.74569987, 6);
        });

        test('1 quilowatt → btu-por-minuto ≈ 56.8690272', () => {
            expect(converter.convert(1, 'quilowatt', 'btu-por-minuto')).toBeCloseTo(56.869019274698466, 6);
        });

        test('1 quilowatt → libra-pe-por-minuto ≈ 44253.728967452786', () => {
            expect(converter.convert(1, 'quilowatt', 'libra-pe-por-minuto')).toBeCloseTo(44253.728967452786, 4);
        });
    });

    // Conversões entre unidades imperiais/americanas
    describe('Conversões entre unidades imperiais/americanas', () => {
        test('1 cavalo-vapor-eua → btu-por-minuto ≈ 42.407220370152295', () => {
            expect(converter.convert(1, 'cavalo-vapor-eua', 'btu-por-minuto')).toBeCloseTo(42.407220370152295, 6);
        });

        test('1 btu-por-minuto → cavalo-vapor-eua ≈ 0.02358089002937423', () => {
            expect(converter.convert(1, 'btu-por-minuto', 'cavalo-vapor-eua')).toBeCloseTo(0.02358089002937423, 7);
        });

        test('1 cavalo-vapor-eua → libra-pe-por-minuto ≈ 33000', () => {
            expect(converter.convert(1, 'cavalo-vapor-eua', 'libra-pe-por-minuto')).toBeCloseTo(33000, 2);
        });

        test('1 libra-pe-por-minuto → btu-por-minuto ≈ 0.001285067', () => {
            expect(converter.convert(1, 'libra-pe-por-minuto', 'btu-por-minuto')).toBeCloseTo(0.001285067, 8);
        });
    });

    // Conversões comuns do cotidiano
    describe('Conversões comuns do cotidiano', () => {
        test('2000 watts → quilowatt = 2', () => {
            expect(converter.convert(2000, 'watt', 'quilowatt')).toBeCloseTo(2, 10);
        });

        test('5 quilowatts → watts = 5000', () => {
            expect(converter.convert(5, 'quilowatt', 'watt')).toBeCloseTo(5000, 10);
        });

        test('10 cavalos-vapor → quilowatt ≈ 7.4569987', () => {
            expect(converter.convert(10, 'cavalo-vapor-eua', 'quilowatt')).toBeCloseTo(7.4569987, 6);
        });

        test('100 cavalos-vapor → watts ≈ 74569.987', () => {
            expect(converter.convert(100, 'cavalo-vapor-eua', 'watt')).toBeCloseTo(74569.987, 3);
        });

        test('60 BTU/min → watts ≈ 1055.056', () => {
            expect(converter.convert(60, 'btu-por-minuto', 'watt')).toBeCloseTo(1055.056, 3);
        });
    });

    // Testes com valores decimais
    describe('Conversões com valores decimais', () => {
        test('0.5 quilowatt → watt = 500', () => {
            expect(converter.convert(0.5, 'quilowatt', 'watt')).toBeCloseTo(500, 10);
        });

        test('1.5 cavalos-vapor → watts ≈ 1118.5498', () => {
            expect(converter.convert(1.5, 'cavalo-vapor-eua', 'watt')).toBeCloseTo(1118.5498, 4);
        });

        test('2.25 quilowatts → cavalos-vapor ≈ 3.01730', () => {
            expect(converter.convert(2.25, 'quilowatt', 'cavalo-vapor-eua')).toBeCloseTo(3.01730, 5);
        });

        test('0.75 BTU/min → watts ≈ 13.1882', () => {
            expect(converter.convert(0.75, 'btu-por-minuto', 'watt')).toBeCloseTo(13.1882, 4);
        });
    });

    // Testes com valores grandes
    describe('Conversões com valores grandes', () => {
        test('1000 quilowatts → watts = 1000000', () => {
            expect(converter.convert(1000, 'quilowatt', 'watt')).toBeCloseTo(1000000, 10);
        });

        test('5000 cavalos-vapor → quilowatts ≈ 3728.4994', () => {
            expect(converter.convert(5000, 'cavalo-vapor-eua', 'quilowatt')).toBeCloseTo(3728.4994, 4);
        });

        test('10000 BTU/min → quilowatts ≈ 175.8427', () => {
            expect(converter.convert(10000, 'btu-por-minuto', 'quilowatt')).toBeCloseTo(175.8427, 4);
        });

        test('1000000 libra-pé/min → quilowatts ≈ 22.5970', () => {
            expect(converter.convert(1000000, 'libra-pe-por-minuto', 'quilowatt')).toBeCloseTo(22.5970, 4);
        });
    });

    // Testes com valores pequenos
    describe('Conversões com valores pequenos', () => {
        test('1 watt → quilowatt = 0.001', () => {
            expect(converter.convert(1, 'watt', 'quilowatt')).toBeCloseTo(0.001, 10);
        });

        test('0.001 cavalo-vapor → watts ≈ 0.7457', () => {
            expect(converter.convert(0.001, 'cavalo-vapor-eua', 'watt')).toBeCloseTo(0.7457, 4);
        });

        test('0.1 BTU/min → watts ≈ 1.7584', () => {
            expect(converter.convert(0.1, 'btu-por-minuto', 'watt')).toBeCloseTo(1.7584, 4);
        });

        test('10 libra-pé/min → watts ≈ 0.2259697', () => {
            expect(converter.convert(10, 'libra-pe-por-minuto', 'watt')).toBeCloseTo(0.2259697, 7);
        });
    });

    // Testes de casos extremos
    describe('Casos extremos', () => {
        test('0 watts → quilowatt = 0', () => {
            expect(converter.convert(0, 'watt', 'quilowatt')).toBe(0);
        });

        test('0 cavalos-vapor → watts = 0', () => {
            expect(converter.convert(0, 'cavalo-vapor-eua', 'watt')).toBe(0);
        });

        test('Número muito grande: 999999 watts → quilowatt = 999.999', () => {
            expect(converter.convert(999999, 'watt', 'quilowatt')).toBeCloseTo(999.999, 3);
        });

        test('Número muito pequeno: 0.000001 quilowatt → watt = 0.001', () => {
            expect(converter.convert(0.000001, 'quilowatt', 'watt')).toBeCloseTo(0.001, 10);
        });
    });

    // Testes de precisão
    describe('Testes de precisão', () => {
        test('Conversão ida e volta: watt → quilowatt → watt', () => {
            const original = 1500;
            const converted = converter.convert(original, 'watt', 'quilowatt');
            const backConverted = converter.convert(converted, 'quilowatt', 'watt');
            expect(backConverted).toBeCloseTo(original, 8);
        });

        test('Conversão ida e volta: cavalo-vapor → watt → cavalo-vapor', () => {
            const original = 2.5;
            const converted = converter.convert(original, 'cavalo-vapor-eua', 'watt');
            const backConverted = converter.convert(converted, 'watt', 'cavalo-vapor-eua');
            expect(backConverted).toBeCloseTo(original, 8);
        });

        test('Conversão ida e volta: BTU/min → quilowatt → BTU/min', () => {
            const original = 100;
            const converted = converter.convert(original, 'btu-por-minuto', 'quilowatt');
            const backConverted = converter.convert(converted, 'quilowatt', 'btu-por-minuto');
            expect(backConverted).toBeCloseTo(original, 8);
        });

        test('Conversão ida e volta: libra-pé/min → watt → libra-pé/min', () => {
            const original = 50000;
            const converted = converter.convert(original, 'libra-pe-por-minuto', 'watt');
            const backConverted = converter.convert(converted, 'watt', 'libra-pe-por-minuto');
            expect(backConverted).toBeCloseTo(original, 6);
        });
    });

    // Testes de equivalências conhecidas
    describe('Equivalências conhecidas', () => {
        test('1 quilowatt = 1000 watts', () => {
            expect(converter.convert(1, 'quilowatt', 'watt')).toBeCloseTo(1000, 10);
        });

        test('1 cavalo-vapor ≈ 746 watts (aproximadamente)', () => {
            expect(converter.convert(1, 'cavalo-vapor-eua', 'watt')).toBeCloseTo(746, 0);
        });

        test('1 quilowatt ≈ 1.34 cavalos-vapor (aproximadamente)', () => {
            expect(converter.convert(1, 'quilowatt', 'cavalo-vapor-eua')).toBeCloseTo(1.34, 2);
        });

        test('1 cavalo-vapor ≈ 33000 libra-pé/min (definição clássica)', () => {
            expect(converter.convert(1, 'cavalo-vapor-eua', 'libra-pe-por-minuto')).toBeCloseTo(33000, 1);
        });

        test('1 BTU/min ≈ 17.58 watts (aproximadamente)', () => {
            expect(converter.convert(1, 'btu-por-minuto', 'watt')).toBeCloseTo(17.58, 2);
        });
    });

    // Testes específicos de engenharia
    describe('Aplicações de engenharia', () => {
        test('Motor de 5 HP → quilowatts ≈ 3.728', () => {
            expect(converter.convert(5, 'cavalo-vapor-eua', 'quilowatt')).toBeCloseTo(3.728, 3);
        });

        test('Aquecedor de 3000 watts → BTU/min ≈ 170.6070578240954', () => {
            expect(converter.convert(3000, 'watt', 'btu-por-minuto')).toBeCloseTo(170.6070578240954, 2);
        });

        test('Sistema de 50 kW → cavalos-vapor ≈ 67.05', () => {
            expect(converter.convert(50, 'quilowatt', 'cavalo-vapor-eua')).toBeCloseTo(67.05, 2);
        });

        test('Bomba de 200 HP → quilowatts ≈ 149.14', () => {
            expect(converter.convert(200, 'cavalo-vapor-eua', 'quilowatt')).toBeCloseTo(149.14, 2);
        });
    });
});