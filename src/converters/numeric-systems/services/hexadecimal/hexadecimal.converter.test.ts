import { HexadecimalSystemConverter } from "./hexadecimal.converter";

describe('HexadecimalSystemConverter', () => {
    let converter: HexadecimalSystemConverter;

    beforeEach(() => {
        converter = new HexadecimalSystemConverter();
    });

    describe('fromDecimal', () => {
        it('deve converter zero para hexadecimal', () => {
            expect(converter.fromDecimal(0)).toBe('0');
        });

        it('deve converter números positivos básicos para hexadecimal', () => {
            expect(converter.fromDecimal(1)).toBe('1');
            expect(converter.fromDecimal(9)).toBe('9');
            expect(converter.fromDecimal(10)).toBe('a');
            expect(converter.fromDecimal(15)).toBe('f');
            expect(converter.fromDecimal(16)).toBe('10');
        });

        it('deve converter números maiores para hexadecimal', () => {
            expect(converter.fromDecimal(255)).toBe('ff');
            expect(converter.fromDecimal(256)).toBe('100');
            expect(converter.fromDecimal(4095)).toBe('fff');
            expect(converter.fromDecimal(65535)).toBe('ffff');
        });

        it('deve converter números negativos para hexadecimal', () => {
            expect(converter.fromDecimal(-1)).toBe('-1');
            expect(converter.fromDecimal(-10)).toBe('-a');
            expect(converter.fromDecimal(-255)).toBe('-ff');
        });

        it('deve converter números decimais (com ponto flutuante)', () => {
            expect(converter.fromDecimal(10.5)).toBe('a.8');
            expect(converter.fromDecimal(15.9)).toBe('f.e666666666668');
        });

        it('deve lidar com números muito grandes', () => {
            expect(converter.fromDecimal(1048576)).toBe('100000');
            expect(converter.fromDecimal(Number.MAX_SAFE_INTEGER)).toBe('1fffffffffffff');
        });
    });

    describe('toDecimal', () => {
        it('deve converter zero hexadecimal para decimal', () => {
            expect(converter.toDecimal('0')).toBe(0);
        });

        it('deve converter dígitos hexadecimais básicos para decimal', () => {
            expect(converter.toDecimal('1')).toBe(1);
            expect(converter.toDecimal('9')).toBe(9);
            expect(converter.toDecimal('a')).toBe(10);
            expect(converter.toDecimal('A')).toBe(10);
            expect(converter.toDecimal('f')).toBe(15);
            expect(converter.toDecimal('F')).toBe(15);
        });

        it('deve converter números hexadecimais de múltiplos dígitos', () => {
            expect(converter.toDecimal('10')).toBe(16);
            expect(converter.toDecimal('ff')).toBe(255);
            expect(converter.toDecimal('FF')).toBe(255);
            expect(converter.toDecimal('100')).toBe(256);
            expect(converter.toDecimal('fff')).toBe(4095);
            expect(converter.toDecimal('ffff')).toBe(65535);
        });

        it('deve ser case-insensitive', () => {
            expect(converter.toDecimal('abc')).toBe(2748);
            expect(converter.toDecimal('ABC')).toBe(2748);
            expect(converter.toDecimal('AbC')).toBe(2748);
        });

        it('deve lidar com strings vazias e inválidas', () => {
            expect(converter.toDecimal('')).toBe(0);
            expect(converter.toDecimal('invalid')).toBeNaN();
            expect(converter.toDecimal('xyz')).toBeNaN();
            expect(converter.toDecimal('g')).toBeNaN();
        });

        it('deve converter números hexadecimais grandes', () => {
            expect(converter.toDecimal('100000')).toBe(1048576);
            expect(converter.toDecimal('1fffffffffffff')).toBe(Number.MAX_SAFE_INTEGER);
        });

        it('deve lidar com espaços em branco', () => {
            expect(converter.toDecimal(' ff ')).toBe(255);
            expect(converter.toDecimal('\t10\n')).toBe(16);
        });
    });

    describe('conversões bidirecionais', () => {
        it('deve manter consistência em conversões de ida e volta', () => {
            const testNumbers = [0, 1, 10, 15, 16, 255, 256, 4095, 65535];

            testNumbers.forEach(num => {
                const hex = converter.fromDecimal(num);
                const backToDecimal = converter.toDecimal(hex);
                expect(backToDecimal).toBe(num);
            });
        });

        it('deve manter consistência com strings hexadecimais válidas', () => {
            const testHexValues = ['0', '1', 'a', 'f', '10', 'ff', '100', 'fff', 'ffff'];

            testHexValues.forEach(hex => {
                const decimal = converter.toDecimal(hex);
                const backToHex = converter.fromDecimal(decimal);
                expect(backToHex).toBe(hex.toLowerCase());
            });
        });
    });

    describe('casos extremos', () => {
        it('deve lidar com Number.MAX_VALUE', () => {
            const result = converter.fromDecimal(Number.MAX_VALUE);
            expect(typeof result).toBe('string');
            expect(result.length).toBeGreaterThan(0);
        });

        it('deve lidar com Number.MIN_VALUE', () => {
            const result = converter.fromDecimal(Number.MIN_VALUE);
            expect(result).toBe('0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004');
        });

        it('deve lidar com Infinity', () => {
            expect(converter.fromDecimal(Infinity)).toBe('Infinity');
            expect(converter.fromDecimal(-Infinity)).toBe('-Infinity');
        });

        it('deve lidar com NaN', () => {
            expect(converter.fromDecimal(NaN)).toBe('NaN');
        });
    });

    describe('implementação da interface', () => {
        it('deve implementar corretamente INumericSystemConverter', () => {
            expect(typeof converter.fromDecimal).toBe('function');
            expect(typeof converter.toDecimal).toBe('function');
        });

        it('fromDecimal deve retornar string', () => {
            const result = converter.fromDecimal(42);
            expect(typeof result).toBe('string');
        });

        it('toDecimal deve retornar number', () => {
            const result = converter.toDecimal('2a');
            expect(typeof result).toBe('number');
        });
    });
});