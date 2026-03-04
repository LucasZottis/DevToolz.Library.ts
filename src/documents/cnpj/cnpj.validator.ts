import { cnpjPattern } from "../../constants/regexPatterns";
import "../../extensions/string.extensions";
import { IValidator } from "../interfaces/validator.interface";
import { IValidationResult } from "../models/validation-result.model";
import { CnpjFormatter } from "./cnpj.formatter";

export class CnpjValidator implements IValidator {
    private readonly _formatter = new CnpjFormatter();

    private _isRepeatedDigits(cnpj: string): boolean {
        return /^(\d)\1{13}$/.test(cnpj);
    }

    private _isFormatValid(cnpj: string): boolean {
        return cnpjPattern.test(cnpj);
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

    private _fail(message: string): IValidationResult {
        return { isValid: false, message };
    }

    validate(value: string): IValidationResult {
        if (!value || value.isEmpty())
            return this._fail("CNPJ está vazio.");

        if (!this._isFormatValid(value))
            return this._fail("CNPJ com formato inválido.");

        const cnpj = this._formatter.removeMask(value);

        if (this._isRepeatedDigits(cnpj))
            return this._fail("CNPJ não pode ter todos os dígitos iguais.");

        const calculating = cnpj.substring(0, 12);
        const first = cnpj[12];
        const second = cnpj[13];

        if (this._calcVerifyingDigit(5, calculating) !== first)
            return this._fail("Primeiro dígito verificador é inválido.");

        if (this._calcVerifyingDigit(6, calculating + first) !== second)
            return this._fail("Segundo dígito verificador é inválido.");

        return { isValid: true, message: "Válido" };
    }
}