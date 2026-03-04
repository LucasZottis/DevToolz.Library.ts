import { Random } from "../../random";
import "../extensions/stringExtensions";
import { IGenerator } from "../interfaces/generator.interface";
import { CpfFormatter } from "./cpf.formatter";

export class CpfGenerator implements IGenerator {
    private readonly _formatter = new CpfFormatter();

    private _isRepeatedDigits(cpf: string): boolean {
        return /^(\d)\1{8}$/.test(cpf);
    }

    private _calcVerifyingDigit(startCounter: number, digits: string): string {
        let result = 0;

        digits.forEach(digit => {
            result += digit.toNumber() * startCounter--;
        });

        const rest = result % 11;
        return (rest < 2 ? 0 : 11 - rest).toString();
    }

    private _generateCalculatingDigits(): string {
        const random = new Random(0, 9, true);
        let digits = "";

        do {
            digits = "";
            for (let i = 0; i < 9; i++)
                digits += random.generate(true).toString();
        } while (this._isRepeatedDigits(digits));

        return digits;
    }

    generate(formatted = false): string {
        const calculating = this._generateCalculatingDigits();
        const first = this._calcVerifyingDigit(10, calculating);
        const second = this._calcVerifyingDigit(11, calculating + first);

        const cpf = calculating + first + second;

        return formatted ? this._formatter.applyMask(cpf) : cpf;
    }
}