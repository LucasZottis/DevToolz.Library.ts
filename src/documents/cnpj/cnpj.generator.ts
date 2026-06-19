import { Random } from "../../random";
import { IGenerator } from "../interfaces/generator.interface";
import { CnpjFormatter } from "./cnpj.formatter";
import { CnpjFormat, CnpjOptions } from "./cnpj.types";

export class CnpjGenerator implements IGenerator {
    private readonly _formatter = new CnpjFormatter();

    private _charToDigitValue(char: string): number {
        return char.toUpperCase().charCodeAt(0) - 48;
    }

    private _isRepeatedChars(str: string): boolean {
        return str.length > 0 && /^(.)\1+$/.test(str);
    }

    private _calcVerifyingDigit(startCounter: number, digits: string): string {
        let result = 0;
        for (const char of digits) {
            result += this._charToDigitValue(char) * startCounter;
            startCounter--;
            if (startCounter < 2)
                startCounter = 9;
        }
        const rest = result % 11;
        return (rest < 2 ? 0 : 11 - rest).toString();
    }

    private _randomAlphanumericChar(): string {
        const val = new Random(0, 35, true).generate(true);
        return val < 10 ? val.toString() : String.fromCharCode(55 + val);
    }

    private _generateCalculatingDigits(format: CnpjFormat): string {
        let chars = "";
        do {
            chars = "";
            if (format === "alphanumeric") {
                for (let i = 0; i < 12; i++)
                    chars += this._randomAlphanumericChar();
            } else {
                const random = new Random(0, 9, true);
                for (let i = 0; i < 12; i++)
                    chars += random.generate(true).toString();
            }
        } while (this._isRepeatedChars(chars));
        return chars;
    }

    generate(formatted?: boolean): string;
    generate(options?: CnpjOptions): string;
    generate(formattedOrOptions?: boolean | CnpjOptions): string {
        const formatted = typeof formattedOrOptions === "boolean" ? formattedOrOptions : false;
        const format: CnpjFormat = typeof formattedOrOptions === "object"
            ? (formattedOrOptions?.format ?? "numeric")
            : "numeric";

        const calculating = this._generateCalculatingDigits(format);
        const first = this._calcVerifyingDigit(5, calculating);
        const second = this._calcVerifyingDigit(6, calculating + first);
        const cnpj = calculating + first + second;

        return formatted ? this._formatter.applyMask(cnpj) : cnpj;
    }
}
