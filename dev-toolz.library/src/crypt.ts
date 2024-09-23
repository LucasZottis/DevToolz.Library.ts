import { CipherGCMTypes, createCipheriv, createDecipheriv } from 'crypto';
import { CryptProvider } from './enums/cryptProvider';

export class Crypt {
    private _getIV(provider: CryptProvider): Buffer {
        switch (provider) {
            case CryptProvider.Rijndael:
                return Buffer.from([0xf, 0x6f, 0x13, 0x2e, 0x35, 0xc2, 0xcd, 0xf9, 0x5, 0x46, 0x9c, 0xea, 0xa8, 0x4b, 0x73, 0xcc]);
            default:
                return Buffer.from([0xf, 0x6f, 0x13, 0x2e, 0x35, 0xc2, 0xcd, 0xf9]);
        }
    }

    private _getAlgorithm(provider: CryptProvider): string {
        switch (provider) {
            case CryptProvider.Rijndael:
                return 'aes-256-cbc';
            case CryptProvider.RC2:
                return 'rc2-cbc';
            case CryptProvider.DES:
                return 'des-cbc';
            case CryptProvider.TripleDES:
                return 'des-ede3-cbc';
            default:
                throw new Error('Invalid crypt provider');
        }
    }

    private _getKeyBytes(key: string, algorithm: string): Buffer {
        let validSize: number;

        // Define o tamanho da chave com base no algoritmo
        switch (algorithm) {
            case 'aes-256-cbc':
                validSize = 32; // 32 bytes = 256 bits
                break;
            case 'rc2-cbc':
                validSize = 16; // 16 bytes = 128 bits
                break;
            case 'des-cbc':
                validSize = 8; // 8 bytes = 64 bits
                break;
            case 'des-ede3-cbc':
                validSize = 24; // 24 bytes = 192 bits (3DES)
                break;
            default:
                throw new Error('Invalid algorithm');
        }

        let keyBuffer = Buffer.from(key);

        // Ajusta o tamanho da chave para o tamanho válido
        if (keyBuffer.length > validSize) {
            keyBuffer = keyBuffer.slice(0, validSize); // Trunca se maior
        } else if (keyBuffer.length < validSize) {
            keyBuffer = Buffer.concat([keyBuffer, Buffer.alloc(validSize - keyBuffer.length, '*')]); // Preenche se menor
        }

        return keyBuffer;
    }

    public encrypt(value: string, key: string, provider: CryptProvider): string {
        const algorithm = this._getAlgorithm(provider);
        const keyBuffer = this._getKeyBytes(key, algorithm);
        const iv = this._getIV(provider);

        const cipher = createCipheriv(algorithm, keyBuffer, iv);
        let encrypted = cipher.update(value, 'utf8', 'base64');
        encrypted += cipher.final('base64');

        return encrypted;
    }

    public decrypt(value: string, key: string, provider: CryptProvider): string | null {
        const algorithm = this._getAlgorithm(provider);
        const keyBuffer = this._getKeyBytes(key, algorithm);
        const iv = this._getIV(provider);

        const decipher = createDecipheriv(algorithm, keyBuffer, iv);

        try {
            let decrypted = decipher.update(value, 'base64', 'utf8');
            decrypted += decipher.final('utf8');
            return decrypted;
        } catch (error) {
            return null; // Retorna null em caso de erro
        }
    }
}