import { ISerializationConverter } from "../../interfaces/ISerialization.converter";
import { ISerializationOption } from "../../interfaces/ISerializationOptions";

export class CsvConverter implements ISerializationConverter {
    toJson(content: string, options?: ISerializationOption): string {
        const separator = options?.separatorCharacter ?? ',';
        const lines = content.split('\n');
        const headers = lines[0].split(separator);
        let jsonContent: { [key: string]: any }[] = [];

        lines.slice(1).map((line, index) => {
            const data = line.replaceAll(" ", "_").split(separator);
            const item: { [key: string]: number | string | null } = {};

            if (headers.length < data.length)
                throw new Error(`A linha ${index + 1} está com mais colunas do que a quantidade de cabeçalho`);

            if (headers.length > data.length)
                throw new Error(`A linha ${index + 1} está com menos colunas do que a quantidade de cabeçalho`);

            data.map(((value, index) => {
                const header = headers[index];
                const info = value.replaceAll("\"", "").replaceAll("\r", "");

                if (options?.considerEmptyAsNull ?? false)
                    item[header] = null;
                else
                    item[header] = info;
            }));

            jsonContent.push(item);
        });

        const json = JSON.stringify(jsonContent, null, 2);

        return json;
    }

    fromJson(content: string, options?: ISerializationOption): string {
        if (content === "")
            throw new Error('O conteúdo JSON não pode ser convertido para CSV válido.');

        const json = JSON.parse(content);

        if (!Array.isArray(json)) {
            throw new Error("O conteúdo JSON deve ser um array.");
        }

        if (json.length === 0)
            throw new Error('Não há conteúdo no JSON fornecido.');

        const headers = Object.keys(json[0]);

        if (headers.length === 0)
            throw new Error('Não há conteúdo no JSON fornecido.');

        const separator = options?.separatorCharacter ?? ',';
        const csvLines = json.map(item => {
            return headers.map(header => {
                const value = item[header];

                if (value === null || value === undefined)
                    return '';

                return value.toString().replace(/,/g, ''); // Remover vírgulas para evitar problemas no CSV
            }).join(separator);
        });

        csvLines.unshift(headers.join(separator)); // Adicionar cabeçalho
        const csvContent = csvLines.join('\n');

        // Tratar o caso de conteúdo vazio
        if (csvContent.trim() === '') {
            return '';
        }

        // Verificar se o conteúdo CSV é válido
        const isValidCsv = csvContent.split('\n').every(line => {
            return line.split(separator).length === headers.length;
        });

        if (!isValidCsv) {
            throw new Error("O conteúdo JSON não pode ser convertido para CSV válido.");
        }

        // Retornar o conteúdo CSV
        return csvContent;
    }
}