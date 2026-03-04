import { Random } from "../../random";
import "../../extensions/string.extensions";
import { IGenerator } from "../interfaces/generator.interface";
import { CnpjFormatter } from "./cnpj.formatter";

export class CnpjGenerator implements IGenerator {
    private readonly _formatter = new CnpjFormatter();

    private _isRepeatedDigits(cnpj: string): boolean {
        return /^(\d)\1{13}$/.test(cnpj);
    }

    private _calcVerifyingDigit(startCounter: number, digits: string): string {
        let result = 0;

        digits.forEach(digit => {
            result += digit.toNumber() * startCounter;
            startCounter--;

            if (startCounter < 2)
                startCounter = 9;
        });

        const rest = result % 11;
        return (rest < 2 ? 0 : 11 - rest).toString();
    }

    private _generateCalculatingDigits(): string {
        const random = new Random(0, 9, true);
        let digits = "";

        do {
            digits = "";
            for (let i = 0; i < 12; i++)
                digits += random.generate(true).toString();
        } while (this._isRepeatedDigits(digits));

        return digits;
    }

    generate(formatted = false): string {
        const calculating = this._generateCalculatingDigits();
        const first = this._calcVerifyingDigit(5, calculating);
        const second = this._calcVerifyingDigit(6, calculating + first);

        const cnpj = calculating + first + second;

        return formatted ? this._formatter.applyMask(cnpj) : cnpj;
    }
}