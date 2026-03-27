export enum NumberWordType {
    Numeric  = 'numeric',
    Monetary = 'monetary'
}

const ones: string[] = [
    'zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove',
    'dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'
];

const tens: string[] = [
    '', '', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'
];

const hundreds: string[] = [
    '', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos',
    'seiscentos', 'setecentos', 'oitocentos', 'novecentos'
];

function groupToWords(n: number): string {
    if (n === 0) return '';
    if (n === 100) return 'cem';

    const parts: string[] = [];

    if (n >= 100) {
        parts.push(hundreds[Math.floor(n / 100)]);
        n %= 100;
    }

    if (n >= 20) {
        parts.push(tens[Math.floor(n / 10)]);
        const unit = n % 10;
        if (unit > 0) parts.push(ones[unit]);
    } else if (n > 0) {
        parts.push(ones[n]);
    }

    return parts.join(' e ');
}

function numberToWords(n: number): string {
    if (n === 0) return 'zero';
    if (n < 0) return 'menos ' + numberToWords(-n);

    const parts: string[] = [];
    let remaining = n;

    if (remaining >= 1_000_000_000) {
        const billions = Math.floor(remaining / 1_000_000_000);
        parts.push(groupToWords(billions) + (billions === 1 ? ' bilhão' : ' bilhões'));
        remaining %= 1_000_000_000;
    }

    if (remaining >= 1_000_000) {
        const millions = Math.floor(remaining / 1_000_000);
        parts.push(groupToWords(millions) + (millions === 1 ? ' milhão' : ' milhões'));
        remaining %= 1_000_000;
    }

    if (remaining >= 1_000) {
        const thousands = Math.floor(remaining / 1_000);
        parts.push(thousands === 1 ? 'mil' : groupToWords(thousands) + ' mil');
        remaining %= 1_000;
    }

    if (remaining > 0) {
        parts.push(groupToWords(remaining));
    }

    return parts.join(' e ');
}

declare global {
    interface Number {
        between(lowestValue: Number, highestValue: Number, inclusive: boolean): boolean;
        isEqual(value: Number): boolean;
        isNotEqual(value: Number): boolean;
        greaterThan(value: Number): boolean;
        lessThan(value: Number): boolean;
        toBoolean(value: Number): boolean;
        toWords(type?: NumberWordType): string;
    }
}

Number.prototype.isEqual = function (value: number): boolean {
    return this.valueOf() === value;
}

Number.prototype.isNotEqual = function (value: number): boolean {
    return this.valueOf() !== value;
}

Number.prototype.greaterThan = function (value: number): boolean {
    return this.valueOf() > value;
}

Number.prototype.lessThan = function (value: number): boolean {
    return this.valueOf() < value;
}

Number.prototype.between = function (lowestValue: number, highestValue: number, inclusive: boolean): boolean {
    let value = this.valueOf();

    if (inclusive)
        return value >= lowestValue && value <= highestValue;
    else
        return value > lowestValue && value < highestValue;
}

Number.prototype.toBoolean = function (): boolean {
    return Math.abs(this as number) !== 0;
}

Number.prototype.toWords = function (type: NumberWordType = NumberWordType.Numeric): string {
    const value = this.valueOf();

    if (type === NumberWordType.Numeric) {
        return numberToWords(value);
    }

    // Monetary
    const negative = value < 0;
    const abs = Math.abs(value);
    const intPart = Math.floor(abs);
    const cents = Math.round((abs - intPart) * 100);
    const parts: string[] = [];

    if (intPart > 0) {
        const reaisWord = intPart === 1 ? 'real' : 'reais';
        parts.push(numberToWords(intPart) + ' ' + reaisWord);
    }

    if (cents > 0) {
        const centavosWord = cents === 1 ? 'centavo' : 'centavos';
        parts.push(numberToWords(cents) + ' ' + centavosWord);
    }

    if (parts.length === 0) {
        return 'zero reais';
    }

    const result = parts.join(' e ');
    return negative ? 'menos ' + result : result;
}
