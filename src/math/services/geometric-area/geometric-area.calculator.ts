export class GeometricAreaCalculator {
    square(side: number): number {
        if (side < 0) throw new Error("O lado não pode ser negativo.");
        return side * side;
    }

    rectangle(base: number, height: number): number {
        if (base < 0) throw new Error("A base não pode ser negativa.");
        if (height < 0) throw new Error("A altura não pode ser negativa.");
        return base * height;
    }

    triangle(base: number, height: number): number {
        if (base < 0) throw new Error("A base não pode ser negativa.");
        if (height < 0) throw new Error("A altura não pode ser negativa.");
        return (base * height) / 2;
    }

    circle(radius: number): number {
        if (radius < 0) throw new Error("O raio não pode ser negativo.");
        return globalThis.Math.PI * radius * radius;
    }

    trapezoid(base1: number, base2: number, height: number): number {
        if (base1 < 0) throw new Error("A base maior não pode ser negativa.");
        if (base2 < 0) throw new Error("A base menor não pode ser negativa.");
        if (height < 0) throw new Error("A altura não pode ser negativa.");
        return ((base1 + base2) * height) / 2;
    }

    rhombus(diagonal1: number, diagonal2: number): number {
        if (diagonal1 < 0) throw new Error("A diagonal maior não pode ser negativa.");
        if (diagonal2 < 0) throw new Error("A diagonal menor não pode ser negativa.");
        return (diagonal1 * diagonal2) / 2;
    }

    parallelogram(base: number, height: number): number {
        if (base < 0) throw new Error("A base não pode ser negativa.");
        if (height < 0) throw new Error("A altura não pode ser negativa.");
        return base * height;
    }
}
