import { CpfValidator } from "./cpf.validator";
import { CpfGenerator } from "./cpf.generator";
import { IValidationResult } from "../models/validation-result.model";
import { CpfFormatter } from "./cpf.formatter";

export class Cpf {
    readonly baseDigits: string;
    readonly regionDigit: string;
    // readonly estados: Estado[];
    readonly firstVerifyDigit: string;
    readonly secondVerifyDigit: string;
    // private _value: string = EMPTY_STRING;

    private constructor(
        baseDigits: string,
        regionDigit: string,
        firstVerifyDigit: string,
        secondVerifyDigit: string,
    ) {
        this.baseDigits = baseDigits;
        this.regionDigit = regionDigit;
        // this.estados = getEstadosPorDigito(Number(regionDigit));
        this.firstVerifyDigit = firstVerifyDigit;
        this.secondVerifyDigit = secondVerifyDigit;
        Object.freeze(this);
    }

    toString(): string {
        return this.baseDigits + this.regionDigit + this.firstVerifyDigit + this.secondVerifyDigit;
    }

    toFormatted(): string {
        const raw = this.toString();
        const formatter = new CpfFormatter();
        return formatter.applyMask(this.toString());
    }

    static validate(value: string): IValidationResult {
        const validator = new CpfValidator();
        return validator.validate(value ?? "");
    }

    static generate(formatted?: boolean): Cpf {
        const generator = new CpfGenerator();
        const generatedValue = generator.generate(formatted);
        return this.parse(generatedValue);
    }

    static parse(value: string): Cpf {
        const result = this.validate(value);

        if (!result.isValid)
            throw new Error(result.message);

        const digits = value.replace(/[^\d]/g, "");

        return new Cpf(
            digits.substring(0, 8),
            digits[8],
            digits[9],
            digits[10],
        );
    }

    static tryParse(value: string): Cpf | null {
        try {
            return Cpf.parse(value);
        } catch {
            return null;
        }
    }
}