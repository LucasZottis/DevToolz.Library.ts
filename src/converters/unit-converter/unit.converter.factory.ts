import { BaseFactory } from "../../baseFactory";
import { IServiceCategory } from "../../interfaces/IServiceCategory";
import { IUnitConverter } from "./interfaces/IUnitConverter";
import { IUnitConverterFactory } from "./interfaces/IUnitConverterFactory";
import { categories } from "./provider";

export class UnitConverterFactory extends BaseFactory<IUnitConverter> implements IUnitConverterFactory {
    constructor() {
        super(categories);
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