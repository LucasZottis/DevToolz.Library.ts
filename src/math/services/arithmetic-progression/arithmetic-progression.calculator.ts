export class ArithmeticProgressionCalculator {
    /**
     * Calcula o n-ésimo termo da PA: an = a1 + (n - 1) * r
     */
    nthTerm(firstTerm: number, commonDifference: number, n: number): number {
        return firstTerm + (n - 1) * commonDifference;
    }

    /**
     * Calcula a soma dos n primeiros termos da PA: Sn = n * (a1 + an) / 2
     */
    sum(firstTerm: number, commonDifference: number, n: number): number {
        const lastTerm = this.nthTerm(firstTerm, commonDifference, n);
        return (n * (firstTerm + lastTerm)) / 2;
    }

    /**
     * Gera a sequência dos n primeiros termos da PA
     */
    sequence(firstTerm: number, commonDifference: number, n: number): number[] {
        const terms: number[] = [];
        for (let i = 1; i <= n; i++) {
            terms.push(this.nthTerm(firstTerm, commonDifference, i));
        }
        return terms;
    }
}
