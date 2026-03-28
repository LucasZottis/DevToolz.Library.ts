import { TextLetterCounter } from "../text-letter-counter";

describe("TextLetterCounter", () => {
    let counter: TextLetterCounter;

    beforeEach(() => {
        counter = new TextLetterCounter();
    });

    describe("count", () => {
        describe("Dado uma string vazia", () => {
            it("deve retornar zero em todos os campos", () => {
                const result = counter.count("");
                expect(result.characters).toBe(0);
                expect(result.charactersWithoutSpaces).toBe(0);
                expect(result.spaces).toBe(0);
                expect(result.vowels).toBe(0);
                expect(result.consonants).toBe(0);
                expect(result.numbers).toBe(0);
                expect(result.words).toBe(0);
                expect(result.sentences).toBe(0);
            });
        });

        describe("Dado uma string apenas com espaços", () => {
            it("deve retornar words como zero e spaces igual ao total de espaços", () => {
                const result = counter.count("   ");
                expect(result.spaces).toBe(3);
                expect(result.words).toBe(0);
                expect(result.consonants).toBe(0);
                expect(result.vowels).toBe(0);
                expect(result.numbers).toBe(0);
            });
        });

        describe("Dado o texto 'Olá'", () => {
            it("deve contar 3 caracteres", () => {
                expect(counter.count("Olá").characters).toBe(3);
            });

            it("deve contar 2 vogais (O e á)", () => {
                expect(counter.count("Olá").vowels).toBe(2);
            });

            it("deve contar 1 consoante (l)", () => {
                expect(counter.count("Olá").consonants).toBe(1);
            });

            it("deve contar 1 palavra", () => {
                expect(counter.count("Olá").words).toBe(1);
            });

            it("deve retornar 0 espaços", () => {
                expect(counter.count("Olá").spaces).toBe(0);
            });

            it("deve retornar 3 caracteres sem espaço", () => {
                expect(counter.count("Olá").charactersWithoutSpaces).toBe(3);
            });
        });

        describe("Dado o texto 'abc 123'", () => {
            it("deve contar 7 caracteres", () => {
                expect(counter.count("abc 123").characters).toBe(7);
            });

            it("deve contar 3 números", () => {
                expect(counter.count("abc 123").numbers).toBe(3);
            });

            it("deve contar 1 espaço", () => {
                expect(counter.count("abc 123").spaces).toBe(1);
            });

            it("deve contar 6 caracteres sem espaço", () => {
                expect(counter.count("abc 123").charactersWithoutSpaces).toBe(6);
            });
        });

        describe("Dado contagem de palavras", () => {
            it("deve contar 2 palavras em 'hello world'", () => {
                expect(counter.count("hello world").words).toBe(2);
            });

            it("deve contar 3 palavras em 'uma frase simples'", () => {
                expect(counter.count("uma frase simples").words).toBe(3);
            });

            it("deve ignorar espaços extras entre palavras", () => {
                expect(counter.count("hello   world").words).toBe(2);
            });
        });

        describe("Dado contagem de frases", () => {
            it("deve contar 2 frases em 'Olá! Tudo bem?'", () => {
                expect(counter.count("Olá! Tudo bem?").sentences).toBe(2);
            });

            it("deve contar 1 frase em 'Isso é um teste.'", () => {
                expect(counter.count("Isso é um teste.").sentences).toBe(1);
            });

            it("deve contar 3 frases com diferentes pontuações", () => {
                expect(counter.count("Oi. Como vai? Tudo bem!").sentences).toBe(3);
            });

            it("deve tratar pontuação consecutiva como uma frase", () => {
                expect(counter.count("Incrível!!!").sentences).toBe(1);
            });

            it("deve retornar 0 frases quando não há pontuação", () => {
                expect(counter.count("Sem pontuação").sentences).toBe(0);
            });
        });

        describe("Dado texto com acentos e caracteres portugueses", () => {
            it("deve contar vogais acentuadas em 'ação'", () => {
                // a, ã, o são vogais
                expect(counter.count("ação").vowels).toBe(3);
            });

            it("deve contar ç como consoante", () => {
                expect(counter.count("ação").consonants).toBe(1);
            });

            it("deve contar vogais em 'coração'", () => {
                // o, a, ã, o = 4 vogais
                expect(counter.count("coração").vowels).toBe(4);
            });

            it("deve contar consoantes em 'coração'", () => {
                // c, r, ç = 3 consoantes
                expect(counter.count("coração").consonants).toBe(3);
            });
        });

        describe("Dado texto misto completo", () => {
            it("deve calcular corretamente todos os campos para 'Olá Mundo! 123'", () => {
                const result = counter.count("Olá Mundo! 123");
                expect(result.characters).toBe(14);
                expect(result.spaces).toBe(2);
                expect(result.charactersWithoutSpaces).toBe(12);
                expect(result.numbers).toBe(3);
                expect(result.words).toBe(3);
                expect(result.sentences).toBe(1);
            });
        });
    });

    describe("countValue", () => {
        describe("Dado valor de busca vazio", () => {
            it("deve retornar 0", () => {
                expect(counter.countValue("qualquer texto", "")).toBe(0);
            });
        });

        describe("Dado busca case sensitive (padrão)", () => {
            it("deve encontrar 1 ocorrência de 'hello' em 'Hello hello'", () => {
                expect(counter.countValue("Hello hello", "hello")).toBe(1);
            });

            it("deve encontrar 2 ocorrências de 'ab' em 'ab AB ab'", () => {
                expect(counter.countValue("ab AB ab", "ab")).toBe(2);
            });

            it("deve retornar 0 quando não encontrar o valor", () => {
                expect(counter.countValue("Hello World", "xyz")).toBe(0);
            });
        });

        describe("Dado busca case insensitive", () => {
            it("deve encontrar 2 ocorrências de 'hello' em 'Hello hello'", () => {
                expect(counter.countValue("Hello hello", "hello", false)).toBe(2);
            });

            it("deve encontrar 3 ocorrências independente de capitalização", () => {
                expect(counter.countValue("ABC abc Abc", "abc", false)).toBe(3);
            });
        });

        describe("Dado busca com texto vazio", () => {
            it("deve retornar 0 ao buscar em string vazia", () => {
                expect(counter.countValue("", "abc")).toBe(0);
            });
        });

        describe("Dado busca de ocorrências sobrepostas", () => {
            it("deve contar ocorrências não sobrepostas", () => {
                expect(counter.countValue("aaa", "aa")).toBe(1);
            });
        });
    });
});
