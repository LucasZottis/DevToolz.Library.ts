import { TimeDecimalConverter } from './time-decimal.converter';

describe('TimeDecimalConverter', () => {
    let converter: TimeDecimalConverter;

    beforeEach(() => {
        converter = new TimeDecimalConverter();
    });

    describe('paraDecimal', () => {
        test('0 horas, 0 minutos, 0 segundos = 0', () => {
            expect(converter.paraDecimal(0, 0, 0)).toBe(0);
        });

        test('1 hora = 1.0', () => {
            expect(converter.paraDecimal(1, 0, 0)).toBe(1);
        });

        test('1 hora e 30 minutos = 1.5', () => {
            expect(converter.paraDecimal(1, 30, 0)).toBe(1.5);
        });

        test('0 horas e 45 minutos = 0.75', () => {
            expect(converter.paraDecimal(0, 45, 0)).toBe(0.75);
        });

        test('0 horas e 30 minutos = 0.5', () => {
            expect(converter.paraDecimal(0, 30, 0)).toBe(0.5);
        });

        test('0 horas, 0 minutos e 3600 segundos = 1.0', () => {
            expect(converter.paraDecimal(0, 0, 3600)).toBe(1);
        });

        test('0 horas, 0 minutos e 1800 segundos = 0.5', () => {
            expect(converter.paraDecimal(0, 0, 1800)).toBe(0.5);
        });

        test('0 horas, 0 minutos e 30 segundos ≈ 0.00833', () => {
            expect(converter.paraDecimal(0, 0, 30)).toBeCloseTo(30 / 3600, 10);
        });

        test('2 horas e 15 minutos = 2.25', () => {
            expect(converter.paraDecimal(2, 15, 0)).toBe(2.25);
        });

        test('8 horas e 30 minutos = 8.5', () => {
            expect(converter.paraDecimal(8, 30, 0)).toBe(8.5);
        });

        test('1 hora, 30 minutos e 30 segundos ≈ 1.5083', () => {
            expect(converter.paraDecimal(1, 30, 30)).toBeCloseTo(1 + (30 / 60) + (30 / 3600), 10);
        });

        test('24 horas = 24.0', () => {
            expect(converter.paraDecimal(24, 0, 0)).toBe(24);
        });
    });

    describe('paraHora', () => {
        test('0 → "00:00:00"', () => {
            expect(converter.paraHora(0)).toBe('00:00:00');
        });

        test('1.0 → "01:00:00"', () => {
            expect(converter.paraHora(1)).toBe('01:00:00');
        });

        test('1.5 → "01:30:00"', () => {
            expect(converter.paraHora(1.5)).toBe('01:30:00');
        });

        test('0.75 → "00:45:00"', () => {
            expect(converter.paraHora(0.75)).toBe('00:45:00');
        });

        test('0.5 → "00:30:00"', () => {
            expect(converter.paraHora(0.5)).toBe('00:30:00');
        });

        test('2.25 → "02:15:00"', () => {
            expect(converter.paraHora(2.25)).toBe('02:15:00');
        });

        test('8.5 → "08:30:00"', () => {
            expect(converter.paraHora(8.5)).toBe('08:30:00');
        });

        test('24.0 → "24:00:00"', () => {
            expect(converter.paraHora(24)).toBe('24:00:00');
        });

        test('horas devem ter dois dígitos: 9.0 → "09:00:00"', () => {
            expect(converter.paraHora(9)).toBe('09:00:00');
        });

        test('minutos devem ter dois dígitos: 0.1 → "00:06:00"', () => {
            expect(converter.paraHora(0.1)).toBe('00:06:00');
        });
    });

    describe('Conversões de ida e volta', () => {
        test('paraDecimal(1, 30, 0) → paraHora = "01:30:00"', () => {
            const decimal = converter.paraDecimal(1, 30, 0);
            expect(converter.paraHora(decimal)).toBe('01:30:00');
        });

        test('paraDecimal(8, 45, 0) → paraHora = "08:45:00"', () => {
            const decimal = converter.paraDecimal(8, 45, 0);
            expect(converter.paraHora(decimal)).toBe('08:45:00');
        });

        test('paraDecimal(0, 0, 0) → paraHora = "00:00:00"', () => {
            const decimal = converter.paraDecimal(0, 0, 0);
            expect(converter.paraHora(decimal)).toBe('00:00:00');
        });

        test('paraDecimal(12, 0, 0) → paraHora = "12:00:00"', () => {
            const decimal = converter.paraDecimal(12, 0, 0);
            expect(converter.paraHora(decimal)).toBe('12:00:00');
        });

        test('paraDecimal(2, 30, 30) → paraHora = "02:30:30"', () => {
            const decimal = converter.paraDecimal(2, 30, 30);
            expect(converter.paraHora(decimal)).toBe('02:30:30');
        });
    });
});
