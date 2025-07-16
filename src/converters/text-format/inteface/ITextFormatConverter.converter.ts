export interface ITextFormatConverter {
    fromText(value: string): string;
    toText(value: string): string;
}