import { ITextFormatConverter } from "../../inteface/ITextFormatConverter.converter";

export class BinaryFormatConverter implements ITextFormatConverter {
    fromText(value: string): string {
        if (typeof value !== 'string')
            throw new Error('Input must be a string');

        let result = '';

        for (let i = 0; i < value.length; i++) {
            const charCode = value.charCodeAt(i);
            const binaryString = charCode.toString(2).padStart(8, '0'); // Convert to binary and pad to 8 bits
            result += binaryString + ' '; // Append a space after each byte
        }

        return result;
    }

    toText(value: string): string {
        if (typeof value !== 'string')
            throw new Error('Input must be a string');

        // Se a string está vazia após trim, retorna string vazia
        const trimmed = value.trim();
        if (trimmed === '') {
            return '';
        }

        const binaryArray = trimmed.split(/\s+/);

        for (const bin of binaryArray) {
            if (!/^[01]{1,8}$/.test(bin)) {
                throw new Error(`Invalid binary format: ${bin}`);
            }
        }

        let result = '';

        binaryArray.forEach(binaryValue => {
            const charCode = parseInt(binaryValue, 2); // Convert binary string to integer
            if (!isNaN(charCode)) {
                result += String.fromCharCode(charCode); // Convert integer to character
            }
        });

        return result; // Remove trailing space
    }
}