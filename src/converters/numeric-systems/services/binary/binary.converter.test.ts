import { BinarySystemConverter } from "./binary.converter";


describe('BinarySystemConverter', () => {
    let converter: BinarySystemConverter;

    beforeEach(() => {
        converter = new BinarySystemConverter();
    });

    describe('fromDecimal', () => {
        it('deve converter zero para binário', () => {
            expect(converter.fromDecimal(0)).toBe('0');
        });

        it('deve converter números positivos básicos para binário', () => {
            expect(converter.fromDecimal(1)).toBe('1');
            expect(converter.fromDecimal(2)).toBe('10');
            expect(converter.fromDecimal(3)).toBe('11');
            expect(converter.fromDecimal(4)).toBe('100');
            expect(converter.fromDecimal(5)).toBe('101');
            expect(converter.fromDecimal(8)).toBe('1000');
        });

        it('deve converter potências de 2 para binário', () => {
            expect(converter.fromDecimal(1)).toBe('1');        // 2^0
            expect(converter.fromDecimal(2)).toBe('10');       // 2^1
            expect(converter.fromDecimal(4)).toBe('100');      // 2^2
            expect(converter.fromDecimal(8)).toBe('1000');     // 2^3
            expect(converter.fromDecimal(16)).toBe('10000');   // 2^4
            expect(converter.fromDecimal(32)).toBe('100000');  // 2^5
            expect(converter.fromDecimal(64)).toBe('1000000'); // 2^6
        });

        it('deve converter números comuns para binário', () => {
            expect(converter.fromDecimal(7)).toBe('111');
            expect(converter.fromDecimal(15)).toBe('1111');
            expect(converter.fromDecimal(31)).toBe('11111');
            expect(converter.fromDecimal(63)).toBe('111111');
            expect(converter.fromDecimal(127)).toBe('1111111');
            expect(converter.fromDecimal(255)).toBe('11111111');
        });

        it('deve converter números maiores para binário', () => {
            expect(converter.fromDecimal(256)).toBe('100000000');
            expect(converter.fromDecimal(512)).toBe('1000000000');
            expect(converter.fromDecimal(1024)).toBe('10000000000');
            expect(converter.fromDecimal(65535)).toBe('1111111111111111');
        });

        it('deve converter números negativos para binário', () => {
            expect(converter.fromDecimal(-1)).toBe('-1');
            expect(converter.fromDecimal(-2)).toBe('-10');
            expect(converter.fromDecimal(-8)).toBe('-1000');
            expect(converter.fromDecimal(-255)).toBe('-11111111');
        });

        it('deve converter números decimais truncando a parte fracionária', () => {
            expect(converter.fromDecimal(5.1)).toBe('101.0001100110011001100110011001100110011001100110011');
            expect(converter.fromDecimal(5.9)).toBe('101.1110011001100110011001100110011001100110011001101');
            expect(converter.fromDecimal(7.5)).toBe('111.1');
            expect(converter.fromDecimal(15.99)).toBe('1111.1111110101110000101000111101011100001010001111011');
        });

        it('deve lidar com números muito grandes', () => {
            expect(converter.fromDecimal(1048576)).toBe('100000000000000000000');
            expect(converter.fromDecimal(Number.MAX_SAFE_INTEGER)).toBe('11111111111111111111111111111111111111111111111111111');
        });

        it('deve lidar com valores especiais', () => {
            expect(converter.fromDecimal(Infinity)).toBe('Infinity');
            expect(converter.fromDecimal(-Infinity)).toBe('-Infinity');
            expect(converter.fromDecimal(NaN)).toBe('NaN');
        });
    });

    describe('toDecimal', () => {
        it('deve converter zero binário para decimal', () => {
            expect(converter.toDecimal('0')).toBe(0);
        });

        it('deve converter números binários básicos para decimal', () => {
            expect(converter.toDecimal('1')).toBe(1);
            expect(converter.toDecimal('10')).toBe(2);
            expect(converter.toDecimal('11')).toBe(3);
            expect(converter.toDecimal('100')).toBe(4);
            expect(converter.toDecimal('101')).toBe(5);
            expect(converter.toDecimal('1000')).toBe(8);
        });

        it('deve converter potências de 2 binário para decimal', () => {
            expect(converter.toDecimal('1')).toBe(1);          // 2^0
            expect(converter.toDecimal('10')).toBe(2);         // 2^1
            expect(converter.toDecimal('100')).toBe(4);        // 2^2
            expect(converter.toDecimal('1000')).toBe(8);       // 2^3
            expect(converter.toDecimal('10000')).toBe(16);     // 2^4
            expect(converter.toDecimal('100000')).toBe(32);    // 2^5
            expect(converter.toDecimal('1000000')).toBe(64);   // 2^6
        });

        it('deve converter padrões binários comuns para decimal', () => {
            expect(converter.toDecimal('111')).toBe(7);
            expect(converter.toDecimal('1111')).toBe(15);
            expect(converter.toDecimal('11111')).toBe(31);
            expect(converter.toDecimal('111111')).toBe(63);
            expect(converter.toDecimal('1111111')).toBe(127);
            expect(converter.toDecimal('11111111')).toBe(255);
        });

        it('deve converter números binários maiores para decimal', () => {
            expect(converter.toDecimal('100000000')).toBe(256);
            expect(converter.toDecimal('1000000000')).toBe(512);
            expect(converter.toDecimal('10000000000')).toBe(1024);
            expect(converter.toDecimal('1111111111111111')).toBe(65535);
        });

        it('deve lidar com espaços em branco', () => {
            expect(converter.toDecimal(' 101 ')).toBe(5);
            expect(converter.toDecimal('\t1000\n')).toBe(8);
            expect(converter.toDecimal('  1111  ')).toBe(15);
        });

        it('deve lidar com zeros à esquerda', () => {
            expect(converter.toDecimal('0001')).toBe(1);
            expect(converter.toDecimal('000101')).toBe(5);
            expect(converter.toDecimal('0001000')).toBe(8);
        });

        it('deve retornar NaN para strings inválidas', () => {
            expect(converter.toDecimal('')).toBe(0);
            expect(converter.toDecimal('abc')).toBeNaN();
            expect(converter.toDecimal('xyz')).toBeNaN();
            expect(converter.toDecimal('2')).toBeNaN(); // 2 não é válido em binário
            expect(converter.toDecimal('invalid')).toBeNaN();
            expect(converter.toDecimal('   ')).toBeNaN();
        });

        it('deve parar no primeiro dígito inválido', () => {
            expect(converter.toDecimal('101abc')).toBe(5);  // Para no 'a'
            expect(converter.toDecimal('123')).toBe(1);     // Para no '2'
            expect(converter.toDecimal('102')).toBe(2);     // Para no '0', depois para no '2' 
            expect(converter.toDecimal('1002')).toBe(4);    // Para no primeiro '2'
            expect(converter.toDecimal('110xyz')).toBe(6);  // Para no 'x'
            expect(converter.toDecimal('111 000')).toBe(7); // Para no espaço
            expect(converter.toDecimal('1a1')).toBe(1);     // Para no 'a'
        });

        it('deve lidar com prefixos comuns de binário', () => {
            expect(converter.toDecimal('0b101')).toBe(0);   // Para no 'b'
            expect(converter.toDecimal('101b')).toBe(5);    // Para no 'b'
        });

        it('deve converter números binários muito grandes', () => {
            expect(converter.toDecimal('100000000000000000000')).toBe(1048576);
            expect(converter.toDecimal('11111111111111111111111111111111111111111111111111111')).toBe(Number.MAX_SAFE_INTEGER);
        });
    });

    describe('conversões bidirecionais', () => {
        it('deve manter consistência em conversões de ida e volta', () => {
            const testNumbers = [0, 1, 2, 3, 4, 5, 7, 8, 15, 16, 31, 32, 63, 64, 127, 128, 255, 256, 1023, 1024];

            testNumbers.forEach(num => {
                const binary = converter.fromDecimal(num);
                const backToDecimal = converter.toDecimal(binary);
                expect(backToDecimal).toBe(num);
            });
        });

        it('deve manter consistência com strings binárias válidas', () => {
            const testBinaryValues = ['0', '1', '10', '11', '100', '101', '111', '1000', '1111', '10000'];

            testBinaryValues.forEach(binary => {
                const decimal = converter.toDecimal(binary);
                const backToBinary = converter.fromDecimal(decimal);
                expect(backToBinary).toBe(binary);
            });
        });

        it('deve perder parte decimal em conversões bidirecionais', () => {
            const decimalNumbers = [5.7, 7.2, 15.9];

            decimalNumbers.forEach(num => {
                const binary = converter.fromDecimal(num);
                const backToDecimal = converter.toDecimal(binary);
                expect(backToDecimal).toBe(Math.floor(num));
            });
        });
    });

    describe('casos extremos', () => {
        it('deve lidar com Number.MAX_SAFE_INTEGER', () => {
            const maxSafe = Number.MAX_SAFE_INTEGER;
            const binary = converter.fromDecimal(maxSafe);
            const backToDecimal = converter.toDecimal(binary);
            expect(backToDecimal).toBe(maxSafe);
        });

        it('deve lidar com Number.MIN_SAFE_INTEGER', () => {
            const minSafe = Number.MIN_SAFE_INTEGER;
            const binary = converter.fromDecimal(minSafe);
            expect(binary).toBe('-11111111111111111111111111111111111111111111111111111');
        });

        it('deve lidar com strings binárias muito longas', () => {
            const longBinary = '1'.repeat(53); // Próximo ao limite de precisão do JavaScript
            const result = converter.toDecimal(longBinary);
            expect(typeof result).toBe('number');
            expect(result).toBeGreaterThan(0);
        });

        it('deve lidar com Number.MAX_VALUE', () => {
            const result = converter.fromDecimal(Number.MAX_VALUE);
            expect(typeof result).toBe('string');
            expect(result.length).toBeGreaterThan(0);
        });
    });

    describe('validação específica para sistema binário', () => {
        it('deve aceitar apenas dígitos 0 e 1', () => {
            expect(converter.toDecimal('0')).toBe(0);
            expect(converter.toDecimal('1')).toBe(1);
            expect(converter.toDecimal('01')).toBe(1);
            expect(converter.toDecimal('10')).toBe(2);
            expect(converter.toDecimal('11')).toBe(3);
        });

        it('deve rejeitar dígitos 2-9', () => {
            expect(converter.toDecimal('2')).toBeNaN();
            expect(converter.toDecimal('12')).toBe(1); // Para no 2
            expect(converter.toDecimal('19')).toBe(1); // Para no 9
            expect(converter.toDecimal('101234')).toBe(5); // Para no 2
        });

        it('deve rejeitar caracteres não numéricos (exceto espaços)', () => {
            expect(converter.toDecimal('a')).toBeNaN();
            expect(converter.toDecimal('1a0')).toBe(1);
            expect(converter.toDecimal('z101')).toBeNaN();
        });
    });

    describe('padrões binários importantes', () => {
        it('deve converter corretamente bytes (8 bits)', () => {
            expect(converter.toDecimal('00000000')).toBe(0);
            expect(converter.toDecimal('00000001')).toBe(1);
            expect(converter.toDecimal('10000000')).toBe(128);
            expect(converter.toDecimal('11111111')).toBe(255);
        });

        it('deve converter corretamente nibbles (4 bits)', () => {
            expect(converter.toDecimal('0000')).toBe(0);
            expect(converter.toDecimal('0001')).toBe(1);
            expect(converter.toDecimal('1000')).toBe(8);
            expect(converter.toDecimal('1111')).toBe(15);
        });

        it('deve converter corretamente words (16 bits)', () => {
            expect(converter.toDecimal('0000000000000000')).toBe(0);
            expect(converter.toDecimal('0000000000000001')).toBe(1);
            expect(converter.toDecimal('1000000000000000')).toBe(32768);
            expect(converter.toDecimal('1111111111111111')).toBe(65535);
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
            const result = converter.toDecimal('101010');
            expect(typeof result).toBe('number');
        });
    });

    describe('comportamentos específicos do parseInt com base 2', () => {
        it('deve usar base 2 explicitamente', () => {
            expect(converter.toDecimal('010')).toBe(2); // Interpreta como binário
            expect(converter.toDecimal('0x10')).toBe(0); // Para no 'x'
        });

        it('deve parar no primeiro caractere inválido para base 2', () => {
            expect(converter.toDecimal('1012')).toBe(5);   // Para no '2'
            expect(converter.toDecimal('101a')).toBe(5);   // Para no 'a'
            expect(converter.toDecimal('11 00')).toBe(3);  // Para no espaço
        });
    });
});