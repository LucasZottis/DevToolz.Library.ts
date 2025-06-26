import { INumericSystemConverter } from "../../interfaces/INumericSystem.converter";

export class DecimalSystemConverter implements INumericSystemConverter {
    fromDecimal(value: number): string {
        return value.toString();
    }

    toDecimal(value: string): number {
        return parseInt(value);
    }
}