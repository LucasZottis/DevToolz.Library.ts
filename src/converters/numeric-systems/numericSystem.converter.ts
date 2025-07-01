import { INumericSystemConverterFactory } from "./interfaces/INumericSystem.converter.factory";
import { NumericSystemConverterFactory } from "./numericSystem.converter.factory";

export class NumericSystemConverter {
    private readonly factory!: INumericSystemConverterFactory;

    constructor() {
        this.factory = new NumericSystemConverterFactory();
    }

    convert(content: string, from: string, to: string) {
        const source = this.factory.createService(from);
        const target = this.factory.createService(to);

        const decimal = source.toDecimal(content);
        const result = target.fromDecimal(decimal);

        return result;
    }
}