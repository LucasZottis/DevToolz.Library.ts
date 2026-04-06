export class GcdCalculator {
    calculate(a: number, b: number): number {
        if (!Number.isInteger(a) || !Number.isInteger(b)) throw new Error("Os valores devem ser números inteiros.");
        if (a === 0 && b === 0) throw new Error("Os dois valores não podem ser zero simultaneamente.");

        a = globalThis.Math.abs(a);
        b = globalThis.Math.abs(b);

        while (b !== 0) {
            const t = b;
            b = a % b;
            a = t;
        }

        return a;
    }
}
