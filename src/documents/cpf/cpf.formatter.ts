import { IFormatter } from "../interfaces/formatter.interface";

export class CpfFormatter implements IFormatter {
    applyMask(cpf: string): string {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }

    removeMask(cpf: string): string {
        return cpf.replace(/[^\d]/g, "");
    }
}