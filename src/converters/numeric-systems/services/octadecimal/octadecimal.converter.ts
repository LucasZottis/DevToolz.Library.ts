import { INumericSystemConverter } from "../../interfaces/INumericSystem.converter";

export class OctadecimalSystemConverter implements INumericSystemConverter {
    fromDecimal(value: number): string {
        return value.toString(8);
    }

    toDecimal(value: string): number {
        return parseInt(value, 8);
    }
}