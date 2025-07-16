import { DecimalSystemConverter } from "./decimal.converter";

describe('DecimalSystemConverter', () => {
    let converter: DecimalSystemConverter;

    beforeEach(() => {
        converter = new DecimalSystemConverter();
    });

    describe('fromDecimal', () => {
        it('deve converter zero para string', () => {
            expect(converter.fromDecimal(0)).toBe('0');
        });

        it('deve converter números positivos para string', () => {
            expect(converter.fromDecimal(1)).toBe('1');
            expect(converter.fromDecimal(42)).toBe('42');
            expect(converter.fromDecimal(123)).toBe('123');
            expect(converter.fromDecimal(9999)).toBe('9999');
        });

        it('deve converter números negativos para string', () => {
            expect(converter.fromDecimal(-1)).toBe('-1');
            expect(converter.fromDecimal(-42)).toBe('-42');
            expect(converter.fromDecimal(-123)).toBe('-123');
            expect(converter.fromDecimal(-9999)).toBe('-9999');
        });

        it('deve converter números decimais para string', () => {
            expect(converter.fromDecimal(3.14)).toBe('3.14');
            expect(converter.fromDecimal(0.5)).toBe('0.5');
            expect(converter.fromDecimal(-2.7)).toBe('-2.7');
            expect(converter.fromDecimal(123.456)).toBe('123.456');
        });

        it('deve lidar com números muito pequenos', () => {
            expect(converter.fromDecimal(0.000001)).toBe('0.000001');
            expect(converter.fromDecimal(Number.MIN_VALUE)).toBe('5e-324');
        });

        it('deve lidar com números muito grandes', () => {
            expect(converter.fromDecimal(1000000)).toBe('1000000');
            expect(converter.fromDecimal(Number.MAX_SAFE_INTEGER)).toBe('9007199254740991');
            expect(converter.fromDecimal(Number.MAX_VALUE)).toBe('1.7976931348623157e+308');
        });

        it('deve lidar com notação científica', () => {
            expect(converter.fromDecimal(1e6)).toBe('1000000');
            expect(converter.fromDecimal(1e-6)).toBe('0.000001');
            expect(converter.fromDecimal(2.5e3)).toBe('2500');
        });

        it('deve lidar com valores especiais', () => {
            expect(converter.fromDecimal(Infinity)).toBe('Infinity');
            expect(converter.fromDecimal(-Infinity)).toBe('-Infinity');
            expect(converter.fromDecimal(NaN)).toBe('NaN');
        });

        it('deve manter precisão de ponto flutuante', () => {
            expect(converter.fromDecimal(0.1 + 0.2)).toBe('0.30000000000000004');
            expect(converter.fromDecimal(9007199254740992)).toBe('9007199254740992');
        });
    });

    describe('toDecimal', () => {
        it('deve converter string zero para número', () => {
            expect(converter.toDecimal('0')).toBe(0);
        });

        it('deve converter strings numéricas positivas', () => {
            expect(converter.toDecimal('1')).toBe(1);
            expect(converter.toDecimal('42')).toBe(42);
            expect(converter.toDecimal('123')).toBe(123);
            expect(converter.toDecimal('9999')).toBe(9999);
        });

        it('deve converter strings numéricas negativas', () => {
            expect(converter.toDecimal('-1')).toBe(-1);
            expect(converter.toDecimal('-42')).toBe(-42);
            expect(converter.toDecimal('-123')).toBe(-123);
            expect(converter.toDecimal('-9999')).toBe(-9999);
        });

        it('deve ignorar decimais ao usar parseInt', () => {
            expect(converter.toDecimal('3.14')).toBe(3);
            expect(converter.toDecimal('42.99')).toBe(42);
            expect(converter.toDecimal('-5.7')).toBe(-5);
            expect(converter.toDecimal('0.9')).toBe(0);
        });

        it('deve lidar com strings com espaços em branco', () => {
            expect(converter.toDecimal(' 42 ')).toBe(42);
            expect(converter.toDecimal('\t123\n')).toBe(123);
            expect(converter.toDecimal('  -456  ')).toBe(-456);
        });

        it('deve parar na primeira parte numérica válida', () => {
            expect(converter.toDecimal('42abc')).toBe(42);
            expect(converter.toDecimal('123xyz789')).toBe(123);
            expect(converter.toDecimal('-456def')).toBe(-456);
            expect(converter.toDecimal('100px')).toBe(100);
        });

        it('deve retornar NaN para strings inválidas', () => {
            expect(converter.toDecimal('abc')).toBeNaN();
            expect(converter.toDecimal('xyz123')).toBeNaN();
            expect(converter.toDecimal('')).toBe(0);
            expect(converter.toDecimal('   ')).toBeNaN();
            expect(converter.toDecimal('invalid')).toBeNaN();
        });

        it('deve lidar com strings numéricas grandes', () => {
            expect(converter.toDecimal('1000000')).toBe(1000000);
            expect(converter.toDecimal('9007199254740991')).toBe(9007199254740991);
        });

        it('deve lidar com zeros à esquerda', () => {
            expect(converter.toDecimal('007')).toBe(7);
            expect(converter.toDecimal('00042')).toBe(42);
            expect(converter.toDecimal('-0123')).toBe(-123);
        });

        it('deve lidar com sinal de mais explícito', () => {
            expect(converter.toDecimal('+42')).toBe(42);
            expect(converter.toDecimal('+123')).toBe(123);
        });

        it('deve lidar com notação científica em strings', () => {
            expect(converter.toDecimal('1e6')).toBe(1);
            expect(converter.toDecimal('2.5e3')).toBe(2);
        });
    });

    describe('conversões bidirecionais', () => {
        it('deve manter consistência para números inteiros', () => {
            const testNumbers = [0, 1, -1, 42, -42, 123, -123, 9999, -9999];

            testNumbers.forEach(num => {
                const str = converter.fromDecimal(num);
                const backToNumber = converter.toDecimal(str);
                expect(backToNumber).toBe(num);
            });
        });

        it('deve perder precisão decimal devido ao parseInt', () => {
            const decimalNumbers = [3.14, -2.7, 123.456];

            decimalNumbers.forEach(num => {
                const str = converter.fromDecimal(num);
                const backToNumber = converter.toDecimal(str);
                expect(backToNumber).toBe(Math.floor(Math.abs(num)) * Math.sign(num));
            });
        });

        it('deve manter consistência com strings numéricas inteiras', () => {
            const testStrings = ['0', '1', '-1', '42', '-42', '123', '-123'];

            testStrings.forEach(str => {
                const num = converter.toDecimal(str);
                const backToString = converter.fromDecimal(num);
                expect(backToString).toBe(str);
            });
        });
    });

    describe('casos extremos', () => {
        it('deve lidar com Number.MAX_SAFE_INTEGER', () => {
            const maxSafe = Number.MAX_SAFE_INTEGER;
            const str = converter.fromDecimal(maxSafe);
            const back = converter.toDecimal(str);
            expect(back).toBe(maxSafe);
        });

        it('deve lidar com Number.MIN_SAFE_INTEGER', () => {
            const minSafe = Number.MIN_SAFE_INTEGER;
            const str = converter.fromDecimal(minSafe);
            const back = converter.toDecimal(str);
            expect(back).toBe(minSafe);
        });

        it('deve lidar com valores que excedem precisão de parseInt', () => {
            const largeNumber = 9007199254740993; // Maior que MAX_SAFE_INTEGER
            const str = converter.fromDecimal(largeNumber);
            expect(str).toBe('9007199254740992'); // JavaScript limita precisão
        });

        it('deve lidar com strings muito longas', () => {
            const longNumberString = '123456789012345678901234567890';
            const result = converter.toDecimal(longNumberString);
            expect(result).toBe(123456789012345680000000000000); // Perda de precisão
        });
    });

    describe('comportamentos específicos do parseInt', () => {
        it('deve usar base 10 por padrão', () => {
            expect(converter.toDecimal('010')).toBe(10); // Não interpreta como octal
            expect(converter.toDecimal('0x10')).toBe(0); // Para na primeira parte válida
        });

        it('deve parar no primeiro caractere inválido', () => {
            expect(converter.toDecimal('123.456.789')).toBe(123);
            expect(converter.toDecimal('12a34')).toBe(12);
            expect(converter.toDecimal('45 67')).toBe(45);
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
            const result = converter.toDecimal('42');
            expect(typeof result).toBe('number');
        });
    });

    describe('edge cases importantes', () => {
        it('deve alertar sobre limitações do parseInt com decimais', () => {
            // Teste documentando comportamento que pode ser inesperado
            expect(converter.toDecimal('3.99')).toBe(3);
            expect(converter.toDecimal('-4.99')).toBe(-4);
        });

        it('deve documentar comportamento com strings mistas', () => {
            expect(converter.toDecimal('12px')).toBe(12);
            expect(converter.toDecimal('width: 100')).toBeNaN();
        });
    });
});