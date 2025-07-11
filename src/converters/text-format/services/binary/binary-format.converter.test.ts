import { ITextFormatConverter } from "../../inteface/ITextFormatConverter.converter";
import { ITextFormatConverterFactory } from "../../inteface/ITextFormatConverter.converter.factory";
import { TextFormatConverterFactory } from "../../textFormatConverter.converter.factory";


describe('converter', () => {
    let factory: ITextFormatConverterFactory;
    let converter: ITextFormatConverter;

    beforeEach(() => {
        factory = new TextFormatConverterFactory();
        converter = factory.createService('binary');
    });

    describe('fromText', () => {
        it('should convert simple text to binary', () => {
            const result = converter.fromText('A');
            expect(result).toBe('01000001 ');
        });

        it('should convert multiple characters to binary', () => {
            const result = converter.fromText('ABC');
            expect(result).toBe('01000001 01000010 01000011 ');
        });

        it('should handle lowercase letters', () => {
            const result = converter.fromText('abc');
            expect(result).toBe('01100001 01100010 01100011 ');
        });

        it('should handle numbers', () => {
            const result = converter.fromText('123');
            expect(result).toBe('00110001 00110010 00110011 ');
        });

        it('should handle special characters', () => {
            const result = converter.fromText('!@#');
            expect(result).toBe('00100001 01000000 00100011 ');
        });

        it('should handle spaces', () => {
            const result = converter.fromText('A B');
            expect(result).toBe('01000001 00100000 01000010 ');
        });

        it('should handle empty string', () => {
            const result = converter.fromText('');
            expect(result).toBe('');
        });

        it('should handle Unicode characters', () => {
            // Teste com caracteres específicos e seus valores conhecidos
            const result = converter.fromText('ção');

            // Vamos verificar o que realmente está sendo retornado
            // 'ç' (231) = 11100111, 'ã' (227) = 11100011, 'o' (111) = 01101111
            expect(result).toBe('11100111 11100011 01101111 ');
        });

        it('should throw error for non-string input', () => {
            expect(() => converter.fromText(123 as any)).toThrow('Input must be a string');
            expect(() => converter.fromText(null as any)).toThrow('Input must be a string');
            expect(() => converter.fromText(undefined as any)).toThrow('Input must be a string');
        });
    });

    describe('toText', () => {
        it('should convert binary to simple text', () => {
            const result = converter.toText('01000001');
            expect(result).toBe('A');
        });

        it('should convert multiple binary groups to text', () => {
            const result = converter.toText('01000001 01000010 01000011');
            expect(result).toBe('ABC');
        });

        it('should handle lowercase letters', () => {
            const result = converter.toText('01100001 01100010 01100011');
            expect(result).toBe('abc');
        });

        it('should handle numbers', () => {
            const result = converter.toText('00110001 00110010 00110011');
            expect(result).toBe('123');
        });

        it('should handle special characters', () => {
            const result = converter.toText('00100001 01000000 00100011');
            expect(result).toBe('!@#');
        });

        it('should handle spaces', () => {
            const result = converter.toText('01000001 00100000 01000010');
            expect(result).toBe('A B');
        });

        it('should handle empty string', () => {
            const result = converter.toText('');
            expect(result).toBe('');
        });

        it('should handle whitespace variations', () => {
            const result = converter.toText('  01000001   01000010  ');
            expect(result).toBe('AB');
        });

        it('should handle binary without padding', () => {
            const result = converter.toText('1000001 1000010');
            expect(result).toBe('AB');
        });

        it('should handle trailing spaces (from fromText output)', () => {
            const result = converter.toText('01000001 01000010 ');
            expect(result).toBe('AB');
        });

        it('should throw error for invalid binary format', () => {
            expect(() => converter.toText('invalid')).toThrow('Invalid binary format: invalid');
            expect(() => converter.toText('01000001 invalid')).toThrow('Invalid binary format: invalid');
            expect(() => converter.toText('012345678')).toThrow('Invalid binary format: 012345678');
        });

        it('should throw error for non-string input', () => {
            expect(() => converter.toText(123 as any)).toThrow('Input must be a string');
            expect(() => converter.toText(null as any)).toThrow('Input must be a string');
            expect(() => converter.toText(undefined as any)).toThrow('Input must be a string');
        });
    });

    describe('Round-trip conversion', () => {
        it('should maintain data integrity in round-trip conversion', () => {
            const originalTexts = [
                'Hello World!',
                'TypeScript é incrível',
                '12345',
                '!@#$%^&*()',
                'A',
                'Testing with spaces   and tabs\t',
                'Números: 123 e símbolos: !@#'
            ];

            originalTexts.forEach(text => {
                const binary = converter.fromText(text);
                const convertedBack = converter.toText(binary);
                expect(convertedBack).toBe(text);
            });
        });

        it('should handle empty string in round-trip', () => {
            const text = '';
            const binary = converter.fromText(text);
            const convertedBack = converter.toText(binary);
            expect(convertedBack).toBe(text);
        });
    });

    describe('Edge cases', () => {
        it('should handle very long strings', () => {
            const longText = 'A'.repeat(1000);
            const binary = converter.fromText(longText);
            const convertedBack = converter.toText(binary);
            expect(convertedBack).toBe(longText);
        });

        it('should handle all ASCII characters', () => {
            let allAscii = '';
            for (let i = 32; i <= 126; i++) {
                allAscii += String.fromCharCode(i);
            }

            const binary = converter.fromText(allAscii);
            const convertedBack = converter.toText(binary);
            expect(convertedBack).toBe(allAscii);
        });

        it('should handle newlines and tabs', () => {
            const textWithWhitespace = 'Line1\nLine2\tTabbed';
            const binary = converter.fromText(textWithWhitespace);
            const convertedBack = converter.toText(binary);
            expect(convertedBack).toBe(textWithWhitespace);
        });

        it('should handle single character', () => {
            const chars = ['A', 'z', '1', '!', ' ', '\n', '\t'];
            chars.forEach(char => {
                const binary = converter.fromText(char);
                const convertedBack = converter.toText(binary);
                expect(convertedBack).toBe(char);
            });
        });
    });

    describe('Format validation', () => {
        it('should reject strings with non-binary characters', () => {
            expect(() => converter.toText('01000001 0100000G')).toThrow('Invalid binary format: 0100000G');
            expect(() => converter.toText('01000001 01000002')).toThrow('Invalid binary format: 01000002');
        });

        it('should reject binary strings longer than 8 bits', () => {
            expect(() => converter.toText('010000011')).toThrow('Invalid binary format: 010000011');
            expect(() => converter.toText('01000001 010000011')).toThrow('Invalid binary format: 010000011');
        });

        it('should accept binary strings shorter than 8 bits', () => {
            expect(() => converter.toText('1 10 101')).not.toThrow();
            expect(converter.toText('1 10 101')).toBe('\u0001\u0002\u0005');
        });
    });
});