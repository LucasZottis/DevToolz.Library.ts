export class PearsonCorrelationCalculator {
    private mean(values: number[]): number {
        return values.reduce((sum, value) => sum + value, 0) / values.length;
    }

    calculate(x: number[], y: number[]): number {
        if (x.length !== y.length) {
            throw new Error("Arrays must have the same length.");
        }

        if (x.length === 0) {
            throw new Error("Arrays must not be empty.");
        }

        const meanX = this.mean(x);
        const meanY = this.mean(y);

        let numerator = 0;
        let sumSquaredX = 0;
        let sumSquaredY = 0;

        for (let i = 0; i < x.length; i++) {
            const diffX = x[i] - meanX;
            const diffY = y[i] - meanY;
            numerator += diffX * diffY;
            sumSquaredX += diffX * diffX;
            sumSquaredY += diffY * diffY;
        }

        const denominator = Math.sqrt(sumSquaredX * sumSquaredY);

        if (denominator === 0) {
            throw new Error("Correlation is undefined when one or both arrays have zero variance.");
        }

        return numerator / denominator;
    }
}
