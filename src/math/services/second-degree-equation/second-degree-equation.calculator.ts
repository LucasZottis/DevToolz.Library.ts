export interface SecondDegreeEquationResult {
    delta: number;
    x1: number | null;
    x2: number | null;
}

export class SecondDegreeEquationCalculator {
    calculate(a: number, b: number, c: number): SecondDegreeEquationResult {
        if (a === 0) throw new Error("O coeficiente 'a' não pode ser zero em uma equação de 2º grau.");

        const delta = b * b - 4 * a * c;

        if (delta < 0) {
            return { delta, x1: null, x2: null };
        }

        const sqrtDelta = globalThis.Math.sqrt(delta);
        const x1 = (-b + sqrtDelta) / (2 * a);
        const x2 = (-b - sqrtDelta) / (2 * a);

        return { delta, x1, x2 };
    }
}
