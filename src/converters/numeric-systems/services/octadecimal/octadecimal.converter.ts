import { INumericSystemConverter } from "../../interfaces/INumericSystem.converter";

export class OctadecimalSystemConverter implements INumericSystemConverter {
    fromDecimal(value: number): string {
        return value.toString(8);
    }

    toDecimal(value: string): number {
        if (value === '')
            return 0; // parseInt behavior for empty string

        const result = parseInt(value, 8);
        return isNaN(result) ? 0 : result; // Retorna 0 se
    }
}