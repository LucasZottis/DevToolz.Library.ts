import { ConverterFactory } from '../../factory/converter-factory';

const factory = new ConverterFactory();
const converter = factory.getConverter('volume');

describe('Conversão completa entre unidades de volume', () => {

    // Testes de conversão para a mesma unidade
    describe('Conversões para a mesma unidade', () => {
        test('1000 mililitro → mililitro ≈ 1000.0', () => {
            expect(converter.convert(1000, 'mililitro', 'mililitro')).toBeCloseTo(1000.0, 10);
        });

        test('5 litro → litro ≈ 5.0', () => {
            expect(converter.convert(5, 'litro', 'litro')).toBeCloseTo(5.0, 10);
        });

        test('2.5 metro-cubico → metro-cubico ≈ 2.5', () => {
            expect(converter.convert(2.5, 'metro-cubico', 'metro-cubico')).toBeCloseTo(2.5, 10);
        });
    });

    // Testes de conversão métrica básica
    describe('Conversões métricas básicas', () => {
        test('1000 mililitro → litro ≈ 1.0', () => {
            expect(converter.convert(1000, 'mililitro', 'litro')).toBeCloseTo(1.0, 10);
        });

        test('1 litro → mililitro ≈ 1000.0', () => {
            expect(converter.convert(1, 'litro', 'mililitro')).toBeCloseTo(1000.0, 10);
        });

        test('10 centilitro → mililitro ≈ 100.0', () => {
            expect(converter.convert(10, 'centilitro', 'mililitro')).toBeCloseTo(100.0, 10);
        });

        test('100 mililitro → decilitro ≈ 1.0', () => {
            expect(converter.convert(100, 'mililitro', 'decilitro')).toBeCloseTo(1.0, 10);
        });

        test('1000 litro → hectolitro ≈ 10.0', () => {
            expect(converter.convert(1000, 'litro', 'hectolitro')).toBeCloseTo(10.0, 10);
        });

        test('1 hectolitro → litro ≈ 100.0', () => {
            expect(converter.convert(1, 'hectolitro', 'litro')).toBeCloseTo(100.0, 10);
        });

        test('100 centilitro → litro ≈ 1.0', () => {
            expect(converter.convert(100, 'centilitro', 'litro')).toBeCloseTo(1.0, 10);
        });

        test('10 decilitro → litro ≈ 1.0', () => {
            expect(converter.convert(10, 'decilitro', 'litro')).toBeCloseTo(1.0, 10);
        });
    });

    // Testes de conversão cúbicas métricas
    describe('Conversões de unidades cúbicas métricas', () => {
        test('1 mililitro → milimetro-cubico ≈ 1000.0', () => {
            expect(converter.convert(1, 'mililitro', 'milimetro-cubico')).toBeCloseTo(1000.0, 10);
        });

        test('1 mililitro → centimetro-cubico ≈ 1.0', () => {
            expect(converter.convert(1, 'mililitro', 'centimetro-cubico')).toBeCloseTo(1.0, 10);
        });

        test('1 litro → decimetro-cubico ≈ 1.0', () => {
            expect(converter.convert(1, 'litro', 'decimetro-cubico')).toBeCloseTo(1.0, 10);
        });

        test('1 metro-cubico → litro ≈ 1000.0', () => {
            expect(converter.convert(1, 'metro-cubico', 'litro')).toBeCloseTo(1000.0, 10);
        });

        test('1000 centimetro-cubico → litro ≈ 1.0', () => {
            expect(converter.convert(1000, 'centimetro-cubico', 'litro')).toBeCloseTo(1.0, 10);
        });

        test('1 decimetro-cubico → mililitro ≈ 1000.0', () => {
            expect(converter.convert(1, 'decimetro-cubico', 'mililitro')).toBeCloseTo(1000.0, 10);
        });
    });

    // Testes de conversão de medidas culinárias americanas
    describe('Conversões de medidas culinárias americanas', () => {
        test('3 colher-cha-eua → colher-sopa-eua ≈ 1.0', () => {
            expect(converter.convert(3, 'colher-cha-eua', 'colher-sopa-eua')).toBeCloseTo(1.0, 8);
        });

        test('2 colher-sopa-eua → onca-fluida-eua ≈ 1.0', () => {
            expect(converter.convert(2, 'colher-sopa-eua', 'onca-fluida-eua')).toBeCloseTo(1.0, 8);
        });

        test('8 onca-fluida-eua → xicara-eua ≈ 1.0', () => {
            expect(converter.convert(8, 'onca-fluida-eua', 'xicara-eua')).toBeCloseTo(1.0, 8);
        });

        test('2 xicara-eua → pinta-eua ≈ 1.0', () => {
            expect(converter.convert(2, 'xicara-eua', 'pinta-eua')).toBeCloseTo(1.0, 8);
        });

        test('2 pinta-eua → quarto-eua ≈ 1.0', () => {
            expect(converter.convert(2, 'pinta-eua', 'quarto-eua')).toBeCloseTo(1.0, 8);
        });

        test('4 quarto-eua → galao-liquido-eua ≈ 1.0', () => {
            expect(converter.convert(4, 'quarto-eua', 'galao-liquido-eua')).toBeCloseTo(1.0, 8);
        });

        test('1 colher-cha-eua → mililitro ≈ 4.929', () => {
            expect(converter.convert(1, 'colher-cha-eua', 'mililitro')).toBeCloseTo(4.92892159375, 8);
        });

        test('1 colher-sopa-eua → mililitro ≈ 14.787', () => {
            expect(converter.convert(1, 'colher-sopa-eua', 'mililitro')).toBeCloseTo(14.78676478125, 8);
        });

        test('1 xicara-eua → mililitro ≈ 236.588', () => {
            expect(converter.convert(1, 'xicara-eua', 'mililitro')).toBeCloseTo(236.5882365, 6);
        });

        test('1 galao-liquido-eua → litro ≈ 3.785', () => {
            expect(converter.convert(1, 'galao-liquido-eua', 'litro')).toBeCloseTo(3.785411784, 8);
        });
    });

    // Testes de conversão de medidas culinárias imperiais
    describe('Conversões de medidas culinárias imperiais', () => {
        test('3 colher-cha-imperial → colher-sopa-imperial ≈ 1.0', () => {
            expect(converter.convert(3, 'colher-cha-imperial', 'colher-sopa-imperial')).toBeCloseTo(0.9999983106395919, 8);
        });

        test('20 onca-fluida-imperial → pinta-imperial ≈ 1.0', () => {
            expect(converter.convert(20, 'onca-fluida-imperial', 'pinta-imperial')).toBeCloseTo(1.0, 8);
        });

        test('2 pinta-imperial → quarto-imperial ≈ 1.0', () => {
            expect(converter.convert(2, 'pinta-imperial', 'quarto-imperial')).toBeCloseTo(1.0, 8);
        });

        test('4 quarto-imperial → galao-imperial ≈ 1.0', () => {
            expect(converter.convert(4, 'quarto-imperial', 'galao-imperial')).toBeCloseTo(1.0, 8);
        });

        test('1 colher-cha-imperial → mililitro ≈ 5.919', () => {
            expect(converter.convert(1, 'colher-cha-imperial', 'mililitro')).toBeCloseTo(5.91939, 5);
        });

        test('1 onca-fluida-imperial → mililitro ≈ 28.413', () => {
            expect(converter.convert(1, 'onca-fluida-imperial', 'mililitro')).toBeCloseTo(28.4130625, 7);
        });

        test('1 galao-imperial → litro ≈ 4.546', () => {
            expect(converter.convert(1, 'galao-imperial', 'litro')).toBeCloseTo(4.54609, 5);
        });
    });

    // Testes de conversão de unidades cúbicas imperiais
    describe('Conversões de unidades cúbicas imperiais', () => {
        test('1 polegada-cubica → mililitro ≈ 16.387', () => {
            expect(converter.convert(1, 'polegada-cubica', 'mililitro')).toBeCloseTo(16.387064, 6);
        });

        test('1728 polegada-cubica → pe-cubico ≈ 1.0', () => {
            expect(converter.convert(1728, 'polegada-cubica', 'pe-cubico')).toBeCloseTo(1.0, 6);
        });

        test('27 pe-cubico → jarda-cubica ≈ 1.0', () => {
            expect(converter.convert(27, 'pe-cubico', 'jarda-cubica')).toBeCloseTo(1.0, 6);
        });

        test('1 pe-cubico → litro ≈ 28.317', () => {
            expect(converter.convert(1, 'pe-cubico', 'litro')).toBeCloseTo(28.316846592, 6);
        });

        test('1 jarda-cubica → metro-cubico ≈ 0.765', () => {
            expect(converter.convert(1, 'jarda-cubica', 'metro-cubico')).toBeCloseTo(0.764554857984, 6);
        });
    });

    // Testes de comparação entre sistemas americano e imperial
    describe('Comparações entre sistemas americano e imperial', () => {
        test('1 galao-liquido-eua vs 1 galao-imperial', () => {
            const galEUA = converter.convert(1, 'galao-liquido-eua', 'litro');
            const galImperial = converter.convert(1, 'galao-imperial', 'litro');
            expect(galImperial).toBeGreaterThan(galEUA);
            expect(galImperial / galEUA).toBeCloseTo(1.201, 2); // Imperial é ~20% maior
        });

        test('1 pinta-eua vs 1 pinta-imperial', () => {
            const pintaEUA = converter.convert(1, 'pinta-eua', 'mililitro');
            const pintaImperial = converter.convert(1, 'pinta-imperial', 'mililitro');
            expect(pintaImperial).toBeGreaterThan(pintaEUA);
            expect(pintaImperial / pintaEUA).toBeCloseTo(1.201, 2);
        });

        test('1 onca-fluida-eua vs 1 onca-fluida-imperial', () => {
            const oncaEUA = converter.convert(1, 'onca-fluida-eua', 'mililitro');
            const oncaImperial = converter.convert(1, 'onca-fluida-imperial', 'mililitro');
            expect(oncaEUA).toBeGreaterThan(oncaImperial);
            expect(oncaEUA / oncaImperial).toBeCloseTo(1.04, 2);
        });
    });

    // Testes de conversões para culinária
    describe('Conversões práticas para culinária', () => {
        test('1 xicara-eua → centilitro ≈ 23.659', () => {
            expect(converter.convert(1, 'xicara-eua', 'centilitro')).toBeCloseTo(23.659, 2);
        });

        test('250 mililitro → xicara-eua ≈ 1.057', () => {
            expect(converter.convert(250, 'mililitro', 'xicara-eua')).toBeCloseTo(1.057, 2);
        });

        test('1 colher-sopa-eua → colher-cha-eua ≈ 3.0', () => {
            expect(converter.convert(1, 'colher-sopa-eua', 'colher-cha-eua')).toBeCloseTo(3.0, 8);
        });

        test('15 mililitro → colher-sopa-eua ≈ 1.014', () => {
            expect(converter.convert(15, 'mililitro', 'colher-sopa-eua')).toBeCloseTo(1.014, 2);
        });

        test('5 mililitro → colher-cha-eua ≈ 1.014', () => {
            expect(converter.convert(5, 'mililitro', 'colher-cha-eua')).toBeCloseTo(1.014, 2);
        });
    });

    // Testes de volumes grandes
    describe('Conversões de volumes grandes', () => {
        test('1 metro-cubico → galao-liquido-eua ≈ 264.172', () => {
            expect(converter.convert(1, 'metro-cubico', 'galao-liquido-eua')).toBeCloseTo(264.172, 2);
        });

        test('1 metro-cubico → galao-imperial ≈ 219.969', () => {
            expect(converter.convert(1, 'metro-cubico', 'galao-imperial')).toBeCloseTo(219.969, 2);
        });

        test('1 acre-pe-cubico → metro-cubico ≈ 1233481.837', () => {
            expect(converter.convert(1, 'acre-pe-cubico', 'metro-cubico')).toBeCloseTo(1233.4818365478402, 0);
        });

        test('1 hectolitro → metro-cubico ≈ 0.1', () => {
            expect(converter.convert(1, 'hectolitro', 'metro-cubico')).toBeCloseTo(0.1, 10);
        });
    });

    // Testes de conversões bidirecionais
    describe('Conversões bidirecionais', () => {
        test('Conversão bidirecional: litro ↔ galao-liquido-eua', () => {
            const litros = 10;
            const galoesEUA = converter.convert(litros, 'litro', 'galao-liquido-eua');
            const litrosNovamente = converter.convert(galoesEUA, 'galao-liquido-eua', 'litro');
            expect(litrosNovamente).toBeCloseTo(litros, 8);
        });

        test('Conversão bidirecional: mililitro ↔ onca-fluida-eua', () => {
            const mililitros = 100;
            const oncasEUA = converter.convert(mililitros, 'mililitro', 'onca-fluida-eua');
            const mililitrosNovamente = converter.convert(oncasEUA, 'onca-fluida-eua', 'mililitro');
            expect(mililitrosNovamente).toBeCloseTo(mililitros, 8);
        });

        test('Conversão bidirecional: metro-cubico ↔ pe-cubico', () => {
            const metrosCubicos = 2;
            const pesCubicos = converter.convert(metrosCubicos, 'metro-cubico', 'pe-cubico');
            const metrosCubicosNovamente = converter.convert(pesCubicos, 'pe-cubico', 'metro-cubico');
            expect(metrosCubicosNovamente).toBeCloseTo(metrosCubicos, 6);
        });
    });

    // Testes com valores decimais
    describe('Conversões com valores decimais', () => {
        test('0.5 litro → mililitro ≈ 500.0', () => {
            expect(converter.convert(0.5, 'litro', 'mililitro')).toBeCloseTo(500.0, 10);
        });

        test('2.5 xicara-eua → mililitro ≈ 591.471', () => {
            expect(converter.convert(2.5, 'xicara-eua', 'mililitro')).toBeCloseTo(591.471, 2);
        });

        test('0.25 galao-liquido-eua → litro ≈ 0.946', () => {
            expect(converter.convert(0.25, 'galao-liquido-eua', 'litro')).toBeCloseTo(0.946, 2);
        });

        test('1.5 colher-sopa-eua → mililitro ≈ 22.180', () => {
            expect(converter.convert(1.5, 'colher-sopa-eua', 'mililitro')).toBeCloseTo(22.180, 2);
        });
    });

    // Testes de casos extremos
    describe('Casos extremos', () => {
        test('0 volume → qualquer unidade ≈ 0.0', () => {
            expect(converter.convert(0, 'litro', 'mililitro')).toBeCloseTo(0.0, 10);
            expect(converter.convert(0, 'galao-liquido-eua', 'litro')).toBeCloseTo(0.0, 10);
            expect(converter.convert(0, 'metro-cubico', 'pe-cubico')).toBeCloseTo(0.0, 10);
        });

        test('Conversões muito pequenas', () => {
            expect(converter.convert(0.001, 'mililitro', 'milimetro-cubico')).toBeCloseTo(1, 10);
            expect(converter.convert(1, 'mililitro', 'centimetro-cubico')).toBeCloseTo(1, 10);
        });

        test('Conversões muito grandes', () => {
            expect(converter.convert(1000000, 'litro', 'metro-cubico')).toBeCloseTo(1000.0, 5);
            expect(converter.convert(1000000, 'mililitro', 'hectolitro')).toBeCloseTo(10.0, 5);
        });
    });

    // Testes de conversões em cadeia
    describe('Conversões em cadeia', () => {
        test('Múltiplas conversões mantêm precisão', () => {
            const valorInicial = 100;
            let resultado = valorInicial;

            // mililitro → litro → galao-eua → xicara-eua → onca-eua → colher-sopa-eua → mililitro
            resultado = converter.convert(resultado, 'mililitro', 'litro');
            resultado = converter.convert(resultado, 'litro', 'galao-liquido-eua');
            resultado = converter.convert(resultado, 'galao-liquido-eua', 'xicara-eua');
            resultado = converter.convert(resultado, 'xicara-eua', 'onca-fluida-eua');
            resultado = converter.convert(resultado, 'onca-fluida-eua', 'colher-sopa-eua');
            resultado = converter.convert(resultado, 'colher-sopa-eua', 'mililitro');

            expect(resultado).toBeCloseTo(valorInicial, 6);
        });

        test('Conversão métrica em cadeia', () => {
            const valorInicial = 1;
            let resultado = valorInicial;

            // metro-cubico → litro → mililitro → centimetro-cubico → decimetro-cubico → metro-cubico
            resultado = converter.convert(resultado, 'metro-cubico', 'litro');
            resultado = converter.convert(resultado, 'litro', 'mililitro');
            resultado = converter.convert(resultado, 'mililitro', 'centimetro-cubico');
            resultado = converter.convert(resultado, 'centimetro-cubico', 'decimetro-cubico');
            resultado = converter.convert(resultado, 'decimetro-cubico', 'metro-cubico');

            expect(resultado).toBeCloseTo(valorInicial, 8);
        });
    });

    // Testes de precisão específica
    describe('Testes de precisão específica', () => {
        test('Galão seco vs líquido (EUA)', () => {
            const galaoLiquido = converter.convert(1, 'galao-liquido-eua', 'litro');
            const galaoSeco = converter.convert(1, 'galao-seco-eua', 'litro');
            expect(galaoSeco).toBeGreaterThan(galaoLiquido);
            expect(galaoSeco / galaoLiquido).toBeCloseTo(1.164, 2);
        });

        test('Relação exata entre unidades cúbicas', () => {
            // 1 m³ = 1000 L = 1000000 mL = 1000000 cm³
            expect(converter.convert(1, 'metro-cubico', 'litro')).toBeCloseTo(1000.0, 10);
            expect(converter.convert(1, 'metro-cubico', 'mililitro')).toBeCloseTo(1000000.0, 5);
            expect(converter.convert(1, 'metro-cubico', 'centimetro-cubico')).toBeCloseTo(1000000.0, 5);
        });

        test('Relação entre colheres (EUA)', () => {
            // 1 Tbsp = 3 tsp exatamente
            const colherSopa = converter.convert(1, 'colher-sopa-eua', 'mililitro');
            const colherCha = converter.convert(3, 'colher-cha-eua', 'mililitro');
            expect(colherSopa).toBeCloseTo(colherCha, 10);
        });
    });
});