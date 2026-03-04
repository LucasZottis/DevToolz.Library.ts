import { IFormatter } from "../interfaces/formatter.interface";

export class CnpjFormatter implements IFormatter {
    applyMask(cnpj: string): string {
        return cnpj.replace(
            /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
            "$1.$2.$3/$4-$5"
        );
    }

    removeMask(cnpj: string): string {
        return cnpj.replace(/[^\d]/g, "");
    }
}