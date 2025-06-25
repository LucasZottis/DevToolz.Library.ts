import { Unit } from "../models/unit";

export interface IUnitConverter {
    convert(value: number, fromUnit: string, toUnit: string): number;
    getUnits(): Unit[];
    getBaseUnit(): Unit;
    getUnitById(id: string): Unit | undefined;
    getUnitBySymbol(symbol: string): Unit | undefined;
    getUnitByName(name: string): Unit | undefined;
}