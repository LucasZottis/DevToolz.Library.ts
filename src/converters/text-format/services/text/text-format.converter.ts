import { ITextFormatConverter } from "../../inteface/ITextFormatConverter.converter";

export class TextFormatConverter implements ITextFormatConverter {
    fromText(value: string): string {
        return value;
    }
    toText(value: string): string {
        return value;
    }
}