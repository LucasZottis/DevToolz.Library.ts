import { SumCalculator } from "./services/sum/sum.calculator";
import { SubtractCalculator } from "./services/subtract/subtract.calculator";
import { MultiplyCalculator } from "./services/multiply/multiply.calculator";
import { DivideCalculator } from "./services/divide/divide.calculator";
import { ArithmeticProgressionCalculator } from "./services/arithmetic-progression/arithmetic-progression.calculator";
import { PearsonCorrelationCalculator } from "./services/pearson-correlation/pearson-correlation.calculator";
import { ThermalSensationCalculator } from "./services/thermal-sensation/thermal-sensation.calculator";
import { PrimeCalculator } from "./services/prime/prime.calculator";
import { EquationCalculator } from "./services/equation/equation.calculator";
import { FractionCalculator, Fraction } from "./services/fraction/fraction.calculator";
import { RuleOfThreeCalculator, CompoundFactor } from "./services/rule-of-three/rule-of-three.calculator";
import { GeometricAreaCalculator } from "./services/geometric-area/geometric-area.calculator";
import { GcdCalculator } from "./services/gcd/gcd.calculator";

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

    static isPrime(n: number): boolean {
        return new PrimeCalculator().isPrime(n);
    }

    static listPrimesInRange(min: number, max: number): number[] {
        return new PrimeCalculator().listPrimesInRange(min, max);
    }

    static firstDegreeEquation(a: number, b: number): number {
        return new EquationCalculator().firstDegree(a, b);
    }

    static secondDegreeEquation(a: number, b: number, c: number) {
        return new EquationCalculator().secondDegree(a, b, c);
    }

    static decimalToFraction(decimal: number): Fraction {
        return new FractionCalculator().decimalToFraction(decimal);
    }

    static fractionToDecimal(numerator: number, denominator: number): number {
        return new FractionCalculator().fractionToDecimal(numerator, denominator);
    }

    static ruleOfThreeDirect(a: number, b: number, c: number): number {
        return new RuleOfThreeCalculator().simplesDireta(a, b, c);
    }

    static ruleOfThreeInverse(a: number, b: number, c: number): number {
        return new RuleOfThreeCalculator().simplesInversa(a, b, c);
    }

    static ruleOfThreeCompound(b: number, fatores: CompoundFactor[]): number {
        return new RuleOfThreeCalculator().composta(b, fatores);
    }

    static squareArea(side: number): number {
        return new GeometricAreaCalculator().square(side);
    }

    static rectangleArea(base: number, height: number): number {
        return new GeometricAreaCalculator().rectangle(base, height);
    }

    static triangleArea(base: number, height: number): number {
        return new GeometricAreaCalculator().triangle(base, height);
    }

    static circleArea(radius: number): number {
        return new GeometricAreaCalculator().circle(radius);
    }

    static trapezoidArea(base1: number, base2: number, height: number): number {
        return new GeometricAreaCalculator().trapezoid(base1, base2, height);
    }

    static rhombusArea(diagonal1: number, diagonal2: number): number {
        return new GeometricAreaCalculator().rhombus(diagonal1, diagonal2);
    }

    static parallelogramArea(base: number, height: number): number {
        return new GeometricAreaCalculator().parallelogram(base, height);
    }

    static gcd(...values: number[]): number {
        return new GcdCalculator().calculate(...values);
    }
}
