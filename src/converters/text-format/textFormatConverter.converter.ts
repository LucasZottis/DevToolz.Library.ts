import { ITextConverterFactory } from "./inteface/ITextFormatConverter.converter.factory";
import { TextConverterFactory } from "./textFormatConverter.converter.factory";

export class TextConverter {
    private readonly factory!: ITextConverterFactory;

    constructor() {
        this.factory = new TextConverterFactory();
    }

    convert(value: string, from: string, to: string) {
        const source = this.factory.createService(from);
        const target = this.factory.createService(to);

        const text = source.toText(value);
        const result = target.fromText(text);

        return result;
    }
}