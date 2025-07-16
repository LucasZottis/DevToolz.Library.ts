import exp from "constants";
import { BaseFactory } from "../../baseFactory";
import { textFormats } from "./provider";
import { ITextFormatConverter } from "./inteface/ITextFormatConverter.converter";
import { ITextFormatConverterFactory } from "./inteface/ITextFormatConverter.converter.factory";
import { IServiceCategory } from "../../interfaces/IServiceCategory";

export class TextFormatConverterFactory extends BaseFactory<ITextFormatConverter> implements ITextFormatConverterFactory {
    constructor() {
        super(textFormats);
    }

    protected registerService(service: IServiceCategory): void {
        const module = require("./services/" + service.id + "/" + service.id + "-format" + ".converter");

        // Atribui o construtor: preferencialmente `default`, ou a primeira propriedade exportada
        const implementation = module.default || Object.values(module)[0];

        this.map.set(service.id, new implementation());
    }
}