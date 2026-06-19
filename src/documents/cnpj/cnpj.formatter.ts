import { IFormatter } from "../interfaces/formatter.interface";

export class CnpjFormatter implements IFormatter {
    applyMask(cnpj: string): string {
        return cnpj.toUpperCase().replace(
            /([A-Z0-9]{2})([A-Z0-9]{3})([A-Z0-9]{3})([A-Z0-9]{4})(\d{2})/i,
            "$1.$2.$3/$4-$5"
        );
    }

    removeMask(cnpj: string): string {
        return cnpj.replace(/[^A-Z0-9]/gi, "").toUpperCase();
    }
}
