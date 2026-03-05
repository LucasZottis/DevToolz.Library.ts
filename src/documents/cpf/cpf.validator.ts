import { cpfPattern } from "../../constants/regexPatterns";
import "../../extensions/string.extensions";
import { IValidator } from "../interfaces/validator.interface";
import { IValidationResult } from "../models/validation-result.model";
import { CpfFormatter } from "./cpf.formatter";

export class CpfValidator implements IValidator {
    private readonly _formatter = new CpfFormatter();

    private _isRepeatedDigits(cpf: string): boolean {
        return /^(\d)\1{10}$/.test(cpf);
    }

    private _isFormatValid(cpf: string): boolean {
        return cpfPattern.test(cpf);
    }

    private _calcVerifyingDigit(startCounter: number, digits: string): string {
        let result = 0;

        digits.forEach(digit => {
            result += digit.toNumber() * startCounter--;
        });

        const rest = result % 11;
        return (rest < 2 ? 0 : 11 - rest).toString();
    }

    private _fail(message: string, type: "empty" | "format" | "pattern" | "invalid" | ""): IValidationResult {
        return { isValid: false, message, type };
    }

    validate(value: string): IValidationResult {
        if (!value || value.isEmpty())
            return this._fail("CPF está vazio.", "empty");

        if (!this._isFormatValid(value))
            return this._fail("CPF com formato inválido.", "format");

        const cpf = this._formatter.removeMask(value);

        if (this._isRepeatedDigits(cpf))
            return this._fail("CPF é inválido.", "invalid");

        const calculating = cpf.substring(0, 9);
        const first = cpf[9];
        const second = cpf[10];
        const isValid = this._calcVerifyingDigit(10, calculating) === first
            && this._calcVerifyingDigit(11, calculating + first) === second;

        if (!isValid)
            return this._fail("CPF é inválido.", "invalid");

        return { isValid: true, message: "Válido", type: "" };
    }
}