import { ISerializationConverter } from "../../interfaces/ISerialization.converter";

export class JsonConverter implements ISerializationConverter {
    toJson(content: string): string {
        return content;
    }

    fromJson(content: string): string {
        return content;
    }
}