import { ISerializationConverterFactory } from "./interfaces/ISerialization.converter.factory";
import { ISerializationOption } from "./interfaces/ISerializationOptions";
import { SerializationConverterFactory } from "./serialization.converter.factory";

export class SerializationConverter {
    private readonly factory!: ISerializationConverterFactory;

    constructor() {
        this.factory = new SerializationConverterFactory();
    }

    convert(content: string, from: string, to: string, options?: ISerializationOption) {
        const source = this.factory.createService(from);
        const target = this.factory.createService(to);

        const json = source.toJson(content, options);
        const result = target.fromJson(json, options);

        return result;
    }
}