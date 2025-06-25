import { ISerializationOption } from "./ISerializationOptions";

export interface ISerializationConverter {
    toJson(content: string, options?: ISerializationOption): string;
    fromJson(content: string, options?: ISerializationOption): string;
}