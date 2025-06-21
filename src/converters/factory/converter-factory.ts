import { IUnitConverter } from "../interfaces/IUnitConverter";
import { categories } from "../provider";

export class ConverterFactory {
    private _map: Map<string, IUnitConverter> = new Map();

    constructor() {
        this._registerConverters();
    }

    private _registerConverters(): void {
        categories.forEach(category => {
            // this._map.set(category.id, new (require("../services/" + category.id + ".converter"))());
            const module = require("../services/" + category.id + "/" + category.id + ".converter");

            // Atribui o construtor: preferencialmente `default`, ou a primeira propriedade exportada
            const ConverterClass = module.default || Object.values(module)[0];

            this._map.set(category.id, new ConverterClass());
        });
        // this._map.set("weight-mass", new (require("../weight-mass/weight-mass.converter").WeightMassConverter)());
    }

    public getConverter(converterId: string): IUnitConverter {
        const converter = this._map.get(converterId);

        if (!converter) {
            throw new Error(`O conversor solicitado não está implementado`);
        }

        return converter;
    }
}