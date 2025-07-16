import { UnitConverterFactory } from '../../unit.converter.factory';


const factory = new UnitConverterFactory();
const converter = factory.createService('pressure');

describe('Conversão entre unidades de pressão', () => {
    // Testes de conversão para a mesma unidade
    describe('Conversões para a mesma unidade', () => {
        test('1 pascal → pascal ≈ 1.0', () => {
            expect(converter.convert(1, 'pascal', 'pascal')).toBeCloseTo(1.0, 10);
        });

        test('1 bar → bar ≈ 1.0', () => {
            expect(converter.convert(1, 'bar', 'bar')).toBeCloseTo(1.0, 10);
        });

        test('1 psi → psi ≈ 1.0', () => {
            expect(converter.convert(1, 'psi', 'psi')).toBeCloseTo(1.0, 10);
        });
    });

    // Conversões para a unidade base (Pascal)
    describe('Conversões para Pascal', () => {
        test('1 quilopascal → pascal = 1000', () => {
            expect(converter.convert(1, 'quilopascal', 'pascal')).toBeCloseTo(1000, 10);
        });

        test('1 bar → pascal = 100000', () => {
            expect(converter.convert(1, 'bar', 'pascal')).toBeCloseTo(100000, 10);
        });

        test('1 atmosfera → pascal = 101325', () => {
            expect(converter.convert(1, 'atmosfera', 'pascal')).toBeCloseTo(101325, 10);
        });

        test('1 mmHg → pascal ≈ 133.322387415', () => {
            expect(converter.convert(1, 'milimetro-de-mercurio', 'pascal')).toBeCloseTo(133.322387415, 9);
        });

        test('1 psi → pascal ≈ 6894.76', () => {
            expect(converter.convert(1, 'psi', 'pascal')).toBeCloseTo(6894.76, 2);
        });
    });

    // Conversões da unidade base para outras
    describe('Conversões a partir do Pascal', () => {
        test('1000 pascal → quilopascal = 1', () => {
            expect(converter.convert(1000, 'pascal', 'quilopascal')).toBeCloseTo(1, 10);
        });

        test('100000 pascal → bar = 1', () => {
            expect(converter.convert(100000, 'pascal', 'bar')).toBeCloseTo(1, 10);
        });

        test('101325 pascal → atmosfera = 1', () => {
            expect(converter.convert(101325, 'pascal', 'atmosfera')).toBeCloseTo(1, 10);
        });

        test('133.322387415 pascal → mmHg = 1', () => {
            expect(converter.convert(133.322387415, 'pascal', 'milimetro-de-mercurio')).toBeCloseTo(1, 9);
        });

        test('6894.76 pascal → psi = 1', () => {
            expect(converter.convert(6894.76, 'pascal', 'psi')).toBeCloseTo(1, 2);
        });
    });

    // Casos típicos e valores variados
    describe('Cenários típicos e diversos', () => {
        test('2 bar → atmosfera ≈ 1.9738465334320257', () => {
            expect(converter.convert(2, 'bar', 'atmosfera')).toBeCloseTo(1.9738465334320257, 6);
        });

        test('760 mmHg → atmosfera = 1', () => {
            expect(converter.convert(760, 'milimetro-de-mercurio', 'atmosfera')).toBeCloseTo(1, 4);
        });

        test('14.7 psi → atmosfera ≈ 1', () => {
            expect(converter.convert(14.7, 'psi', 'atmosfera')).toBeCloseTo(1, 1);
        });

        test('500000 pascal → bar = 5', () => {
            expect(converter.convert(500000, 'pascal', 'bar')).toBeCloseTo(5, 10);
        });

        test('0.5 bar → quilopascal = 50', () => {
            expect(converter.convert(0.5, 'bar', 'quilopascal')).toBeCloseTo(50, 10);
        });
    });

    // Testes de precisão e round-trip
    describe('Conversões de ida e volta', () => {
        test('psi → pascal → psi', () => {
            const original = 25;
            const converted = converter.convert(original, 'psi', 'pascal');
            const back = converter.convert(converted, 'pascal', 'psi');
            expect(back).toBeCloseTo(original, 6);
        });

        test('bar → pascal → bar', () => {
            const original = 3.2;
            const converted = converter.convert(original, 'bar', 'pascal');
            const back = converter.convert(converted, 'pascal', 'bar');
            expect(back).toBeCloseTo(original, 8);
        });

        test('milimetro-de-mercurio → pascal → milimetro-de-mercurio', () => {
            const original = 120;
            const converted = converter.convert(original, 'milimetro-de-mercurio', 'pascal');
            const back = converter.convert(converted, 'pascal', 'milimetro-de-mercurio');
            expect(back).toBeCloseTo(original, 8);
        });
    });

    // Casos extremos
    describe('Testes extremos e limites operacionais', () => {
        test('0 pascal → qualquer unidade = 0', () => {
            expect(converter.convert(0, 'pascal', 'psi')).toBe(0);
            expect(converter.convert(0, 'pascal', 'bar')).toBe(0);
        });

        test('Valor muito grande → psi', () => {
            expect(converter.convert(10000000, 'pascal', 'psi')).toBeCloseTo(1450.377, 2);
        });

        test('Valor muito pequeno → atmosfera', () => {
            expect(converter.convert(0.001, 'pascal', 'atmosfera')).toBeCloseTo(9.8692e-9, 10);
        });
    });
});