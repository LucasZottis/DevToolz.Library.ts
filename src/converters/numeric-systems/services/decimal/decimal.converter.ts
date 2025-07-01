import { INumericSystemConverter } from "../../interfaces/INumericSystem.converter";

export class DecimalSystemConverter implements INumericSystemConverter {
    fromDecimal(value: number): string {
        return value.toString(10);
    }

    toDecimal(value: string): number {
        if (value === '')
            return 0;

        if (value === 'NaN')
            return 0;

        return parseInt(value, 10);
    }
}