import { UnitConverterFactory } from '../../unit.converter.factory';

const factory = new UnitConverterFactory();
const converter = factory.createService('time');

describe('Conversão completa entre unidades de tempo', () => {

    // Testes de conversão para a mesma unidade
    describe('Conversões para a mesma unidade', () => {
        test('1 segundo → segundo = 1.0', () => {
            expect(converter.convert(1, 'segundo', 'segundo')).toBeCloseTo(1.0, 10);
        });

        test('1 minuto → minuto = 1.0', () => {
            expect(converter.convert(1, 'minuto', 'minuto')).toBeCloseTo(1.0, 10);
        });

        test('1 hora → hora = 1.0', () => {
            expect(converter.convert(1, 'hora', 'hora')).toBeCloseTo(1.0, 10);
        });

        test('1 dia → dia = 1.0', () => {
            expect(converter.convert(1, 'dia', 'dia')).toBeCloseTo(1.0, 10);
        });
    });

    // Conversões para a unidade base (segundo)
    describe('Conversões para a unidade base: segundo', () => {
        test('1 picossegundo → segundo = 1e-12', () => {
            expect(converter.convert(1, 'picossegundo', 'segundo')).toBeCloseTo(1e-12, 20);
        });

        test('1 microssegundo → segundo = 1e-6', () => {
            expect(converter.convert(1, 'microssegundo', 'segundo')).toBeCloseTo(1e-6, 15);
        });

        test('1 milissegundo → segundo = 0.001', () => {
            expect(converter.convert(1, 'milissegundo', 'segundo')).toBeCloseTo(0.001, 10);
        });

        test('1 minuto → segundo = 60', () => {
            expect(converter.convert(1, 'minuto', 'segundo')).toBeCloseTo(60, 10);
        });

        test('1 hora → segundo = 3600', () => {
            expect(converter.convert(1, 'hora', 'segundo')).toBeCloseTo(3600, 10);
        });

        test('1 dia → segundo = 86400', () => {
            expect(converter.convert(1, 'dia', 'segundo')).toBeCloseTo(86400, 10);
        });

        test('1 semana → segundo = 604800', () => {
            expect(converter.convert(1, 'semana', 'segundo')).toBeCloseTo(604800, 10);
        });

        test('1 ano → segundo = 31536000', () => {
            expect(converter.convert(1, 'ano', 'segundo')).toBeCloseTo(31536000, 10);
        });
    });

    // Conversões inversas (segundo → outras unidades)
    describe('Conversões inversas a partir do segundo', () => {
        test('1 segundo → milissegundo = 1000', () => {
            expect(converter.convert(1, 'segundo', 'milissegundo')).toBeCloseTo(1000, 10);
        });

        test('1 segundo → microssegundo = 1000000', () => {
            expect(converter.convert(1, 'segundo', 'microssegundo')).toBeCloseTo(1000000, 10);
        });

        test('60 segundos → minuto = 1', () => {
            expect(converter.convert(60, 'segundo', 'minuto')).toBeCloseTo(1, 10);
        });

        test('3600 segundos → hora = 1', () => {
            expect(converter.convert(3600, 'segundo', 'hora')).toBeCloseTo(1, 10);
        });

        test('86400 segundos → dia = 1', () => {
            expect(converter.convert(86400, 'segundo', 'dia')).toBeCloseTo(1, 10);
        });

        test('604800 segundos → semana = 1', () => {
            expect(converter.convert(604800, 'segundo', 'semana')).toBeCloseTo(1, 10);
        });
    });

    // Conversões entre unidades (sem passar pelo segundo diretamente)
    describe('Conversões entre unidades de tempo', () => {
        test('1 hora → minuto = 60', () => {
            expect(converter.convert(1, 'hora', 'minuto')).toBeCloseTo(60, 10);
        });

        test('1 dia → hora = 24', () => {
            expect(converter.convert(1, 'dia', 'hora')).toBeCloseTo(24, 10);
        });

        test('1 semana → dia = 7', () => {
            expect(converter.convert(1, 'semana', 'dia')).toBeCloseTo(7, 10);
        });

        test('1 ano → dia = 365', () => {
            expect(converter.convert(1, 'ano', 'dia')).toBeCloseTo(365, 10);
        });

        test('1 ano → semana ≈ 52.14', () => {
            expect(converter.convert(1, 'ano', 'semana')).toBeCloseTo(52.142857, 5);
        });

        test('1 dia → milissegundo = 86400000', () => {
            expect(converter.convert(1, 'dia', 'milissegundo')).toBeCloseTo(86400000, 10);
        });

        test('1 hora → milissegundo = 3600000', () => {
            expect(converter.convert(1, 'hora', 'milissegundo')).toBeCloseTo(3600000, 10);
        });
    });

    // Conversões com valores decimais
    describe('Conversões com valores decimais', () => {
        test('0.5 hora → minuto = 30', () => {
            expect(converter.convert(0.5, 'hora', 'minuto')).toBeCloseTo(30, 10);
        });

        test('1.5 dias → horas = 36', () => {
            expect(converter.convert(1.5, 'dia', 'hora')).toBeCloseTo(36, 10);
        });

        test('2.5 minutos → segundos = 150', () => {
            expect(converter.convert(2.5, 'minuto', 'segundo')).toBeCloseTo(150, 10);
        });
    });

    // Casos extremos
    describe('Casos extremos', () => {
        test('0 segundo → minuto = 0', () => {
            expect(converter.convert(0, 'segundo', 'minuto')).toBe(0);
        });

        test('1000 milissegundos → segundo = 1', () => {
            expect(converter.convert(1000, 'milissegundo', 'segundo')).toBeCloseTo(1, 10);
        });

        test('1000000 microssegundos → segundo = 1', () => {
            expect(converter.convert(1000000, 'microssegundo', 'segundo')).toBeCloseTo(1, 10);
        });
    });

    // Testes de precisão (ida e volta)
    describe('Testes de precisão - conversão ida e volta', () => {
        test('segundo → minuto → segundo', () => {
            const original = 120;
            const converted = converter.convert(original, 'segundo', 'minuto');
            const backConverted = converter.convert(converted, 'minuto', 'segundo');
            expect(backConverted).toBeCloseTo(original, 8);
        });

        test('hora → dia → hora', () => {
            const original = 48;
            const converted = converter.convert(original, 'hora', 'dia');
            const backConverted = converter.convert(converted, 'dia', 'hora');
            expect(backConverted).toBeCloseTo(original, 8);
        });

        test('milissegundo → microssegundo → milissegundo', () => {
            const original = 500;
            const converted = converter.convert(original, 'milissegundo', 'microssegundo');
            const backConverted = converter.convert(converted, 'microssegundo', 'milissegundo');
            expect(backConverted).toBeCloseTo(original, 8);
        });
    });
});
