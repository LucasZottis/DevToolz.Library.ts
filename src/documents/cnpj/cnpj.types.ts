/**
 * CNPJ format mode.
 *
 * - `'numeric'`       – classic all-digit CNPJ (pre-July 2026).
 * - `'alphanumeric'`  – new format with letters A-Z in the 12-char base
 *                        (IN RFB nº 2.229/2024, effective July 2026).
 *
 * When omitted from option objects the format is auto-detected from the
 * input: any letter in the first 12 positions triggers `'alphanumeric'`.
 */
export type CnpjFormat = 'numeric' | 'alphanumeric';

/**
 * Options accepted by CNPJ validation, parsing and generation methods.
 * @see Instrução Normativa RFB nº 2.229/2024
 */
export interface CnpjOptions {
    /**
     * Explicit format to enforce.
     * When omitted the format is auto-detected from the input value so that
     * existing callers that never set this option continue to work unchanged.
     */
    format?: CnpjFormat;
}
