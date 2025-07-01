import { INumericSystemConverter } from '../../interfaces/INumericSystem.converter';
export class BinarySystemConverter implements INumericSystemConverter {
    fromDecimal(value: number): string {
        return value.toString(2);
    }

    toDecimal(value: string): number {
        if (value === '')
            return 0;

        if (value === 'NaN')
            return 0;

        return parseInt(value, 2);
    }
}