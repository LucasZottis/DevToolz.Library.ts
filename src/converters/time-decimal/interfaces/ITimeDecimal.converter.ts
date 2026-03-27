export interface ITimeDecimalConverter {
    paraDecimal(horas: number, minutos: number, segundos: number): number;
    paraHora(decimal: number): string;
}
