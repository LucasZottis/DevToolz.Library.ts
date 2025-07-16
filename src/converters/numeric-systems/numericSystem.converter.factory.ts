import { BaseFactory } from "../../baseFactory";
import { IServiceCategory } from "../../interfaces/IServiceCategory";
import { INumericSystemConverter } from "./interfaces/INumericSystem.converter";
import { INumericSystemConverterFactory } from "./interfaces/INumericSystem.converter.factory";
import { systems } from "./provider";

export class NumericSystemConverterFactory extends BaseFactory<INumericSystemConverter> implements INumericSystemConverterFactory {
    constructor() {
        super(systems);
    }

    protected registerService(service: IServiceCategory): void {
        const module = require("./services/" + service.id + "/" + service.id + ".converter");

        // Atribui o construtor: preferencialmente `default`, ou a primeira propriedade exportada
        const implementation = module.default || Object.values(module)[0];

        this.map.set(service.id, new implementation());
    }
}