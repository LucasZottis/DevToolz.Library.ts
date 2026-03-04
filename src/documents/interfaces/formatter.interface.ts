export interface IFormatter {
    applyMask(document: string): string;
    removeMask(document: string): string;
}