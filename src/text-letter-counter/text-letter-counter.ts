import { TextLetterCounterResult } from "./models/text-letter-counter-result";

export class TextLetterCounter {
    private readonly _vowels = 'aeiouáéíóúàèìòùâêîôûãõäëïöüAEIOUÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜ';
    private readonly _letterPattern = /[a-záéíóúàèìòùâêîôûãõäëïöüçA-ZÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜÇ]/;

    count(text: string): TextLetterCounterResult {
        const characters = text.length;
        const spaces = (text.match(/\s/g) ?? []).length;
        const charactersWithoutSpaces = characters - spaces;
        const vowels = [...text].filter(c => this._vowels.includes(c)).length;
        const consonants = [...text].filter(c => this._letterPattern.test(c) && !this._vowels.includes(c)).length;
        const numbers = (text.match(/\d/g) ?? []).length;
        const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
        const sentences = (text.match(/[.!?]+/g) ?? []).length;

        return { characters, charactersWithoutSpaces, spaces, vowels, consonants, numbers, words, sentences };
    }

    countValue(text: string, value: string, caseSensitive: boolean = true): number {
        if (value === '') return 0;

        const haystack = caseSensitive ? text : text.toLowerCase();
        const needle = caseSensitive ? value : value.toLowerCase();

        let count = 0;
        let pos = haystack.indexOf(needle);
        while (pos !== -1) {
            count++;
            pos = haystack.indexOf(needle, pos + needle.length);
        }
        return count;
    }
}
