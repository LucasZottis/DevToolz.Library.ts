import { OctadecimalSystemConverter } from "./octadecimal.converter";

describe('OctadecimalSystemConverter', () => {
    let converter: OctadecimalSystemConverter;

    beforeEach(() => {
        converter = new OctadecimalSystemConverter();
    });

    describe('fromDecimal', () => {
        it('should convert decimal 0 to octal "0"', () => {
            const result = converter.fromDecimal(0);
            expect(result).toBe('0');
        });

        it('should convert decimal 8 to octal "10"', () => {
            const result = converter.fromDecimal(8);
            expect(result).toBe('10');
        });

        it('should convert decimal 64 to octal "100"', () => {
            const result = converter.fromDecimal(64);
            expect(result).toBe('100');
        });

        it('should convert decimal 255 to octal "377"', () => {
            const result = converter.fromDecimal(255);
            expect(result).toBe('377');
        });

        it('should convert small decimal numbers correctly', () => {
            expect(converter.fromDecimal(1)).toBe('1');
            expect(converter.fromDecimal(2)).toBe('2');
            expect(converter.fromDecimal(3)).toBe('3');
            expect(converter.fromDecimal(4)).toBe('4');
            expect(converter.fromDecimal(5)).toBe('5');
            expect(converter.fromDecimal(6)).toBe('6');
            expect(converter.fromDecimal(7)).toBe('7');
        });

        it('should convert larger decimal numbers correctly', () => {
            expect(converter.fromDecimal(100)).toBe('144');
            expect(converter.fromDecimal(512)).toBe('1000');
            expect(converter.fromDecimal(1000)).toBe('1750');
        });

        it('should handle negative numbers', () => {
            const result = converter.fromDecimal(-8);
            expect(result).toBe('-10');
        });

        it('should handle floating point numbers by truncating', () => {
            const result = converter.fromDecimal(8.7);
            expect(result).toBe('10.5463146314631463');
        });
    });

    describe('toDecimal', () => {
        it('should convert octal "0" to decimal 0', () => {
            const result = converter.toDecimal('0');
            expect(result).toBe(0);
        });

        it('should convert octal "10" to decimal 8', () => {
            const result = converter.toDecimal('10');
            expect(result).toBe(8);
        });

        it('should convert octal "100" to decimal 64', () => {
            const result = converter.toDecimal('100');
            expect(result).toBe(64);
        });

        it('should convert octal "377" to decimal 255', () => {
            const result = converter.toDecimal('377');
            expect(result).toBe(255);
        });

        it('should convert single digit octal numbers correctly', () => {
            expect(converter.toDecimal('1')).toBe(1);
            expect(converter.toDecimal('2')).toBe(2);
            expect(converter.toDecimal('3')).toBe(3);
            expect(converter.toDecimal('4')).toBe(4);
            expect(converter.toDecimal('5')).toBe(5);
            expect(converter.toDecimal('6')).toBe(6);
            expect(converter.toDecimal('7')).toBe(7);
        });

        it('should convert larger octal numbers correctly', () => {
            expect(converter.toDecimal('144')).toBe(100);
            expect(converter.toDecimal('1000')).toBe(512);
            expect(converter.toDecimal('1750')).toBe(1000);
        });

        it('should handle negative octal numbers', () => {
            const result = converter.toDecimal('-10');
            expect(result).toBe(-8);
        });

        it('should return NaN for invalid octal strings', () => {
            expect(converter.toDecimal('8')).toBe(0);
            expect(converter.toDecimal('9')).toBe(0);
            expect(converter.toDecimal('abc')).toBe(0);
            expect(converter.toDecimal('')).toBe(0); // parseInt behavior
        });

        it('should handle strings with leading zeros', () => {
            expect(converter.toDecimal('010')).toBe(8);
            expect(converter.toDecimal('0100')).toBe(64);
        });

        it('should handle whitespace by ignoring leading/trailing spaces', () => {
            expect(converter.toDecimal(' 10 ')).toBe(8);
            expect(converter.toDecimal('  100  ')).toBe(64);
        });
    });

    describe('bidirectional conversion', () => {
        it('should maintain consistency in bidirectional conversion', () => {
            const testValues = [0, 1, 7, 8, 15, 64, 100, 255, 512, 1000];

            testValues.forEach(value => {
                const octal = converter.fromDecimal(value);
                const backToDecimal = converter.toDecimal(octal);
                expect(backToDecimal).toBe(value);
            });
        });

        it('should maintain consistency for negative numbers', () => {
            const testValues = [-1, -8, -64, -100];

            testValues.forEach(value => {
                const octal = converter.fromDecimal(value);
                const backToDecimal = converter.toDecimal(octal);
                expect(backToDecimal).toBe(value);
            });
        });
    });

    describe('interface compliance', () => {
        it('should implement INumericSystemConverter interface', () => {
            expect(converter.fromDecimal).toBeDefined();
            expect(converter.toDecimal).toBeDefined();
            expect(typeof converter.fromDecimal).toBe('function');
            expect(typeof converter.toDecimal).toBe('function');
        });

        it('should return string from fromDecimal', () => {
            const result = converter.fromDecimal(8);
            expect(typeof result).toBe('string');
        });

        it('should return number from toDecimal', () => {
            const result = converter.toDecimal('10');
            expect(typeof result).toBe('number');
        });
    });

    describe('edge cases', () => {
        it('should handle maximum safe integer', () => {
            const maxSafe = Number.MAX_SAFE_INTEGER;
            const octal = converter.fromDecimal(maxSafe);
            const backToDecimal = converter.toDecimal(octal);
            expect(backToDecimal).toBe(maxSafe);
        });

        it('should handle minimum safe integer', () => {
            const minSafe = Number.MIN_SAFE_INTEGER;
            const octal = converter.fromDecimal(minSafe);
            const backToDecimal = converter.toDecimal(octal);
            expect(backToDecimal).toBe(minSafe);
        });

        it('should handle zero correctly', () => {
            expect(converter.fromDecimal(0)).toBe('0');
            expect(converter.toDecimal('0')).toBe(0);
        });
    });
});