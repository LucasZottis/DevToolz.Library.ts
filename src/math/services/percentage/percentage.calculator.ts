export class PercentageCalculator {
    numberToPercentage(value: number, total: number): number {
        if (total === 0) throw new Error("O total não pode ser zero.");
        return (value / total) * 100;
    }

    percentageToValue(percentage: number, total: number): number {
        return (percentage / 100) * total;
    }
}
