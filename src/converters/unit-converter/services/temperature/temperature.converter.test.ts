import { UnitConverterFactory } from '../../unit.converter.factory';


const factory = new UnitConverterFactory();
const converter = factory.createService('temperature');

describe('Conversão completa entre unidades de temperatura', () => {

    // Testes de conversão para a mesma unidade
    describe('Conversões para a mesma unidade', () => {
        test('273.15 kelvin → kelvin ≈ 273.15', () => {
            expect(converter.convert(273.15, 'kelvin', 'kelvin')).toBeCloseTo(273.15, 10);
        });

        test('20 celsius → celsius ≈ 20.0', () => {
            expect(converter.convert(20, 'celsius', 'celsius')).toBeCloseTo(20.0, 10);
        });

        test('68 fahrenheit → fahrenheit ≈ 68.0', () => {
            expect(converter.convert(68, 'fahrenheit', 'fahrenheit')).toBeCloseTo(68.0, 10);
        });

        test('491.67 rankine → rankine ≈ 491.67', () => {
            expect(converter.convert(491.67, 'rankine', 'rankine')).toBeCloseTo(491.67, 10);
        });

        test('16 reaumur → reaumur ≈ 16.0', () => {
            expect(converter.convert(16, 'reaumur', 'reaumur')).toBeCloseTo(16.0, 10);
        });
    });

    // Testes de conversão Celsius ↔ outras unidades
    describe('Conversões a partir de Celsius', () => {
        test('0 celsius → kelvin ≈ 273.15', () => {
            expect(converter.convert(0, 'celsius', 'kelvin')).toBeCloseTo(273.15, 10);
        });

        test('0 celsius → fahrenheit ≈ 32.0', () => {
            expect(converter.convert(0, 'celsius', 'fahrenheit')).toBeCloseTo(32.0, 10);
        });

        test('0 celsius → rankine ≈ 491.67', () => {
            expect(converter.convert(0, 'celsius', 'rankine')).toBeCloseTo(491.67, 2);
        });

        test('0 celsius → reaumur ≈ 0.0', () => {
            expect(converter.convert(0, 'celsius', 'reaumur')).toBeCloseTo(0.0, 10);
        });

        test('100 celsius → kelvin ≈ 373.15', () => {
            expect(converter.convert(100, 'celsius', 'kelvin')).toBeCloseTo(373.15, 10);
        });

        test('100 celsius → fahrenheit ≈ 212.0', () => {
            expect(converter.convert(100, 'celsius', 'fahrenheit')).toBeCloseTo(212.0, 10);
        });

        test('100 celsius → reaumur ≈ 80.0', () => {
            expect(converter.convert(100, 'celsius', 'reaumur')).toBeCloseTo(80.0, 10);
        });

        test('25 celsius → fahrenheit ≈ 77.0', () => {
            expect(converter.convert(25, 'celsius', 'fahrenheit')).toBeCloseTo(77.0, 10);
        });

        test('-40 celsius → fahrenheit ≈ -40.0', () => {
            expect(converter.convert(-40, 'celsius', 'fahrenheit')).toBeCloseTo(-40.0, 10);
        });
    });

    // Testes de conversão Fahrenheit ↔ outras unidades
    describe('Conversões a partir de Fahrenheit', () => {
        test('32 fahrenheit → celsius ≈ 0.0', () => {
            expect(converter.convert(32, 'fahrenheit', 'celsius')).toBeCloseTo(0.0, 10);
        });

        test('32 fahrenheit → kelvin ≈ 273.15', () => {
            expect(converter.convert(32, 'fahrenheit', 'kelvin')).toBeCloseTo(273.15, 10);
        });

        test('212 fahrenheit → celsius ≈ 100.0', () => {
            expect(converter.convert(212, 'fahrenheit', 'celsius')).toBeCloseTo(100.0, 10);
        });

        test('212 fahrenheit → kelvin ≈ 373.15', () => {
            expect(converter.convert(212, 'fahrenheit', 'kelvin')).toBeCloseTo(373.15, 10);
        });

        test('68 fahrenheit → celsius ≈ 20.0', () => {
            expect(converter.convert(68, 'fahrenheit', 'celsius')).toBeCloseTo(20.0, 10);
        });

        test('98.6 fahrenheit → celsius ≈ 37.0', () => {
            expect(converter.convert(98.6, 'fahrenheit', 'celsius')).toBeCloseTo(37.0, 1);
        });

        test('-40 fahrenheit → celsius ≈ -40.0', () => {
            expect(converter.convert(-40, 'fahrenheit', 'celsius')).toBeCloseTo(-40.0, 10);
        });

        test('32 fahrenheit → reaumur ≈ 0.0', () => {
            expect(converter.convert(32, 'fahrenheit', 'reaumur')).toBeCloseTo(0.0, 10);
        });
    });

    // Testes de conversão Kelvin ↔ outras unidades
    describe('Conversões a partir de Kelvin', () => {
        test('273.15 kelvin → celsius ≈ 0.0', () => {
            expect(converter.convert(273.15, 'kelvin', 'celsius')).toBeCloseTo(0.0, 10);
        });

        test('273.15 kelvin → fahrenheit ≈ 32.0', () => {
            expect(converter.convert(273.15, 'kelvin', 'fahrenheit')).toBeCloseTo(32.0, 10);
        });

        test('373.15 kelvin → celsius ≈ 100.0', () => {
            expect(converter.convert(373.15, 'kelvin', 'celsius')).toBeCloseTo(100.0, 10);
        });

        test('373.15 kelvin → fahrenheit ≈ 212.0', () => {
            expect(converter.convert(373.15, 'kelvin', 'fahrenheit')).toBeCloseTo(212.0, 10);
        });

        test('0 kelvin → celsius ≈ -273.15', () => {
            expect(converter.convert(0, 'kelvin', 'celsius')).toBeCloseTo(-273.15, 10);
        });

        test('0 kelvin → fahrenheit ≈ -459.67', () => {
            expect(converter.convert(0, 'kelvin', 'fahrenheit')).toBeCloseTo(-459.67, 2);
        });

        test('273.15 kelvin → rankine ≈ 491.67', () => {
            expect(converter.convert(273.15, 'kelvin', 'rankine')).toBeCloseTo(491.67, 2);
        });

        test('273.15 kelvin → reaumur ≈ 0.0', () => {
            expect(converter.convert(273.15, 'kelvin', 'reaumur')).toBeCloseTo(0.0, 10);
        });
    });

    // Testes de conversão Rankine ↔ outras unidades
    describe('Conversões a partir de Rankine', () => {
        test('491.67 rankine → celsius ≈ 0.0', () => {
            expect(converter.convert(491.67, 'rankine', 'celsius')).toBeCloseTo(0.0, 1);
        });

        test('491.67 rankine → fahrenheit ≈ 32.0', () => {
            expect(converter.convert(491.67, 'rankine', 'fahrenheit')).toBeCloseTo(32.0, 1);
        });

        test('491.67 rankine → kelvin ≈ 273.15', () => {
            expect(converter.convert(491.67, 'rankine', 'kelvin')).toBeCloseTo(273.15, 2);
        });

        test('671.67 rankine → celsius ≈ 100.0', () => {
            expect(converter.convert(671.67, 'rankine', 'celsius')).toBeCloseTo(100.0, 1);
        });

        test('0 rankine → kelvin ≈ 0.0', () => {
            expect(converter.convert(0, 'rankine', 'kelvin')).toBeCloseTo(0.0, 10);
        });

        test('0 rankine → celsius ≈ -273.15', () => {
            expect(converter.convert(0, 'rankine', 'celsius')).toBeCloseTo(-273.15, 1);
        });
    });

    // Testes de conversão Réaumur ↔ outras unidades
    describe('Conversões a partir de Réaumur', () => {
        test('0 reaumur → celsius ≈ 0.0', () => {
            expect(converter.convert(0, 'reaumur', 'celsius')).toBeCloseTo(0.0, 10);
        });

        test('0 reaumur → kelvin ≈ 273.15', () => {
            expect(converter.convert(0, 'reaumur', 'kelvin')).toBeCloseTo(273.15, 10);
        });

        test('0 reaumur → fahrenheit ≈ 32.0', () => {
            expect(converter.convert(0, 'reaumur', 'fahrenheit')).toBeCloseTo(32.0, 10);
        });

        test('80 reaumur → celsius ≈ 100.0', () => {
            expect(converter.convert(80, 'reaumur', 'celsius')).toBeCloseTo(100.0, 10);
        });

        test('80 reaumur → fahrenheit ≈ 212.0', () => {
            expect(converter.convert(80, 'reaumur', 'fahrenheit')).toBeCloseTo(212.0, 10);
        });

        test('20 reaumur → celsius ≈ 25.0', () => {
            expect(converter.convert(20, 'reaumur', 'celsius')).toBeCloseTo(25.0, 10);
        });

        test('-32 reaumur → celsius ≈ -40.0', () => {
            expect(converter.convert(-32, 'reaumur', 'celsius')).toBeCloseTo(-40.0, 10);
        });
    });

    // Testes de pontos de referência importantes
    describe('Pontos de referência de temperatura', () => {
        test('Ponto de congelamento da água: 0°C = 32°F = 273.15K', () => {
            expect(converter.convert(0, 'celsius', 'fahrenheit')).toBeCloseTo(32.0, 10);
            expect(converter.convert(0, 'celsius', 'kelvin')).toBeCloseTo(273.15, 10);
            expect(converter.convert(32, 'fahrenheit', 'celsius')).toBeCloseTo(0.0, 10);
            expect(converter.convert(273.15, 'kelvin', 'celsius')).toBeCloseTo(0.0, 10);
        });

        test('Ponto de ebulição da água: 100°C = 212°F = 373.15K', () => {
            expect(converter.convert(100, 'celsius', 'fahrenheit')).toBeCloseTo(212.0, 10);
            expect(converter.convert(100, 'celsius', 'kelvin')).toBeCloseTo(373.15, 10);
            expect(converter.convert(212, 'fahrenheit', 'celsius')).toBeCloseTo(100.0, 10);
            expect(converter.convert(373.15, 'kelvin', 'celsius')).toBeCloseTo(100.0, 10);
        });

        test('Zero absoluto: 0K = -273.15°C = -459.67°F', () => {
            expect(converter.convert(0, 'kelvin', 'celsius')).toBeCloseTo(-273.15, 10);
            expect(converter.convert(0, 'kelvin', 'fahrenheit')).toBeCloseTo(-459.67, 2);
            expect(converter.convert(-273.15, 'celsius', 'kelvin')).toBeCloseTo(0.0, 10);
            expect(converter.convert(-459.67, 'fahrenheit', 'kelvin')).toBeCloseTo(0.0, 2);
        });

        test('Temperatura corporal: 37°C ≈ 98.6°F', () => {
            expect(converter.convert(37, 'celsius', 'fahrenheit')).toBeCloseTo(98.6, 1);
            expect(converter.convert(98.6, 'fahrenheit', 'celsius')).toBeCloseTo(37.0, 1);
        });

        test('Temperatura ambiente: 20°C = 68°F', () => {
            expect(converter.convert(20, 'celsius', 'fahrenheit')).toBeCloseTo(68.0, 10);
            expect(converter.convert(68, 'fahrenheit', 'celsius')).toBeCloseTo(20.0, 10);
        });
    });

    // Testes de conversões bidirecionais
    describe('Conversões bidirecionais', () => {
        test('Conversão bidirecional: celsius ↔ fahrenheit', () => {
            const celsius = 25;
            const fahrenheit = converter.convert(celsius, 'celsius', 'fahrenheit');
            const celsiusNovamente = converter.convert(fahrenheit, 'fahrenheit', 'celsius');
            expect(celsiusNovamente).toBeCloseTo(celsius, 10);
        });

        test('Conversão bidirecional: kelvin ↔ celsius', () => {
            const kelvin = 300;
            const celsius = converter.convert(kelvin, 'kelvin', 'celsius');
            const kelvinNovamente = converter.convert(celsius, 'celsius', 'kelvin');
            expect(kelvinNovamente).toBeCloseTo(kelvin, 10);
        });

        test('Conversão bidirecional: reaumur ↔ celsius', () => {
            const reaumur = 40;
            const celsius = converter.convert(reaumur, 'reaumur', 'celsius');
            const reaumurNovamente = converter.convert(celsius, 'celsius', 'reaumur');
            expect(reaumurNovamente).toBeCloseTo(reaumur, 10);
        });

        test('Conversão bidirecional: rankine ↔ kelvin', () => {
            const rankine = 500;
            const kelvin = converter.convert(rankine, 'rankine', 'kelvin');
            const rankineNovamente = converter.convert(kelvin, 'kelvin', 'rankine');
            expect(rankineNovamente).toBeCloseTo(rankine, 10);
        });
    });

    // Testes de temperaturas extremas
    describe('Temperaturas extremas', () => {
        test('Temperatura muito baixa: -200°C', () => {
            expect(converter.convert(-200, 'celsius', 'kelvin')).toBeCloseTo(73.15, 10);
            expect(converter.convert(-200, 'celsius', 'fahrenheit')).toBeCloseTo(-328.0, 10);
        });

        test('Temperatura muito alta: 1000°C', () => {
            expect(converter.convert(1000, 'celsius', 'kelvin')).toBeCloseTo(1273.15, 10);
            expect(converter.convert(1000, 'celsius', 'fahrenheit')).toBeCloseTo(1832.0, 10);
        });

        test('Temperatura próxima do zero absoluto: 1K', () => {
            expect(converter.convert(1, 'kelvin', 'celsius')).toBeCloseTo(-272.15, 10);
            expect(converter.convert(1, 'kelvin', 'fahrenheit')).toBeCloseTo(-457.87, 2);
        });
    });

    // Testes de precisão decimal
    describe('Precisão decimal', () => {
        test('Conversão com decimais: 36.5°C → °F', () => {
            expect(converter.convert(36.5, 'celsius', 'fahrenheit')).toBeCloseTo(97.7, 1);
        });

        test('Conversão com decimais: 98.6°F → °C', () => {
            expect(converter.convert(98.6, 'fahrenheit', 'celsius')).toBeCloseTo(37.0, 1);
        });

        test('Conversão com decimais: 310.15K → °C', () => {
            expect(converter.convert(310.15, 'kelvin', 'celsius')).toBeCloseTo(37.0, 2);
        });
    });

    // Testes de conversões em cadeia
    describe('Conversões em cadeia', () => {
        test('Cadeia de conversões mantém valor original', () => {
            const valorInicial = 50;
            let resultado = valorInicial;

            // celsius → fahrenheit → kelvin → rankine → reaumur → celsius
            resultado = converter.convert(resultado, 'celsius', 'fahrenheit');
            resultado = converter.convert(resultado, 'fahrenheit', 'kelvin');
            resultado = converter.convert(resultado, 'kelvin', 'rankine');
            resultado = converter.convert(resultado, 'rankine', 'kelvin');
            resultado = converter.convert(resultado, 'kelvin', 'reaumur');
            resultado = converter.convert(resultado, 'reaumur', 'celsius');

            expect(resultado).toBeCloseTo(valorInicial, 8);
        });

        test('Múltiplas conversões Celsius-Fahrenheit', () => {
            let temperatura = 0;

            // 0°C → °F → °C → °F → °C
            temperatura = converter.convert(temperatura, 'celsius', 'fahrenheit'); // 32°F
            temperatura = converter.convert(temperatura, 'fahrenheit', 'celsius'); // 0°C
            temperatura = converter.convert(temperatura, 'celsius', 'fahrenheit'); // 32°F
            temperatura = converter.convert(temperatura, 'fahrenheit', 'celsius'); // 0°C

            expect(temperatura).toBeCloseTo(0.0, 10);
        });
    });

    // Testes de erro - casos inválidos
    describe('Tratamento de erros', () => {
        test('Deve lançar erro para unidade de origem inválida', () => {
            expect(() => {
                converter.convert(100, 'invalid_unit', 'celsius');
            }).toThrow('Unidade de temperatura não encontrada');
        });

        test('Deve lançar erro para unidade de destino inválida', () => {
            expect(() => {
                converter.convert(100, 'celsius', 'invalid_unit');
            }).toThrow('Unidade de temperatura não encontrada');
        });

        test('Deve lançar erro para ambas as unidades inválidas', () => {
            expect(() => {
                converter.convert(100, 'invalid_from', 'invalid_to');
            }).toThrow('Unidade de temperatura não encontrada');
        });
    });
});