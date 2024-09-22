import { cpfPattern } from "./constants/regexPatterns";
import { IValidator } from "./interfaces/validator";
import { IValue } from "./interfaces/value";
import { IValueGenerator } from "./interfaces/valueGenerator";
import { Random } from "./random";

export class Cpf implements IValue, IValueGenerator, IValidator {
    Value: string;

    private _isPattern(value: string): boolean {
        return value.isEqual("000000000")
            || value.isEqual("111111111")
            || value.isEqual("222222222")
            || value.isEqual("333333333")
            || value.isEqual("444444444")
            || value.isEqual("555555555")
            || value.isEqual("666666666")
            || value.isEqual("777777777")
            || value.isEqual("888888888")
            || value.isEqual("999999999");
    }

    private _generateCalculatingDigits(): string {
        let randomDigits = new Random(0, 9, true);
        let digits!: string;

        do {
            digits = "";

            for (let i = 0; i < 9; i++)
                digits += randomDigits.generate().toString();

        } while (this._isPattern(digits));

        return digits;
    }

    private _generateVerifyingDigits(startCounter: number, digits: string): string {
        var result = 0;

        digits.forEach(digit => {
            result += digit.toNumber() * startCounter--;
        });

        var rest = result % 11;

        if (rest < 2)
            result = 0;
        else
            result = 11 - rest;

        return result.toString();
    }

    private _getFirstVerifyingDigit(cpf: string): string {
        return cpf[9].toString();
    }

    private _getSecondVerifyingDigit(cpf: string): string {
        return cpf[10].toString();
    }

    private _getCalculatingDigits(cpf: string): string {
        return cpf.substring(0, 9);
    }

    private _validateVerifyingDigit(startCounter: number, digits: string, verifyingDigit: string): boolean {
        var checkDigit = this._generateVerifyingDigits(startCounter, digits);
        return checkDigit.isEqual(verifyingDigit);
    }

    private _isCpfFormatValid(cpf: string): boolean {
        return cpf.match(cpfPattern) ? true : false;
    }

    private _removeMask(cpf: string): string {
        return cpf.replace("\.|\/|\-", "");
    }

    isValid(): boolean;
    isValid(value: string): boolean;
    isValid(value?: string): boolean {
        this.Value = value;

        var validFormat = value.isNotEmpty()
            && this._isCpfFormatValid(this.Value)
            && !this._isPattern(this.Value);

        if (!validFormat)
            return false;

        var cpf = this._removeMask(this.Value);
        var calculatingDigits = this._getCalculatingDigits(cpf);
        var firstVerifyingDigit = this._getFirstVerifyingDigit(cpf);
        var secondVerifyingDigit = this._getSecondVerifyingDigit(cpf);

        return this._validateVerifyingDigit(10, calculatingDigits, firstVerifyingDigit)
            && this._validateVerifyingDigit(11, calculatingDigits + firstVerifyingDigit, secondVerifyingDigit);
    }
    generate<T>(): T;
    generate<T>(condition?: boolean): T;
    generate(condition?: boolean): string {
        this.Value = this._generateCalculatingDigits();
        this.Value += this._generateVerifyingDigits(10, this.Value);
        this.Value += this._generateVerifyingDigits(11, this.Value);

        if (condition)
            this.Value = this.Value.replace(/(\d{3})(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3-$4');

        return this.Value;
    }
}