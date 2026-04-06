export class FirstDegreeEquationCalculator {
    calculate(a: number, b: number): number {
        if (a === 0) throw new Error("O coeficiente 'a' não pode ser zero em uma equação de 1º grau.");

        const result = -b / a;
        return result === 0 ? 0 : result;
    }
}
