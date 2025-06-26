import { INumericSystemConverter } from '../../interfaces/INumericSystem.converter';
export class BinarySystemConverter implements INumericSystemConverter {
    fromDecimal(value: number): string {
        return value.toString(2);
    }

    toDecimal(value: string): number {
        return parseInt(value, 2);
    }
}