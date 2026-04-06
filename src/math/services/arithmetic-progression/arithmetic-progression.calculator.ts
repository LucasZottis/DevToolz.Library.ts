export class ArithmeticProgressionCalculator {
    private nthTerm(firstTerm: number, commonDifference: number, n: number): number {
        return firstTerm + (n - 1) * commonDifference;
    }

    private sum(firstTerm: number, commonDifference: number, n: number): number {
        const lastTerm = this.nthTerm(firstTerm, commonDifference, n);
        return (n * (firstTerm + lastTerm)) / 2;
    }

    private sequence(firstTerm: number, commonDifference: number, n: number): number[] {
        const terms: number[] = [];
        for (let i = 1; i <= n; i++) {
            terms.push(this.nthTerm(firstTerm, commonDifference, i));
        }
        return terms;
    }

    calculate(firstTerm: number, commonDifference: number, n: number) {
        return {
            nthTerm: this.nthTerm(firstTerm, commonDifference, n),
            sum: this.sum(firstTerm, commonDifference, n),
            sequence: this.sequence(firstTerm, commonDifference, n),
        };
    }
}
