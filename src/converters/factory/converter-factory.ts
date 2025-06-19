import { IUnitConverter } from "../interfaces/IUnitConverter";

export class ConverterFactory {
    private _map: Map<string, IUnitConverter> = new Map();

    constructor() {
        this._registerConverters();
    }

    private _registerConverters(): void {
        this._map.set("volume", new (require("../volume/volume-converter").VolumeConverter)());
    }

    public getConverter(converterId: string): IUnitConverter {
        const converter = this._map.get(converterId);

        if (!converter) {
            throw new Error(`O conversor solicitado não está implementado`);
        }

        return converter;
    }
}