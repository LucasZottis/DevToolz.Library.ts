import { ConverterFactory } from '../../factory/converter-factory';

const factory = new ConverterFactory();
const converter = factory.getConverter('length');

describe('Conversão completa entre unidades de comprimento', () => {

    // Testes de conversão para a mesma unidade
    describe('Conversões para a mesma unidade', () => {
        test('1 metro → metro ≈ 1.0', () => {
            expect(converter.convert(1, 'metro', 'metro')).toBeCloseTo(1.0, 10);
        });

        test('5 quilômetro → quilômetro ≈ 5.0', () => {
            expect(converter.convert(5, 'quilometro', 'quilometro')).toBeCloseTo(5.0, 10);
        });

        test('100 polegada → polegada ≈ 100.0', () => {
            expect(converter.convert(100, 'polegada', 'polegada')).toBeCloseTo(100.0, 10);
        });
    });

    // Testes de conversão métrica básica
    describe('Conversões métricas básicas', () => {
        test('1000 milímetro → metro ≈ 1.0', () => {
            expect(converter.convert(1000, 'milimetro', 'metro')).toBeCloseTo(1.0, 10);
        });

        test('100 centímetro → metro ≈ 1.0', () => {
            expect(converter.convert(100, 'centimetro', 'metro')).toBeCloseTo(1.0, 10);
        });

        test('10 decímetro → metro ≈ 1.0', () => {
            expect(converter.convert(10, 'decimetro', 'metro')).toBeCloseTo(1.0, 10);
        });

        test('1 quilômetro → metro ≈ 1000.0', () => {
            expect(converter.convert(1, 'quilometro', 'metro')).toBeCloseTo(1000.0, 10);
        });

        test('1 metro → milímetro ≈ 1000.0', () => {
            expect(converter.convert(1, 'metro', 'milimetro')).toBeCloseTo(1000.0, 10);
        });

        test('1 metro → centímetro ≈ 100.0', () => {
            expect(converter.convert(1, 'metro', 'centimetro')).toBeCloseTo(100.0, 10);
        });

        test('1 metro → quilômetro ≈ 0.001', () => {
            expect(converter.convert(1, 'metro', 'quilometro')).toBeCloseTo(0.001, 10);
        });
    });

    // Testes de unidades muito pequenas
    describe('Conversões de unidades muito pequenas', () => {
        test('1 metro → angstrom ≈ 1e10', () => {
            expect(converter.convert(1, 'metro', 'angstrom')).toBeCloseTo(1e10, 5);
        });

        test('1 metro → picometro ≈ 1e12', () => {
            expect(converter.convert(1, 'metro', 'picometro')).toBeCloseTo(1e12, 5);
        });

        test('1 metro → nanometro ≈ 1e9', () => {
            expect(converter.convert(1, 'metro', 'nanometro')).toBeCloseTo(1e9, 5);
        });

        test('1 metro → micrometro ≈ 1e6', () => {
            expect(converter.convert(1, 'metro', 'micrometro')).toBeCloseTo(1e6, 5);
        });

        test('1 metro → micron ≈ 1e6', () => {
            expect(converter.convert(1, 'metro', 'micron')).toBeCloseTo(1e6, 5);
        });

        test('1000 nanometro → micrometro ≈ 1.0', () => {
            expect(converter.convert(1000, 'nanometro', 'micrometro')).toBeCloseTo(1.0, 10);
        });
    });

    // Testes de unidades imperiais
    describe('Conversões de unidades imperiais', () => {
        test('1 polegada → centímetro ≈ 2.54', () => {
            expect(converter.convert(1, 'polegada', 'centimetro')).toBeCloseTo(2.54, 10);
        });

        test('1 pé → metro ≈ 0.3048', () => {
            expect(converter.convert(1, 'pes', 'metro')).toBeCloseTo(0.3048, 10);
        });

        test('1 jarda → metro ≈ 0.9144', () => {
            expect(converter.convert(1, 'jarda', 'metro')).toBeCloseTo(0.9144, 10);
        });

        test('1 milha → quilômetro ≈ 1.609344', () => {
            expect(converter.convert(1, 'milha', 'quilometro')).toBeCloseTo(1.609344, 6);
        });

        test('12 polegada → pé ≈ 1.0', () => {
            expect(converter.convert(12, 'polegada', 'pes')).toBeCloseTo(1.0, 10);
        });

        test('3 pé → jarda ≈ 1.0', () => {
            expect(converter.convert(3, 'pes', 'jarda')).toBeCloseTo(1.0, 10);
        });

        test('1760 jarda → milha ≈ 1.0', () => {
            expect(converter.convert(1760, 'jarda', 'milha')).toBeCloseTo(1.0, 8);
        });
    });

    // Testes de unidades náuticas e astronômicas
    describe('Conversões de unidades especiais', () => {
        test('1 milha-nautica → metro ≈ 1852.0', () => {
            expect(converter.convert(1, 'milha-nautica', 'metro')).toBeCloseTo(1852.0, 10);
        });

        test('1 unidade-astronomica → quilômetro ≈ 149597870.7', () => {
            expect(converter.convert(1, 'unidade-astronomica', 'quilometro')).toBeCloseTo(149597870.7, 1);
        });

        test('1 ano-luz → unidade-astronomica ≈ 63241.08', () => {
            expect(converter.convert(1, 'ano-luz', 'unidade-astronomica')).toBeCloseTo(63241.08, 0);
        });

        test('1 parsec → ano-luz ≈ 3.2616', () => {
            expect(converter.convert(1, 'parsec', 'ano-luz')).toBeCloseTo(3.2616, 3);
        });

        test('1 distancia-lunar → quilômetro ≈ 384400.0', () => {
            expect(converter.convert(1, 'distancia-lunar', 'quilometro')).toBeCloseTo(384400.0, 1);
        });
    });

    // Testes com valores decimais
    describe('Conversões com valores decimais', () => {
        test('0.5 metro → centímetro ≈ 50.0', () => {
            expect(converter.convert(0.5, 'metro', 'centimetro')).toBeCloseTo(50.0, 10);
        });

        test('2.5 quilômetro → metro ≈ 2500.0', () => {
            expect(converter.convert(2.5, 'quilometro', 'metro')).toBeCloseTo(2500.0, 10);
        });

        test('0.1 polegada → milímetro ≈ 2.54', () => {
            expect(converter.convert(0.1, 'polegada', 'milimetro')).toBeCloseTo(2.54, 10);
        });
    });

    // Testes com valores grandes
    describe('Conversões com valores grandes', () => {
        test('1000000 metro → quilômetro ≈ 1000.0', () => {
            expect(converter.convert(1000000, 'metro', 'quilometro')).toBeCloseTo(1000.0, 10);
        });

        test('100 quilômetro → milha ≈ 62.137', () => {
            expect(converter.convert(100, 'quilometro', 'milha')).toBeCloseTo(62.137, 2);
        });
    });

    // Testes de casos extremos
    describe('Casos extremos', () => {
        test('0 metro → qualquer unidade ≈ 0.0', () => {
            expect(converter.convert(0, 'metro', 'quilometro')).toBeCloseTo(0.0, 10);
            expect(converter.convert(0, 'metro', 'centimetro')).toBeCloseTo(0.0, 10);
            expect(converter.convert(0, 'metro', 'polegada')).toBeCloseTo(0.0, 10);
        });

        test('Conversões muito pequenas', () => {
            expect(converter.convert(1, 'angstrom', 'metro')).toBeCloseTo(1e-10, 15);
            expect(converter.convert(1, 'picometro', 'metro')).toBeCloseTo(1e-12, 15);
        });

        test('Conversões astronômicas grandes', () => {
            expect(converter.convert(1, 'parsec', 'metro')).toBeCloseTo(3.085677581491367e16, 10);
            expect(converter.convert(1, 'ano-luz', 'metro')).toBeCloseTo(9.4607304725808e15, 10);
        });
    });

    // Testes de conversões bidirecionais
    describe('Conversões bidirecionais', () => {
        test('Conversão bidirecional: metro ↔ polegada', () => {
            const metros = 1;
            const polegadas = converter.convert(metros, 'metro', 'polegada');
            const metrosNovamente = converter.convert(polegadas, 'polegada', 'metro');
            expect(metrosNovamente).toBeCloseTo(metros, 10);
        });

        test('Conversão bidirecional: quilômetro ↔ milha', () => {
            const quilometros = 10;
            const milhas = converter.convert(quilometros, 'quilometro', 'milha');
            const quilometrosNovamente = converter.convert(milhas, 'milha', 'quilometro');
            expect(quilometrosNovamente).toBeCloseTo(quilometros, 8);
        });

        test('Conversão bidirecional: nanometro ↔ micrometro', () => {
            const nanometros = 5000;
            const micrometros = converter.convert(nanometros, 'nanometro', 'micrometro');
            const nanometrosNovamente = converter.convert(micrometros, 'micrometro', 'nanometro');
            expect(nanometrosNovamente).toBeCloseTo(nanometros, 10);
        });
    });

    // Testes de precisão para conversões complexas
    describe('Testes de precisão', () => {
        test('Conversão de alta precisão: angstrom → parsec', () => {
            const angstroms = 1e20;
            const parsecs = converter.convert(angstroms, 'angstrom', 'parsec');
            expect(parsecs).toBeCloseTo(3.2408e-7, 10);
        });

        test('Múltiplas conversões em cadeia mantêm precisão', () => {
            const valorInicial = 100;
            let resultado = valorInicial;

            // metro → km → milha → jarda → pé → polegada → cm → mm → metro
            resultado = converter.convert(resultado, 'metro', 'quilometro');
            resultado = converter.convert(resultado, 'quilometro', 'milha');
            resultado = converter.convert(resultado, 'milha', 'jarda');
            resultado = converter.convert(resultado, 'jarda', 'pes');
            resultado = converter.convert(resultado, 'pes', 'polegada');
            resultado = converter.convert(resultado, 'polegada', 'centimetro');
            resultado = converter.convert(resultado, 'centimetro', 'milimetro');
            resultado = converter.convert(resultado, 'milimetro', 'metro');

            expect(resultado).toBeCloseTo(valorInicial, 6);
        });
    });
});