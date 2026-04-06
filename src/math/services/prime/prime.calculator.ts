export class PrimeCalculator {
    isPrime(n: number): boolean {
        if (n < 2) return false;
        if (n === 2) return true;
        if (n % 2 === 0) return false;

        for (let i = 3; i <= globalThis.Math.sqrt(n); i += 2) {
            if (n % i === 0) return false;
        }

        return true;
    }

    listPrimesInRange(min: number, max: number): number[] {
        if (min > max) throw new Error("O valor mínimo não pode ser maior que o valor máximo.");

        const primes: number[] = [];

        for (let n = min; n <= max; n++) {
            if (this.isPrime(n)) primes.push(n);
        }

        return primes;
    }
}
