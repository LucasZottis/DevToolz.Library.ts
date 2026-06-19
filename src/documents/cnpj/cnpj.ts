import { CnpjValidator } from "./cnpj.validator";
import { CnpjGenerator } from "./cnpj.generator";
import { IValidationResult } from "../models/validation-result.model";
import { CnpjFormatter } from "./cnpj.formatter";
import { CnpjOptions } from "./cnpj.types";

export class Cnpj {
    /** First 8 characters of the CNPJ root (may contain letters in alphanumeric format). */
    readonly rootDigits: string;
    /** Characters 9-12 representing the establishment order (may contain letters in alphanumeric format). */
    readonly orderDigits: string;
    /** First verifying digit — always numeric. */
    readonly firstVerifyDigit: string;
    /** Second verifying digit — always numeric. */
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

    static validate(value: string, options?: CnpjOptions): IValidationResult {
        const validator = new CnpjValidator();
        return validator.validate(value ?? "", options);
    }

    static generate(options?: CnpjOptions): Cnpj {
        const generator = new CnpjGenerator();
        const generatedValue = generator.generate(options);
        return this.parse(generatedValue, options);
    }

    static parse(value: string, options?: CnpjOptions): Cnpj {
        const result = this.validate(value, options);

        if (!result.isValid)
            throw new Error(result.message);

        const formatter = new CnpjFormatter();
        const cnpj = formatter.removeMask(value);

        return new Cnpj(
            cnpj.substring(0, 8),
            cnpj.substring(8, 12),
            cnpj[12],
            cnpj[13],
        );
    }

    static tryParse(value: string, options?: CnpjOptions): Cnpj | null {
        try {
            return Cnpj.parse(value, options);
        } catch {
            return null;
        }
    }
}
