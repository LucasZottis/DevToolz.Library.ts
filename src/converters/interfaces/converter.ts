import { Unit } from "../models/unit";

export interface IConverter {
    convert(value: number, fromUnit: string, toUnit: string): number;
    getUnits(): Unit[];
    getBaseUnit(): Unit;
}