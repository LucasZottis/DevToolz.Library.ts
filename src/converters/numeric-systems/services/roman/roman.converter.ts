import { resourceUsage } from "process";
import { INumericSystemConverter } from "../../interfaces/INumericSystem.converter";

export class RomanSystemConverter implements INumericSystemConverter {
    private readonly ROMAN_NUMBERS: { symbol: string, value: number }[] = [
        { symbol: 'M', value: 1000, },
        { symbol: 'CM', value: 900 },
        { symbol: 'D', value: 500 },
        { symbol: 'CD', value: 500 },
        { symbol: 'C', value: 100 },
        { symbol: 'XC', value: 90 },
        { symbol: 'L', value: 50 },
        { symbol: 'XL', value: 40 },
        { symbol: 'X', value: 10 },
        { symbol: 'IX', value: 9 },
        { symbol: 'V', value: 5 },
        { symbol: 'IV', value: 4 },
        { symbol: 'I', value: 1 },
    ];

    private isValidRoman(roman: string): boolean {
        // Regex para validar formato básico de números romanos
        const romanRegex = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
        return romanRegex.test(roman);
    }

    fromDecimal(value: number): string {
        if (!Number.isInteger(value) || value < 1 || value > 3999) {
            throw new Error('Número deve ser um inteiro entre 1 e 3999');
        }

        let result = '';
        let remaining = value;

        for (const romanNumber of this.ROMAN_NUMBERS) {
            const count = Math.floor(remaining / romanNumber.value);
            if (count > 0) {
                result += romanNumber.symbol.repeat(count);
                remaining -= romanNumber.value * count;
            }
        }

        return result;
    }

    toDecimal(value: string): number {
        if (typeof value !== 'string' || value.length === 0) {
            throw new Error('Entrada deve ser uma string não vazia');
        }

        const normalizedRoman = value.toUpperCase().trim();

        if (!this.isValidRoman(normalizedRoman)) {
            throw new Error('Formato de número romano inválido');
        }

        let result = 0;
        let i = 0;

        while (i < normalizedRoman.length) {
            // Verifica primeiro por símbolos de dois caracteres (IV, IX, XL, etc.)
            if (i + 1 < normalizedRoman.length) {
                const twoChar = normalizedRoman.substring(i, i + 2);
                const twoCharValue = this.ROMAN_NUMBERS.find(rn => rn.symbol === twoChar);

                if (twoCharValue) {
                    result += twoCharValue.value;
                    i += 2;
                    continue;
                }
            }

            // Símbolos de um caractere
            const oneChar = normalizedRoman[i];
            const oneCharValue = this.ROMAN_NUMBERS.find(rn => rn.symbol === oneChar);

            if (oneCharValue) {
                result += oneCharValue.value;
                i += 1;
            } else {
                throw new Error(`Caractere romano inválido: ${oneChar}`);
            }
        }

        return result;
    }
}