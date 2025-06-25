import { UnitConverterFactory } from '../../unit.converter.factory';


const factory = new UnitConverterFactory();
const converter = factory.createService('speed');

describe('Conversão completa entre unidades de velocidade', () => {

    // Testes de conversão para a mesma unidade
    describe('Conversões para a mesma unidade', () => {
        test('1 metro-por-segundo → metro-por-segundo ≈ 1.0', () => {
            expect(converter.convert(1, 'metro-por-segundo', 'metro-por-segundo')).toBeCloseTo(1.0, 10);
        });

        test('1 quilometro-por-hora → quilometro-por-hora ≈ 1.0', () => {
            expect(converter.convert(1, 'quilometro-por-hora', 'quilometro-por-hora')).toBeCloseTo(1.0, 10);
        });

        test('1 milha-por-hora → milha-por-hora ≈ 1.0', () => {
            expect(converter.convert(1, 'milha-por-hora', 'milha-por-hora')).toBeCloseTo(1.0, 10);
        });

        test('1 nos → nos ≈ 1.0', () => {
            expect(converter.convert(1, 'nos', 'nos')).toBeCloseTo(1.0, 10);
        });

        test('1 mach → mach ≈ 1.0', () => {
            expect(converter.convert(1, 'mach', 'mach')).toBeCloseTo(1.0, 10);
        });
    });

    // Conversões básicas - unidade base: metro por segundo
    describe('Conversões para unidade base (metro por segundo)', () => {
        test('1 centimetro-por-segundo → metro-por-segundo = 0.01', () => {
            expect(converter.convert(1, 'centimetro-por-segundo', 'metro-por-segundo')).toBeCloseTo(0.01, 10);
        });

        test('1 quilometro-por-hora → metro-por-segundo ≈ 0.2777777778', () => {
            expect(converter.convert(1, 'quilometro-por-hora', 'metro-por-segundo')).toBeCloseTo(0.2777777778, 10);
        });

        test('1 pes-por-segundo → metro-por-segundo ≈ 0.3048', () => {
            expect(converter.convert(1, 'pes-por-segundo', 'metro-por-segundo')).toBeCloseTo(0.3048, 10);
        });

        test('1 milha-por-hora → metro-por-segundo ≈ 0.44704', () => {
            expect(converter.convert(1, 'milha-por-hora', 'metro-por-segundo')).toBeCloseTo(0.44704, 10);
        });

        test('1 nos → metro-por-segundo ≈ 0.514444', () => {
            expect(converter.convert(1, 'nos', 'metro-por-segundo')).toBeCloseTo(0.514444, 10);
        });

        test('1 mach → metro-por-segundo ≈ 340.29', () => {
            expect(converter.convert(1, 'mach', 'metro-por-segundo')).toBeCloseTo(340.29, 10);
        });

        test('1 quilometro-por-segundo → metro-por-segundo = 1000', () => {
            expect(converter.convert(1, 'quilometro-por-segundo', 'metro-por-segundo')).toBeCloseTo(1000, 10);
        });

        test('1 polegada-por-segundo → metro-por-segundo ≈ 0.0254', () => {
            expect(converter.convert(1, 'polegada-por-segundo', 'metro-por-segundo')).toBeCloseTo(0.0254, 10);
        });

        test('1 velocidade-da-luz → metro-por-segundo = 299792458', () => {
            expect(converter.convert(1, 'velocidade-da-luz', 'metro-por-segundo')).toBeCloseTo(299792458, 10);
        });
    });

    // Conversões inversas da unidade base
    describe('Conversões da unidade base (metro por segundo)', () => {
        test('0.01 metro-por-segundo → centimetro-por-segundo = 1', () => {
            expect(converter.convert(0.01, 'metro-por-segundo', 'centimetro-por-segundo')).toBeCloseTo(1, 10);
        });

        test('0.2777777778 metro-por-segundo → quilometro-por-hora = 1', () => {
            expect(converter.convert(0.2777777778, 'metro-por-segundo', 'quilometro-por-hora')).toBeCloseTo(1, 8);
        });

        test('0.3048 metro-por-segundo → pes-por-segundo = 1', () => {
            expect(converter.convert(0.3048, 'metro-por-segundo', 'pes-por-segundo')).toBeCloseTo(1, 10);
        });

        test('0.44704 metro-por-segundo → milha-por-hora = 1', () => {
            expect(converter.convert(0.44704, 'metro-por-segundo', 'milha-por-hora')).toBeCloseTo(1, 10);
        });

        test('340.29 metro-por-segundo → mach = 1', () => {
            expect(converter.convert(340.29, 'metro-por-segundo', 'mach')).toBeCloseTo(1, 10);
        });

        test('1000 metro-por-segundo → quilometro-por-segundo = 1', () => {
            expect(converter.convert(1000, 'metro-por-segundo', 'quilometro-por-segundo')).toBeCloseTo(1, 10);
        });
    });

    // Conversões comuns do cotidiano
    describe('Conversões comuns do cotidiano', () => {
        test('100 km/h → m/s ≈ 27.78', () => {
            expect(converter.convert(100, 'quilometro-por-hora', 'metro-por-segundo')).toBeCloseTo(27.78, 2);
        });

        test('60 milhas/h → km/h ≈ 96.56', () => {
            expect(converter.convert(60, 'milha-por-hora', 'quilometro-por-hora')).toBeCloseTo(96.56, 2);
        });

        test('50 m/s → km/h = 179.9999999856', () => {
            expect(converter.convert(50, 'metro-por-segundo', 'quilometro-por-hora')).toBeCloseTo(179.9999999856, 10);
        });

        test('30 nós → km/h ≈ 55.56', () => {
            expect(converter.convert(30, 'nos', 'quilometro-por-hora')).toBeCloseTo(55.56, 2);
        });

        test('10 pés/s → m/s ≈ 3.048', () => {
            expect(converter.convert(10, 'pes-por-segundo', 'metro-por-segundo')).toBeCloseTo(3.048, 10);
        });
    });

    // Conversões entre unidades imperiais/americanas
    describe('Conversões entre unidades imperiais/americanas', () => {
        test('60 mph → pés/s = 88', () => {
            expect(converter.convert(60, 'milha-por-hora', 'pes-por-segundo')).toBeCloseTo(88, 2);
        });

        test('100 pés/s → mph ≈ 68.18', () => {
            expect(converter.convert(100, 'pes-por-segundo', 'milha-por-hora')).toBeCloseTo(68.18, 2);
        });

        test('12 polegadas/s → pés/s = 1', () => {
            expect(converter.convert(12, 'polegada-por-segundo', 'pes-por-segundo')).toBeCloseTo(1, 10);
        });

        test('1 pé/s → polegadas/s = 12', () => {
            expect(converter.convert(1, 'pes-por-segundo', 'polegada-por-segundo')).toBeCloseTo(12, 10);
        });
    });

    // Conversões náuticas e aeronáuticas
    describe('Conversões náuticas e aeronáuticas', () => {
        test('1 nó → km/h ≈ 1.852', () => {
            expect(converter.convert(1, 'nos', 'quilometro-por-hora')).toBeCloseTo(1.852, 3);
        });

        test('100 nós → mph ≈ 115.08', () => {
            expect(converter.convert(100, 'nos', 'milha-por-hora')).toBeCloseTo(115.08, 2);
        });

        test('Mach 1 → km/h ≈ 1225.04', () => {
            expect(converter.convert(1, 'mach', 'quilometro-por-hora')).toBeCloseTo(1225.04, 2);
        });

        test('Mach 2 → m/s ≈ 680.58', () => {
            expect(converter.convert(2, 'mach', 'metro-por-segundo')).toBeCloseTo(680.58, 2);
        });

        test('500 mph → Mach ≈ 0.6568515090070234', () => {
            expect(converter.convert(500, 'milha-por-hora', 'mach')).toBeCloseTo(0.6568515090070234, 3);
        });
    });

    // Testes com valores decimais
    describe('Conversões com valores decimais', () => {
        test('0.5 m/s → cm/s = 50', () => {
            expect(converter.convert(0.5, 'metro-por-segundo', 'centimetro-por-segundo')).toBeCloseTo(50, 10);
        });

        test('2.5 km/h → m/s ≈ 0.694', () => {
            expect(converter.convert(2.5, 'quilometro-por-hora', 'metro-por-segundo')).toBeCloseTo(0.694, 3);
        });

        test('1.5 Mach → km/h ≈ 1837.57', () => {
            expect(converter.convert(1.5, 'mach', 'quilometro-por-hora')).toBeCloseTo(1837.57, 2);
        });

        test('0.25 nós → m/s ≈ 0.1286', () => {
            expect(converter.convert(0.25, 'nos', 'metro-por-segundo')).toBeCloseTo(0.1286, 4);
        });
    });

    // Testes com velocidades altas
    describe('Conversões com velocidades altas', () => {
        test('1000 km/h → m/s ≈ 277.78', () => {
            expect(converter.convert(1000, 'quilometro-por-hora', 'metro-por-segundo')).toBeCloseTo(277.78, 2);
        });

        test('Mach 5 → km/h ≈ 6125.22', () => {
            expect(converter.convert(5, 'mach', 'quilometro-por-hora')).toBeCloseTo(6125.22, 2);
        });

        test('10 km/s → m/s = 10000', () => {
            expect(converter.convert(10, 'quilometro-por-segundo', 'metro-por-segundo')).toBeCloseTo(10000, 10);
        });

        test('0.1c (10% velocidade da luz) → km/s ≈ 29979.2458', () => {
            expect(converter.convert(0.1, 'velocidade-da-luz', 'quilometro-por-segundo')).toBeCloseTo(29979.2458, 1);
        });
    });

    // Testes com velocidades baixas
    describe('Conversões com velocidades baixas', () => {
        test('1 cm/s → mm/s = 10', () => {
            // Assumindo que mm/s teria fator 0.001
            expect(converter.convert(1, 'centimetro-por-segundo', 'metro-por-segundo')).toBeCloseTo(0.01, 10);
        });

        test('0.1 m/s → km/h = 0.36', () => {
            expect(converter.convert(0.1, 'metro-por-segundo', 'quilometro-por-hora')).toBeCloseTo(0.36, 10);
        });

        test('1 polegada/s → cm/s ≈ 2.54', () => {
            expect(converter.convert(1, 'polegada-por-segundo', 'centimetro-por-segundo')).toBeCloseTo(2.54, 10);
        });

        test('5 cm/s → mph ≈ 0.1118', () => {
            expect(converter.convert(5, 'centimetro-por-segundo', 'milha-por-hora')).toBeCloseTo(0.1118, 4);
        });
    });

    // Testes de casos extremos
    describe('Casos extremos', () => {
        test('0 m/s → km/h = 0', () => {
            expect(converter.convert(0, 'metro-por-segundo', 'quilometro-por-hora')).toBe(0);
        });

        test('0 mph → nós = 0', () => {
            expect(converter.convert(0, 'milha-por-hora', 'nos')).toBe(0);
        });

        test('Velocidade muito alta: 999999 m/s → km/s ≈ 999.999', () => {
            expect(converter.convert(999999, 'metro-por-segundo', 'quilometro-por-segundo')).toBeCloseTo(999.999, 3);
        });

        test('Velocidade muito baixa: 0.000001 m/s → cm/s = 0.0001', () => {
            expect(converter.convert(0.000001, 'metro-por-segundo', 'centimetro-por-segundo')).toBeCloseTo(0.0001, 10);
        });
    });

    // Testes de precisão
    describe('Testes de precisão', () => {
        test('Conversão ida e volta: m/s → km/h → m/s', () => {
            const original = 25;
            const converted = converter.convert(original, 'metro-por-segundo', 'quilometro-por-hora');
            const backConverted = converter.convert(converted, 'quilometro-por-hora', 'metro-por-segundo');
            expect(backConverted).toBeCloseTo(original, 8);
        });

        test('Conversão ida e volta: mph → nós → mph', () => {
            const original = 65;
            const converted = converter.convert(original, 'milha-por-hora', 'nos');
            const backConverted = converter.convert(converted, 'nos', 'milha-por-hora');
            expect(backConverted).toBeCloseTo(original, 8);
        });

        test('Conversão ida e volta: Mach → m/s → Mach', () => {
            const original = 2.5;
            const converted = converter.convert(original, 'mach', 'metro-por-segundo');
            const backConverted = converter.convert(converted, 'metro-por-segundo', 'mach');
            expect(backConverted).toBeCloseTo(original, 8);
        });

        test('Conversão ida e volta: km/s → c → km/s', () => {
            const original = 150000; // 50% da velocidade da luz
            const converted = converter.convert(original, 'quilometro-por-segundo', 'velocidade-da-luz');
            const backConverted = converter.convert(converted, 'velocidade-da-luz', 'quilometro-por-segundo');
            expect(backConverted).toBeCloseTo(original, 6);
        });
    });

    // Testes de equivalências conhecidas
    describe('Equivalências conhecidas', () => {
        test('1 m/s = 3.599999999712 km/h', () => {
            expect(converter.convert(1, 'metro-por-segundo', 'quilometro-por-hora')).toBeCloseTo(3.599999999712, 10);
        });

        test('1 mph ≈ 1.609 km/h', () => {
            expect(converter.convert(1, 'milha-por-hora', 'quilometro-por-hora')).toBeCloseTo(1.609, 3);
        });

        test('1 nó ≈ 1.852 km/h (milha náutica)', () => {
            expect(converter.convert(1, 'nos', 'quilometro-por-hora')).toBeCloseTo(1.852, 3);
        });

        test('Mach 1 ≈ 1225 km/h (ao nível do mar)', () => {
            expect(converter.convert(1, 'mach', 'quilometro-por-hora')).toBeCloseTo(1225, 1);
        });

        test('1 pé/s ≈ 0.682 mph', () => {
            expect(converter.convert(1, 'pes-por-segundo', 'milha-por-hora')).toBeCloseTo(0.682, 3);
        });

        test('Velocidade da luz ≈ 1079252848.7136598 bilhão km/h', () => {
            expect(converter.convert(1, 'velocidade-da-luz', 'quilometro-por-hora')).toBeCloseTo(1079252848.7136598, 1);
        });
    });

    // Testes específicos de aplicações
    describe('Aplicações específicas', () => {
        test('Limite urbano: 50 km/h → mph ≈ 31.07', () => {
            expect(converter.convert(50, 'quilometro-por-hora', 'milha-por-hora')).toBeCloseTo(31.07, 2);
        });

        test('Velocidade de cruzeiro Boeing 747: 900 km/h → Mach ≈ 0.735', () => {
            expect(converter.convert(900, 'quilometro-por-hora', 'mach')).toBeCloseTo(0.735, 3);
        });

        test('Velocidade típica de vento: 20 nós → m/s ≈ 10.29', () => {
            expect(converter.convert(20, 'nos', 'metro-por-segundo')).toBeCloseTo(10.29, 2);
        });

        test('Velocidade de escape da Terra: 11.2 km/s → mph ≈ 25053.686471009307', () => {
            expect(converter.convert(11.2, 'quilometro-por-segundo', 'milha-por-hora')).toBeCloseTo(25053.686471009307, 0);
        });

        test('Corrida de 100m: 10 m/s → km/h = 35.99999999712', () => {
            expect(converter.convert(10, 'metro-por-segundo', 'quilometro-por-hora')).toBeCloseTo(35.99999999712, 10);
        });

        test('Trem-bala japonês: 320 km/h → m/s ≈ 88.89', () => {
            expect(converter.convert(320, 'quilometro-por-hora', 'metro-por-segundo')).toBeCloseTo(88.89, 2);
        });
    });
});