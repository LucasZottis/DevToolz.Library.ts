import { SumCalculator } from "./services/sum/sum.calculator";
import { SubtractCalculator } from "./services/subtract/subtract.calculator";
import { MultiplyCalculator } from "./services/multiply/multiply.calculator";
import { DivideCalculator } from "./services/divide/divide.calculator";
import { ArithmeticProgressionCalculator } from "./services/arithmetic-progression/arithmetic-progression.calculator";

export class Math {
    static sum(a: number, b: number): number {
        return new SumCalculator().calculate(a, b);
    }

    static subtract(a: number, b: number): number {
        return new SubtractCalculator().calculate(a, b);
    }

    static multiply(a: number, b: number): number {
        return new MultiplyCalculator().calculate(a, b);
    }

    static divide(a: number, b: number): number {
        return new DivideCalculator().calculate(a, b);
    }

    static arithmeticProgression(firstTerm: number, commonDifference: number, n: number) {
        return new ArithmeticProgressionCalculator().calculate(firstTerm, commonDifference, n);
    }
}
