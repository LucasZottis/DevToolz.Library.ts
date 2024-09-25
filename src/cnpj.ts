import { cnpjPattern } from "./constants/regexPatterns";
import { Random } from "./random";
import "../src/extensions/stringExtensions";
import { IValueGenerator } from "./interfaces/valueGenerator";
import { IValidator } from "./interfaces/validator";
import { IValue } from "./interfaces/value";

export class Cnpj implements IValue, IValidator, IValueGenerator {
    value!: string;
    message!: string;

    private _isPattern(value: string): boolean {
        return value === "000000000000"
            || value === "111111111111"
            || value === "222222222222"
            || value === "333333333333"
            || value === "444444444444"
            || value === "555555555555"
            || value === "666666666666"
            || value === "777777777777"
            || value === "888888888888"
            || value === "999999999999";
    }

    private _isCnpjFormatValid(cnpj: string): boolean {
        let isMatch = cnpj.match(cnpjPattern);
        return isMatch !== null && isMatch.length > 0 ? true : false;
    }

    private _generateCalculatingDigits(): string {
        let randomDigits = new Random(0, 9, true);
        let digits!: string;

        do {
            digits = "";

            for (let i = 0; i < 12; i++)
                digits += randomDigits.generate(true).toString();

        } while (this._isPattern(digits));

        return digits;
    }

    private _removeMask(cnpj: string): string {
        return cnpj.replace(/[^\d]/g, "");
    }

    private _generateVerifyingDigit(startCounter: number, digits: string): string {
        let result: number = 0;

        digits.forEach(e => {
            result += e.toNumber() * startCounter;
            startCounter--;

            if (startCounter < 2)
                startCounter = 9;
        });

        let mod: number = result % 11;

        if (mod < 2)
            result = 0;
        else
            result = 11 - mod;

        return result.toString();
    }

    private _getCalculatingDigits(cnpj: string): string {
        return cnpj.substring(0, 12);
    }

    private _getFirstVerifyingDigit(cnpj: string): string {
        return cnpj[12];
    }

    private _getSecondVerifyingDigit(cnpj: string): string {
        return cnpj[13];
    }

    private _validateVerifyingDigit(startCounter: number, digits: string, verifyingDigit: string): boolean {
        let checkDigit = this._generateVerifyingDigit(startCounter, digits);

        return checkDigit.isEqual(verifyingDigit);
    }

    generate(): string;
    generate(condition: boolean): string;
    generate(condition?: boolean): string {
        this.value = this._generateCalculatingDigits();
        this.value += this._generateVerifyingDigit(5, this.value);
        this.value += this._generateVerifyingDigit(6, this.value);

        if (condition)
            this.value = this.value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2})/, '$1.$2.$3/$4-$5');

        return this.value;
    }

    isValid(): boolean;
    isValid(value: string): boolean;
    isValid(value?: string): boolean {
        this.value = value ?? "";

        if (value?.isEmpty()) {
            this.message = "CNPJ está vazio.";
            return false;
        }

        if (!this._isCnpjFormatValid(this.value)) {
            this.message = "CNPJ com formato inválido.";
            return false;
        }

        if (this._isPattern(this.value)) {
            this.message = "CNPJ não ter todos números iguais.";
            return false;
        }

        let cnpj: string = this._removeMask(this.value);
        let calculatingDigits = this._getCalculatingDigits(cnpj);
        let firstVerifyingDigit = this._getFirstVerifyingDigit(cnpj);
        let secondVerifyingDigit = this._getSecondVerifyingDigit(cnpj);

        if (!this._validateVerifyingDigit(5, calculatingDigits, firstVerifyingDigit)) {
            this.message = "Primeiro dígito é inválido";
            return false;
        }

        if (!this._validateVerifyingDigit(6, calculatingDigits + firstVerifyingDigit, secondVerifyingDigit)) {
            this.message = "Segundo dígito é inválido";
            return false;
        }

        this.message = "Válido";
        return true;
    }
}