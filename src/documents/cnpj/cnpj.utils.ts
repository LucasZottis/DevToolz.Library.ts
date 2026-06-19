/**
 * Converts a single CNPJ character to its numeric value for DV calculation.
 *
 * Uses `charCode - 48` as required by IN RFB nº 2.229/2024:
 *   digits '0'–'9'  →  0–9   (ASCII 48-57 minus 48)
 *   letters 'A'–'Z' → 17–42  (ASCII 65-90 minus 48)
 *
 * Input is normalised to uppercase before conversion.
 */
export function charToDigitValue(char: string): number {
    return char.toUpperCase().charCodeAt(0) - 48;
}

/**
 * Calculates a single CNPJ verifying digit with the modulo-11 algorithm.
 *
 * The multiplier starts at `startCounter` and decrements on each character,
 * cycling back to 9 once it drops below 2.
 *
 * For DV1 call with startCounter=5 over the 12-char base  → weights 5,4,3,2,9,8,7,6,5,4,3,2
 * For DV2 call with startCounter=6 over the 13-char base  → weights 6,5,4,3,2,9,8,7,6,5,4,3,2
 */
export function calcVerifyingDigit(startCounter: number, digits: string): string {
    let result = 0;
    for (const char of digits) {
        result += charToDigitValue(char) * startCounter;
        startCounter--;
        if (startCounter < 2)
            startCounter = 9;
    }
    const rest = result % 11;
    return (rest < 2 ? 0 : 11 - rest).toString();
}

/**
 * Returns true when every character in the string is the same.
 * Works for strings of any length and for both numeric and alphanumeric CNPJs.
 */
export function isRepeatedChars(str: string): boolean {
    return str.length > 0 && /^(.)\1+$/.test(str);
}
