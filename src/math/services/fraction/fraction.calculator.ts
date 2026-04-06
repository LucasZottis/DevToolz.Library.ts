export interface Fraction {
    numerator: number;
    denominator: number;
}

export class FractionCalculator {
    private gcd(a: number, b: number): number {
        a = globalThis.Math.abs(a);
        b = globalThis.Math.abs(b);
        while (b !== 0) {
            const t = b;
            b = a % b;
            a = t;
        }
        return a;
    }

    decimalToFraction(decimal: number): Fraction {
        if (!isFinite(decimal)) throw new Error("O valor deve ser um número finito.");

        const isNegative = decimal < 0;
        const abs = globalThis.Math.abs(decimal);

        const decimalStr = abs.toString();
        const decimalIndex = decimalStr.indexOf('.');
        if (decimalIndex === -1) {
            return { numerator: isNegative ? -decimal : decimal, denominator: 1 };
        }

        const decimalPlaces = decimalStr.length - decimalIndex - 1;
        const denominator = globalThis.Math.pow(10, decimalPlaces);
        const numerator = globalThis.Math.round(abs * denominator);

        const divisor = this.gcd(numerator, denominator);
        const simplifiedNumerator = numerator / divisor;
        const simplifiedDenominator = denominator / divisor;

        return {
            numerator: isNegative ? -simplifiedNumerator : simplifiedNumerator,
            denominator: simplifiedDenominator,
        };
    }

    fractionToDecimal(numerator: number, denominator: number): number {
        if (denominator === 0) throw new Error("O denominador não pode ser zero.");
        return numerator / denominator;
    }
}
