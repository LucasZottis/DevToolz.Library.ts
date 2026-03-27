import '../string.extensions';

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
