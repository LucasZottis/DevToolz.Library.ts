export type ProportionType = 'direta' | 'inversa';

export interface CompoundFactor {
    a: number;
    c: number;
    proporcao: ProportionType;
}

export class RuleOfThreeCalculator {
    /**
     * Regra de 3 simples direta.
     * a está para b assim como c está para x.
     * x = (b * c) / a
     */
    simplaDireta(a: number, b: number, c: number): number {
        if (a === 0) throw new Error("O valor 'a' não pode ser zero.");
        if (!isFinite(a) || !isFinite(b) || !isFinite(c)) throw new Error("Os valores devem ser números finitos.");
        return (b * c) / a;
    }

    /**
     * Regra de 3 simples inversa.
     * a está para b inversamente assim como c está para x.
     * x = (a * b) / c
     */
    simplesInversa(a: number, b: number, c: number): number {
        if (c === 0) throw new Error("O valor 'c' não pode ser zero.");
        if (!isFinite(a) || !isFinite(b) || !isFinite(c)) throw new Error("Os valores devem ser números finitos.");
        return (a * b) / c;
    }

    /**
     * Regra de 3 composta.
     * Dado um resultado b correspondente a múltiplos fatores,
     * calcula x correspondente aos novos fatores.
     * @param b - o resultado conhecido
     * @param fatores - lista de pares {a, c, proporcao} onde 'a' é o valor base,
     *                  'c' é o novo valor e 'proporcao' indica se é direta ou inversa
     */
    composta(b: number, fatores: CompoundFactor[]): number {
        if (fatores.length === 0) throw new Error("É necessário pelo menos um fator.");
        if (!isFinite(b)) throw new Error("Os valores devem ser números finitos.");

        for (const fator of fatores) {
            if (!isFinite(fator.a) || !isFinite(fator.c)) throw new Error("Os valores devem ser números finitos.");
            if (fator.proporcao === 'direta' && fator.a === 0) throw new Error("O valor 'a' de um fator direto não pode ser zero.");
            if (fator.proporcao === 'inversa' && fator.c === 0) throw new Error("O valor 'c' de um fator inverso não pode ser zero.");
        }

        let x = b;
        for (const fator of fatores) {
            if (fator.proporcao === 'direta') {
                x = (x * fator.c) / fator.a;
            } else {
                x = (x * fator.a) / fator.c;
            }
        }
        return x;
    }
}
