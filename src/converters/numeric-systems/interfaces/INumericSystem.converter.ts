export interface INumericSystemConverter {
    fromDecimal(value: number): string;
    toDecimal(value: string): number;
}