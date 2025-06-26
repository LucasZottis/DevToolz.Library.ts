import { resourceUsage } from "process";
import { INumericSystemConverter } from "../../interfaces/INumericSystem.converter";

export class RomanSystemConverter implements INumericSystemConverter {
    private readonly _romanNumbers: { letter: string, value: number }[] = [
        { letter: 'M', value: 1000 },
        { letter: 'D', value: 500 },
        { letter: 'C', value: 100 },
        { letter: 'L', value: 50 },
        { letter: 'X', value: 10 },
        { letter: 'V', value: 5 },
        { letter: 'I', value: 1 },
    ];

    fromDecimal(value: number): string {
        let result: string = '';
        let index: number = 0;
        let previousRomanNumber: { letter: string, value: number } | undefined;

        // while (index <= this._romanNumbers.length - 1) {
        //     const romamNumber = this._romanNumbers[index];

        //     if (value >= romamNumber.value) {
        //         result += romamNumber.letter;
        //         value -= romamNumber.value;
        //     } else if (previousRomanNumber && previousRomanNumber.value) {

        //     } else {
        //         index++;
        //     }
        // }

        return result;
    }

    toDecimal(value: string): number {
        let result: string = '';

        
        
        return parseInt(value, 8);
    }
}