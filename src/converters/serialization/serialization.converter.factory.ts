import { BaseFactory } from "../../baseFactory";
import { IServiceCategory } from "../../interfaces/IServiceCategory";
import { ISerializationConverter } from "./interfaces/ISerialization.converter";
import { ISerializationConverterFactory } from "./interfaces/ISerialization.converter.factory";
import { serializations } from "./provider";

export class SerializationConverterFactory extends BaseFactory<ISerializationConverter> implements ISerializationConverterFactory {
    constructor() {
        super(serializations);
    }

    protected override throwServiceNotFoundError(serviceId: string): never {
        throw new Error(`O conversor solicitado não está implementado: ${serviceId}`);
    }

    protected registerService(service: IServiceCategory): void {
        const module = require("./services/" + service.id + "/" + service.id + ".converter");

        // Atribui o construtor: preferencialmente `default`, ou a primeira propriedade exportada
        const implementation = module.default || Object.values(module)[0];

        this.map.set(service.id, new implementation());
    }
}