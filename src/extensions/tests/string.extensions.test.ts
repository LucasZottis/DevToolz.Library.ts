import '../string.extensions';

describe("String.prototype.toBinary", () => {
    describe("Dado uma string vazia", () => {
        it("deve retornar string vazia", () => {
            expect("".toBinary()).toBe("");
        });
    });

    describe("Dado um único caractere", () => {
        it("deve converter 'A' para binário", () => {
            expect("A".toBinary()).toBe("01000001");
        });

        it("deve converter 'a' para binário", () => {
            expect("a".toBinary()).toBe("01100001");
        });
    });

    describe("Dado múltiplos caracteres", () => {
        it("deve converter 'Hi' para binário separado por espaços", () => {
            expect("Hi".toBinary()).toBe("01001000 01101001");
        });

        it("deve converter 'ABC' para binário separado por espaços", () => {
            expect("ABC".toBinary()).toBe("01000001 01000010 01000011");
        });
    });

    describe("Dado conversão de ida e volta", () => {
        it("deve retornar o texto original após toBinary e fromBinary", () => {
            expect("Hello".toBinary().fromBinary()).toBe("Hello");
        });

        it("deve preservar espaços após ida e volta", () => {
            expect("Hello World".toBinary().fromBinary()).toBe("Hello World");
        });
    });
});

describe("String.prototype.fromBinary", () => {
    describe("Dado uma string vazia", () => {
        it("deve retornar string vazia", () => {
            expect("".fromBinary()).toBe("");
        });
    });

    describe("Dado um único bloco binário", () => {
        it("deve converter '01000001' para 'A'", () => {
            expect("01000001".fromBinary()).toBe("A");
        });

        it("deve converter '01100001' para 'a'", () => {
            expect("01100001".fromBinary()).toBe("a");
        });
    });

    describe("Dado múltiplos blocos binários", () => {
        it("deve converter '01001000 01101001' para 'Hi'", () => {
            expect("01001000 01101001".fromBinary()).toBe("Hi");
        });

        it("deve converter '01000001 01000010 01000011' para 'ABC'", () => {
            expect("01000001 01000010 01000011".fromBinary()).toBe("ABC");
        });
    });

    describe("Dado conversão de ida e volta", () => {
        it("deve retornar o binário original após fromBinary e toBinary", () => {
            const binary = "01001000 01101001";
            expect(binary.fromBinary().toBinary()).toBe(binary);
        });
    });
});

describe("String.prototype.removeAccents", () => {
    describe("Dado uma string sem acentuação", () => {
        it("deve retornar a mesma string", () => {
            expect("hello".removeAccents()).toBe("hello");
        });

        it("deve retornar string vazia ao receber string vazia", () => {
            expect("".removeAccents()).toBe("");
        });

        it("deve retornar a mesma string com números e símbolos", () => {
            expect("abc123!@#".removeAccents()).toBe("abc123!@#");
        });
    });

    describe("Dado uma string com vogais acentuadas", () => {
        it("deve remover acento agudo", () => {
            expect("áéíóú".removeAccents()).toBe("aeiou");
        });

        it("deve remover acento circunflexo", () => {
            expect("âêîôû".removeAccents()).toBe("aeiou");
        });

        it("deve remover acento grave", () => {
            expect("àèìòù".removeAccents()).toBe("aeiou");
        });

        it("deve remover til", () => {
            expect("ãõ".removeAccents()).toBe("ao");
        });

        it("deve remover trema", () => {
            expect("äëïöü".removeAccents()).toBe("aeiou");
        });
    });

    describe("Dado uma string com caracteres especiais do português", () => {
        it("deve remover cedilha", () => {
            expect("ç".removeAccents()).toBe("c");
        });

        it("deve remover acentuação de palavra completa", () => {
            expect("açúcar".removeAccents()).toBe("acucar");
        });

        it("deve remover acentuação de frase", () => {
            expect("é incrível trabalhar aqui".removeAccents()).toBe("e incrivel trabalhar aqui");
        });

        it("deve remover acentuação mantendo letras maiúsculas", () => {
            expect("ÁÉÍÓÚ".removeAccents()).toBe("AEIOU");
        });

        it("deve remover acentuação de texto misto maiúsculas e minúsculas", () => {
            expect("São Paulo".removeAccents()).toBe("Sao Paulo");
        });
    });

    describe("Dado uma string com acentuação mista", () => {
        it("deve remover apenas os caracteres acentuados preservando o restante", () => {
            expect("café com leite".removeAccents()).toBe("cafe com leite");
        });

        it("deve processar nomes próprios com acentos", () => {
            expect("João, José, Álvaro e Ângela".removeAccents()).toBe("Joao, Jose, Alvaro e Angela");
        });
    });
});
