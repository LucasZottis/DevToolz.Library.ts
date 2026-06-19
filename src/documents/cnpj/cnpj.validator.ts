import { cnpjAlphanumericPattern, cnpjPattern } from "../../constants/regexPatterns";
import "../../extensions/string.extensions";
import { IValidator } from "../interfaces/validator.interface";
import { IValidationResult } from "../models/validation-result.model";
import { CnpjFormatter } from "./cnpj.formatter";
import { CnpjFormat, CnpjOptions } from "./cnpj.types";

export class CnpjValidator implements IValidator {
    private readonly _formatter = new CnpjFormatter();

    private _charToDigitValue(char: string): number {
        return char.toUpperCase().charCodeAt(0) - 48;
    }

    private _isRepeatedChars(cnpj: string): boolean {
        return cnpj.length > 0 && /^(.)\1+$/.test(cnpj);
    }

    private _isFormatValid(value: string, format: CnpjFormat): boolean {
        return format === "alphanumeric"
            ? cnpjAlphanumericPattern.test(value)
            : cnpjPattern.test(value);
    }

    private _detectFormat(value: string): CnpjFormat {
        const stripped = value.replace(/[.\-\/]/g, "").toUpperCase();
        return /[A-Z]/.test(stripped.substring(0, 12)) ? "alphanumeric" : "numeric";
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

    private _fail(message: string, type: "empty" | "format" | "pattern" | "invalid" | ""): IValidationResult {
        return { isValid: false, message, type };
    }

    validate(value: string, options?: CnpjOptions): IValidationResult {
        if (!value || value.isEmpty())
            return this._fail("CNPJ está vazio.", "empty");

        const format = options?.format ?? this._detectFormat(value);

        if (!this._isFormatValid(value, format))
            return this._fail("CNPJ com formato inválido.", "format");

        const cnpj = this._formatter.removeMask(value);

        if (this._isRepeatedChars(cnpj))
            return this._fail("CNPJ é inválido.", "invalid");

        const calculating = cnpj.substring(0, 12);
        const first = cnpj[12];
        const second = cnpj[13];
        const isValid = this._calcVerifyingDigit(5, calculating).isEqual(first)
            && this._calcVerifyingDigit(6, calculating + first).isEqual(second);

        if (!isValid)
            return this._fail("CNPJ é inválido.", "invalid");

        return { isValid: true, message: "Válido", type: "" };
    }
}
