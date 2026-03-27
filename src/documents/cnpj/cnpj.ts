import { CnpjValidator } from "./cnpj.validator";
import { CnpjGenerator } from "./cnpj.generator";
import { IValidationResult } from "../models/validation-result.model";
import { CnpjFormatter } from "./cnpj.formatter";

export class Cnpj {
    readonly rootDigits: string;       // primeiros 8 dígitos (CNPJ raiz)
    readonly orderDigits: string;      // dígitos 9–12 (filial/ordem)
    readonly firstVerifyDigit: string;
    readonly secondVerifyDigit: string;

    private constructor(
        rootDigits: string,
        orderDigits: string,
        firstVerifyDigit: string,
        secondVerifyDigit: string,
    ) {
        this.rootDigits = rootDigits;
        this.orderDigits = orderDigits;
        this.firstVerifyDigit = firstVerifyDigit;
        this.secondVerifyDigit = secondVerifyDigit;
        Object.freeze(this);
    }

    toString(): string {
        return this.rootDigits + this.orderDigits + this.firstVerifyDigit + this.secondVerifyDigit;
    }

    toFormatted(): string {
        const formatter = new CnpjFormatter();
        return formatter.applyMask(this.toString());
    }

    static validate(value: string): IValidationResult {
        const validator = new CnpjValidator();
        return validator.validate(value ?? "");
    }

    static generate(formatted?: boolean): Cnpj {
        const generator = new CnpjGenerator();
        const generatedValue = generator.generate(formatted);
        return this.parse(generatedValue);
    }

    static parse(value: string): Cnpj {
        const result = this.validate(value);

        if (!result.isValid)
            throw new Error(result.message);

        const digits = value.replace(/[^\d]/g, "");

        return new Cnpj(
            digits.substring(0, 8),
            digits.substring(8, 12),
            digits[12],
            digits[13],
        );
    }

    static tryParse(value: string): Cnpj | null {
        try {
            return Cnpj.parse(value);
        } catch {
            return null;
        }
    }
}