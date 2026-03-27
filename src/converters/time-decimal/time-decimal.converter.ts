import { ITimeDecimalConverter } from './interfaces/ITimeDecimal.converter';

export class TimeDecimalConverter implements ITimeDecimalConverter {
    paraDecimal(horas: number, minutos: number, segundos: number): number {
        return horas + (minutos / 60) + (segundos / 3600);
    }

    paraHora(decimal: number): string {
        const horasInteiras = Math.floor(decimal);
        const parteDecimal = decimal - horasInteiras;

        const minutos = Math.floor(parteDecimal * 60);
        const segundos = Math.floor((parteDecimal * 60 - minutos) * 60);

        const horas = horasInteiras.toString().padStart(2, '0');
        const mins = minutos.toString().padStart(2, '0');
        const segs = segundos.toString().padStart(2, '0');

        return `${horas}:${mins}:${segs}`;
    }
}
