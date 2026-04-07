export class GcdCalculator {
    private gcdTwo(a: number, b: number): number {
        a = globalThis.Math.abs(a);
        b = globalThis.Math.abs(b);

        while (b !== 0) {
            const t = b;
            b = a % b;
            a = t;
        }

        return a;
    }

    calculate(...values: number[]): number {
        if (values.length < 2) throw new Error("São necessários pelo menos dois valores.");
        if (values.some(v => !Number.isInteger(v))) throw new Error("Os valores devem ser números inteiros.");
        if (values.every(v => v === 0)) throw new Error("Todos os valores não podem ser zero simultaneamente.");

        return values.reduce((acc, v) => this.gcdTwo(acc, v));
    }
}
