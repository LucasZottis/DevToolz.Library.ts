import { INumericSystemConverter } from "../../interfaces/INumericSystem.converter";

export class HexadecimalSystemConverter implements INumericSystemConverter {
    fromDecimal(value: number): string {
        return value.toString(16);
    }

    toDecimal(value: string): number {
        return parseInt(value, 16);
    }
}