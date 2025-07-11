import { ITextFormatConverter } from '../../inteface/ITextFormatConverter.converter';
import { ITextFormatConverterFactory } from '../../inteface/ITextFormatConverter.converter.factory';
import { TextFormatConverterFactory } from '../../textFormatConverter.converter.factory';

describe('MorseFormatConverter', () => {
    let factory: ITextFormatConverterFactory;
    let converter: ITextFormatConverter;

    beforeEach(() => {
        factory = new TextFormatConverterFactory();
        converter = factory.createService('morse');
    });

    describe('fromText', () => {
        describe('Dado uma entrada válida', () => {
            it('Deve converter letra A maiúscula para código Morse', () => {
                // Arrange
                const entrada = 'A';
                const resultadoEsperado = '.-';

                // Act
                const resultado = converter.fromText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter letra B maiúscula para código Morse', () => {
                // Arrange
                const entrada = 'B';
                const resultadoEsperado = '-...';

                // Act
                const resultado = converter.fromText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter letra S maiúscula para código Morse', () => {
                // Arrange
                const entrada = 'S';
                const resultadoEsperado = '...';

                // Act
                const resultado = converter.fromText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter letra O maiúscula para código Morse', () => {
                // Arrange
                const entrada = 'O';
                const resultadoEsperado = '---';

                // Act
                const resultado = converter.fromText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter SOS maiúsculo para código Morse', () => {
                // Arrange
                const entrada = 'SOS';
                const resultadoEsperado = '...---...';

                // Act
                const resultado = converter.fromText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter HELLO maiúsculo para código Morse', () => {
                // Arrange
                const entrada = 'HELLO';
                const resultadoEsperado = '......-...-..---';

                // Act
                const resultado = converter.fromText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter letra a minúscula para código Morse', () => {
                // Arrange
                const entrada = 'a';
                const resultadoEsperado = '.-';

                // Act
                const resultado = converter.fromText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter hello minúsculo para código Morse', () => {
                // Arrange
                const entrada = 'hello';
                const resultadoEsperado = '......-...-..---';

                // Act
                const resultado = converter.fromText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter número 0 para código Morse', () => {
                // Arrange
                const entrada = '0';
                const resultadoEsperado = '-----';

                // Act
                const resultado = converter.fromText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter número 1 para código Morse', () => {
                // Arrange
                const entrada = '1';
                const resultadoEsperado = '.----';

                // Act
                const resultado = converter.fromText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter número 9 para código Morse', () => {
                // Arrange
                const entrada = '9';
                const resultadoEsperado = '----.';

                // Act
                const resultado = converter.fromText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter sequência 123 para código Morse', () => {
                // Arrange
                const entrada = '123';
                const resultadoEsperado = '.----..---...--';

                // Act
                const resultado = converter.fromText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter A1 para código Morse', () => {
                // Arrange
                const entrada = 'A1';
                const resultadoEsperado = '.-.----';

                // Act
                const resultado = converter.fromText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter ABC123 para código Morse', () => {
                // Arrange
                const entrada = 'ABC123';
                const resultadoEsperado = '.--...-.-..----..---...--';

                // Act
                const resultado = converter.fromText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve preservar exclamação em A!', () => {
                // Arrange
                const entrada = 'A!';
                const resultadoEsperado = '.-!';

                // Act
                const resultado = converter.fromText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve preservar espaço em A B', () => {
                // Arrange
                const entrada = 'A B';
                const resultadoEsperado = '.- -...';

                // Act
                const resultado = converter.fromText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve preservar arroba em A@B', () => {
                // Arrange
                const entrada = 'A@B';
                const resultadoEsperado = '.-@-...';

                // Act
                const resultado = converter.fromText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });
        });

        describe('Dado uma entrada de casos extremos', () => {
            it('Deve retornar string vazia quando entrada for vazia', () => {
                // Arrange
                const entrada = '';
                const resultadoEsperado = '';

                // Act
                const resultado = converter.fromText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve preservar símbolos especiais', () => {
                // Arrange
                const entrada = '!@#$%';
                const resultadoEsperado = '!@#$%';

                // Act
                const resultado = converter.fromText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });
        });
    });

    describe('toText', () => {
        describe('Dado um código Morse válido', () => {
            it('Deve converter código Morse de A para letra', () => {
                // Arrange
                const entrada = '.-';
                const resultadoEsperado = 'A';

                // Act
                const resultado = converter.toText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter código Morse de B para letra', () => {
                // Arrange
                const entrada = '-...';
                const resultadoEsperado = 'B';

                // Act
                const resultado = converter.toText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter código Morse de S para letra', () => {
                // Arrange
                const entrada = '...';
                const resultadoEsperado = 'S';

                // Act
                const resultado = converter.toText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter código Morse de O para letra', () => {
                // Arrange
                const entrada = '---';
                const resultadoEsperado = 'O';

                // Act
                const resultado = converter.toText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter código Morse de 0 para dígito', () => {
                // Arrange
                const entrada = '-----';
                const resultadoEsperado = '0';

                // Act
                const resultado = converter.toText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter código Morse de 1 para dígito', () => {
                // Arrange
                const entrada = '.----';
                const resultadoEsperado = '1';

                // Act
                const resultado = converter.toText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter código Morse de 9 para dígito', () => {
                // Arrange
                const entrada = '----.';
                const resultadoEsperado = '9';

                // Act
                const resultado = converter.toText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter códigos Morse AB separados por espaço', () => {
                // Arrange
                const entrada = '.- -...';
                const resultadoEsperado = 'AB';

                // Act
                const resultado = converter.toText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter códigos Morse SOS separados por espaço', () => {
                // Arrange
                const entrada = '... --- ...';
                const resultadoEsperado = 'SOS';

                // Act
                const resultado = converter.toText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter códigos Morse HELLO separados por espaço', () => {
                // Arrange
                const entrada = '.... . .-.. .-.. ---';
                const resultadoEsperado = 'HELLO';

                // Act
                const resultado = converter.toText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter HELLO WORLD com separador de palavras', () => {
                // Arrange
                const entrada = '.... . .-.. .-.. ---   .-- --- .-. .-.. -..';
                const resultadoEsperado = 'HELLO WORLD';

                // Act
                const resultado = converter.toText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter AB C com separador de palavras', () => {
                // Arrange
                const entrada = '.- -...   -.-.';
                const resultadoEsperado = 'AB C';

                // Act
                const resultado = converter.toText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });
        });

        describe('Dado um código Morse inválido', () => {
            it('Deve retornar ? para código Morse desconhecido', () => {
                // Arrange
                const entrada = '..---..'
                const resultadoEsperado = '?';

                // Act
                const resultado = converter.toText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve retornar ? para código Morse longo desconhecido', () => {
                // Arrange
                const entrada = '.-.-.-.-';
                const resultadoEsperado = '?';

                // Act
                const resultado = converter.toText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve processar A + código inválido + B', () => {
                // Arrange
                const entrada = '.- invalid -...';
                const resultadoEsperado = 'A?B';

                // Act
                const resultado = converter.toText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve processar SO + código inválido', () => {
                // Arrange
                const entrada = '... --- invalid';
                const resultadoEsperado = 'SO?';

                // Act
                const resultado = converter.toText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });
        });

        describe('Dado uma entrada de casos extremos', () => {
            it('Deve retornar string vazia quando entrada for vazia', () => {
                // Arrange
                const entrada = '';
                const resultadoEsperado = '';

                // Act
                const resultado = converter.toText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve retornar string vazia quando entrada for três espaços', () => {
                // Arrange
                const entrada = '   ';
                const resultadoEsperado = '';

                // Act
                const resultado = converter.toText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve retornar string vazia quando entrada for um espaço', () => {
                // Arrange
                const entrada = ' ';
                const resultadoEsperado = '';

                // Act
                const resultado = converter.toText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve retornar string vazia quando entrada for cinco espaços', () => {
                // Arrange
                const entrada = '     ';
                const resultadoEsperado = '';

                // Act
                const resultado = converter.toText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve remover espaços extras no final do resultado AB', () => {
                // Arrange
                const entrada = '.- -...';
                const resultadoEsperado = 'AB';

                // Act
                const resultado = converter.toText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
                expect(resultado.endsWith(' ')).toBe(false);
            });
        });
    });

    describe('Testes de Integração', () => {
        describe('Conversões bidirecionais', () => {
            it('Deve converter HELLO WORLD conhecido de Morse para texto', () => {
                // Arrange
                const entrada = '.... . .-.. .-.. ---   .-- --- .-. .-.. -..';
                const resultadoEsperado = 'HELLO WORLD';

                // Act
                const resultado = converter.toText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter SOS de texto para Morse', () => {
                // Arrange
                const entrada = 'SOS';
                const resultadoEsperado = '...---...';

                // Act
                const resultado = converter.fromText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter SOS de Morse para texto', () => {
                // Arrange
                const entrada = '... --- ...';
                const resultadoEsperado = 'SOS';

                // Act
                const resultado = converter.toText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter alfabeto ABCDEFGHIJKLMNOPQRSTUVWXYZ para Morse', () => {
                // Arrange
                const entrada = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                const resultadoEsperado = '.-' + '-...' + '-.-.' + '-..' + '.' + '..-.' +
                    '--.' + '....' + '..' + '.---' + '-.-' + '.-..' +
                    '--' + '-.' + '---' + '.--.' + '--.-' + '.-.' +
                    '...' + '-' + '..-' + '...-' + '.--' + '-..-' +
                    '-.--' + '--..';

                // Act
                const resultado = converter.fromText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter números 0123456789 para Morse', () => {
                // Arrange
                const entrada = '0123456789';
                const resultadoEsperado = '-----.----..---...--....-.....-....--...---..----.';

                // Act
                const resultado = converter.fromText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter números em Morse para texto', () => {
                // Arrange
                const entrada = '----- .---- ..--- ...-- ....- ..... -.... --... ---.. ----.';
                const resultadoEsperado = '0123456789';

                // Act
                const resultado = converter.toText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter A1B2 para Morse', () => {
                // Arrange
                const entrada = 'A1B2';
                const resultadoEsperado = '.-.----' + '-...' + '..---';

                // Act
                const resultado = converter.fromText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });

            it('Deve converter A1B2 em Morse para texto', () => {
                // Arrange
                const entrada = '.- .---- -... ..---';
                const resultadoEsperado = 'A1B2';

                // Act
                const resultado = converter.toText(entrada);

                // Assert
                expect(resultado).toBe(resultadoEsperado);
            });
        });

        describe('Cenários de validação', () => {
            it('Deve converter HELLO para Morse retornando resultado não vazio', () => {
                // Arrange
                const entrada = 'HELLO';

                // Act
                const resultado = converter.fromText(entrada);

                // Assert
                expect(resultado).toBeTruthy();
                expect(resultado.length).toBeGreaterThan(0);
            });

            it('Deve converter WORLD para Morse retornando resultado não vazio', () => {
                // Arrange
                const entrada = 'WORLD';

                // Act
                const resultado = converter.fromText(entrada);

                // Assert
                expect(resultado).toBeTruthy();
                expect(resultado.length).toBeGreaterThan(0);
            });

            it('Deve tratar entrada vazia consistentemente em fromText', () => {
                // Arrange
                const entrada = '';

                // Act
                const resultado = converter.fromText(entrada);

                // Assert
                expect(resultado).toBe('');
            });

            it('Deve tratar entrada vazia consistentemente em toText', () => {
                // Arrange
                const entrada = '';

                // Act
                const resultado = converter.toText(entrada);

                // Assert
                expect(resultado).toBe('');
            });

            it('Deve tratar entrada com espaços consistentemente em fromText', () => {
                // Arrange
                const entrada = '   ';

                // Act
                const resultado = converter.fromText(entrada);

                // Assert
                expect(resultado).toBe('');
            });

            it('Deve tratar entrada com espaços consistentemente em toText', () => {
                // Arrange
                const entrada = '   ';

                // Act
                const resultado = converter.toText(entrada);

                // Assert
                expect(resultado).toBe('');
            });
        });
    });
});