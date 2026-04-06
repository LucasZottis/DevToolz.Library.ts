import { SumCalculator } from "./services/sum/sum.calculator";
import { SubtractCalculator } from "./services/subtract/subtract.calculator";
import { MultiplyCalculator } from "./services/multiply/multiply.calculator";
import { DivideCalculator } from "./services/divide/divide.calculator";
import { ArithmeticProgressionCalculator } from "./services/arithmetic-progression/arithmetic-progression.calculator";
import { PearsonCorrelationCalculator } from "./services/pearson-correlation/pearson-correlation.calculator";
import { ThermalSensationCalculator } from "./services/thermal-sensation/thermal-sensation.calculator";

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

    static pearsonCorrelation(x: number[], y: number[]): number {
        return new PearsonCorrelationCalculator().calculate(x, y);
    }

    static heatIndex(temperature: number, humidity: number): number {
        return new ThermalSensationCalculator().heatIndex(temperature, humidity);
    }

    static thermalSensation(temperature: number, windSpeed: number, humidity: number): number {
        return new ThermalSensationCalculator().thermalSensation(temperature, windSpeed, humidity);
    }
}
