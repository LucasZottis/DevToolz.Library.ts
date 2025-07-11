import { ITextFormatConverter } from "../../inteface/ITextFormatConverter.converter";

export class MorseFormatConverter implements ITextFormatConverter {
    private readonly morseCode: { [key: string]: string } = {
        'A': '.-',
        'B': '-...',
        'C': '-.-.',
        'D': '-..',
        'E': '.',
        'F': '..-.',
        'G': '--.',
        'H': '....',
        'I': '..',
        'J': '.---',
        'K': '-.-',
        'L': '.-..',
        'M': '--',
        'N': '-.',
        'O': '---',
        'P': '.--.',
        'Q': '--.-',
        'R': '.-.',
        'S': '...',
        'T': '-',
        'U': '..-',
        'V': '...-',
        'W': '.--',
        'X': '-..-',
        'Y': '-.--',
        'Z': '--..',
        '0': '-----',
        '1': '.----',
        '2': '..---',
        '3': '...--',
        '4': '....-',
        '5': '.....',
        '6': '-....',
        '7': '--...',
        '8': "---..",
        "9": "----."
    }

    fromText(value: string): string {
        let result = '';

        if (value.length === 0)
            return result;

        if (value.trim().length === 0)
            return '';

        for (let i = 0; i < value.length; i++) {
            const char = value[i].toUpperCase();
            if (this.morseCode[char]) {
                result += this.morseCode[char];
            } else {
                result += char; // Preserve non-morse characters
            }
        }

        return result;
    }

    toText(value: string): string {
        let result = '';

        if (value.length === 0)
            return result;

        if (value.trim().length === 0)
            return '';

        const morseWords = value.split('   '); // Morse words are separated by 3 spaces

        for (const morseWord of morseWords) {
            const morseChars = morseWord.split(' ');

            for (const morseChar of morseChars) {
                const char = Object.keys(this.morseCode).find(key => this.morseCode[key] === morseChar);
                if (char) {
                    result += char;
                } else {
                    result += '?'; // Unknown Morse code
                }
            }

            result += ' '; // Add space between words
        }

        return result.trim(); // Remove trailing space
    }
}