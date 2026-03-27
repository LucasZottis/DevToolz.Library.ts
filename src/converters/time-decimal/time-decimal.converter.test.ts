import { TimeDecimalConverter } from './time-decimal.converter';

describe('TimeDecimalConverter', () => {
    let converter: TimeDecimalConverter;

    beforeEach(() => {
        converter = new TimeDecimalConverter();
    });

    describe('toDecimal', () => {
        test('0h 0min 0s → { days: 0, hours: 0, minutes: 0, seconds: 0 }', () => {
            const result = converter.toDecimal(0, 0, 0);
            expect(result.days).toBe(0);
            expect(result.hours).toBe(0);
            expect(result.minutes).toBe(0);
            expect(result.seconds).toBe(0);
        });

        test('1h 0min 0s → { days: ≈0.04167, hours: 1, minutes: 0, seconds: 0 }', () => {
            const result = converter.toDecimal(1, 0, 0);
            expect(result.days).toBeCloseTo(1 / 24, 10);
            expect(result.hours).toBe(1);
            expect(result.minutes).toBe(0);
            expect(result.seconds).toBe(0);
        });

        test('1h 30min 0s → { days: 0.0625, hours: 1.5, minutes: 0.5, seconds: 0 }', () => {
            const result = converter.toDecimal(1, 30, 0);
            expect(result.days).toBeCloseTo(0.0625, 10);
            expect(result.hours).toBe(1.5);
            expect(result.minutes).toBe(0.5);
            expect(result.seconds).toBe(0);
        });

        test('0h 45min 0s → { days: ≈0.03125, hours: 0.75, minutes: 0.75, seconds: 0 }', () => {
            const result = converter.toDecimal(0, 45, 0);
            expect(result.days).toBeCloseTo(0.75 / 24, 10);
            expect(result.hours).toBe(0.75);
            expect(result.minutes).toBe(0.75);
            expect(result.seconds).toBe(0);
        });

        test('0h 30min 0s → { days: ≈0.02083, hours: 0.5, minutes: 0.5, seconds: 0 }', () => {
            const result = converter.toDecimal(0, 30, 0);
            expect(result.days).toBeCloseTo(0.5 / 24, 10);
            expect(result.hours).toBe(0.5);
            expect(result.minutes).toBe(0.5);
            expect(result.seconds).toBe(0);
        });

        test('0h 0min 3600s → { days: ≈0.04167, hours: 1, minutes: 0, seconds: 1 }', () => {
            const result = converter.toDecimal(0, 0, 3600);
            expect(result.days).toBeCloseTo(1 / 24, 10);
            expect(result.hours).toBe(1);
            expect(result.minutes).toBe(0);
            expect(result.seconds).toBe(1);
        });

        test('0h 0min 1800s → { days: ≈0.02083, hours: 0.5, minutes: 0, seconds: 0.5 }', () => {
            const result = converter.toDecimal(0, 0, 1800);
            expect(result.days).toBeCloseTo(0.5 / 24, 10);
            expect(result.hours).toBe(0.5);
            expect(result.minutes).toBe(0);
            expect(result.seconds).toBe(0.5);
        });

        test('0h 0min 30s → { seconds: ≈0.00833 }', () => {
            const result = converter.toDecimal(0, 0, 30);
            expect(result.hours).toBeCloseTo(30 / 3600, 10);
            expect(result.minutes).toBe(0);
            expect(result.seconds).toBeCloseTo(30 / 3600, 10);
        });

        test('2h 15min 0s → { days: ≈0.09375, hours: 2.25, minutes: 0.25, seconds: 0 }', () => {
            const result = converter.toDecimal(2, 15, 0);
            expect(result.days).toBeCloseTo(2.25 / 24, 10);
            expect(result.hours).toBe(2.25);
            expect(result.minutes).toBe(0.25);
            expect(result.seconds).toBe(0);
        });

        test('8h 30min 0s → { days: ≈0.35417, hours: 8.5, minutes: 0.5, seconds: 0 }', () => {
            const result = converter.toDecimal(8, 30, 0);
            expect(result.days).toBeCloseTo(8.5 / 24, 10);
            expect(result.hours).toBe(8.5);
            expect(result.minutes).toBe(0.5);
            expect(result.seconds).toBe(0);
        });

        test('1h 30min 30s → { hours: ≈1.5083, minutes: 0.5, seconds: ≈0.00833 }', () => {
            const result = converter.toDecimal(1, 30, 30);
            const expectedHours = 1 + (30 / 60) + (30 / 3600);
            expect(result.hours).toBeCloseTo(expectedHours, 10);
            expect(result.days).toBeCloseTo(expectedHours / 24, 10);
            expect(result.minutes).toBe(0.5);
            expect(result.seconds).toBeCloseTo(30 / 3600, 10);
        });

        test('24h 0min 0s → { days: 1, hours: 24, minutes: 0, seconds: 0 }', () => {
            const result = converter.toDecimal(24, 0, 0);
            expect(result.days).toBe(1);
            expect(result.hours).toBe(24);
            expect(result.minutes).toBe(0);
            expect(result.seconds).toBe(0);
        });
    });

    describe('toTime', () => {
        test('0 → { days: 0, hours: 0, minutes: 0, seconds: 0 }', () => {
            const result = converter.toTime(0);
            expect(result).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        });

        test('1.0 → { days: 0, hours: 1, minutes: 0, seconds: 0 }', () => {
            const result = converter.toTime(1);
            expect(result).toEqual({ days: 0, hours: 1, minutes: 0, seconds: 0 });
        });

        test('1.5 → { days: 0, hours: 1, minutes: 30, seconds: 0 }', () => {
            const result = converter.toTime(1.5);
            expect(result).toEqual({ days: 0, hours: 1, minutes: 30, seconds: 0 });
        });

        test('0.75 → { days: 0, hours: 0, minutes: 45, seconds: 0 }', () => {
            const result = converter.toTime(0.75);
            expect(result).toEqual({ days: 0, hours: 0, minutes: 45, seconds: 0 });
        });

        test('0.5 → { days: 0, hours: 0, minutes: 30, seconds: 0 }', () => {
            const result = converter.toTime(0.5);
            expect(result).toEqual({ days: 0, hours: 0, minutes: 30, seconds: 0 });
        });

        test('2.25 → { days: 0, hours: 2, minutes: 15, seconds: 0 }', () => {
            const result = converter.toTime(2.25);
            expect(result).toEqual({ days: 0, hours: 2, minutes: 15, seconds: 0 });
        });

        test('8.5 → { days: 0, hours: 8, minutes: 30, seconds: 0 }', () => {
            const result = converter.toTime(8.5);
            expect(result).toEqual({ days: 0, hours: 8, minutes: 30, seconds: 0 });
        });

        test('24.0 → { days: 1, hours: 0, minutes: 0, seconds: 0 }', () => {
            const result = converter.toTime(24);
            expect(result).toEqual({ days: 1, hours: 0, minutes: 0, seconds: 0 });
        });

        test('25.5 → { days: 1, hours: 1, minutes: 30, seconds: 0 }', () => {
            const result = converter.toTime(25.5);
            expect(result).toEqual({ days: 1, hours: 1, minutes: 30, seconds: 0 });
        });

        test('1.50833... → { days: 0, hours: 1, minutes: 30, seconds: 30 }', () => {
            const decimal = 1 + (30 / 60) + (30 / 3600);
            const result = converter.toTime(decimal);
            expect(result.days).toBe(0);
            expect(result.hours).toBe(1);
            expect(result.minutes).toBe(30);
            expect(result.seconds).toBe(30);
        });
    });

    describe('Round-trip conversions', () => {
        test('toDecimal(1, 30, 0).hours → toTime → { hours: 1, minutes: 30, seconds: 0 }', () => {
            const decimal = converter.toDecimal(1, 30, 0);
            const result = converter.toTime(decimal.hours);
            expect(result.days).toBe(0);
            expect(result.hours).toBe(1);
            expect(result.minutes).toBe(30);
            expect(result.seconds).toBe(0);
        });

        test('toDecimal(8, 45, 0).hours → toTime → { hours: 8, minutes: 45, seconds: 0 }', () => {
            const decimal = converter.toDecimal(8, 45, 0);
            const result = converter.toTime(decimal.hours);
            expect(result.hours).toBe(8);
            expect(result.minutes).toBe(45);
            expect(result.seconds).toBe(0);
        });

        test('toDecimal(0, 0, 0).hours → toTime → { days: 0, hours: 0, minutes: 0, seconds: 0 }', () => {
            const decimal = converter.toDecimal(0, 0, 0);
            const result = converter.toTime(decimal.hours);
            expect(result).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        });

        test('toDecimal(12, 0, 0).hours → toTime → { hours: 12, minutes: 0, seconds: 0 }', () => {
            const decimal = converter.toDecimal(12, 0, 0);
            const result = converter.toTime(decimal.hours);
            expect(result.hours).toBe(12);
            expect(result.minutes).toBe(0);
            expect(result.seconds).toBe(0);
        });

        test('toDecimal(2, 30, 30).hours → toTime → { hours: 2, minutes: 30, seconds: 30 }', () => {
            const decimal = converter.toDecimal(2, 30, 30);
            const result = converter.toTime(decimal.hours);
            expect(result.hours).toBe(2);
            expect(result.minutes).toBe(30);
            expect(result.seconds).toBe(30);
        });
    });
});
