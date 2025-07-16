import { ITextFormatConverterFactory } from "./inteface/ITextFormatConverter.converter.factory";
import { TextFormatConverterFactory } from "./textFormatConverter.converter.factory";

export class TextConverter {
    private readonly factory!: ITextFormatConverterFactory;

    constructor() {
        this.factory = new TextFormatConverterFactory();
    }

    convert(value: string, from: string, to: string) {
        const source = this.factory.createService(from);
        const target = this.factory.createService(to);

        const text = source.toText(value);
        const result = target.fromText(text);

        return result;
    }
}