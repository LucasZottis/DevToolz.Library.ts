import { IFactory } from "./interfaces/IFactory";

export abstract class BaseFactory<TService> implements IFactory<TService> {
    protected services: IServiceCategory[] = [];
    protected map: Map<string, TService> = new Map();

    constructor(
        services: IServiceCategory[],
    ) {
        this._setServices = services;
        this._registerServices();
    }

    private set _setServices(services: IServiceCategory[]) {
        if (services.length === 0) {
            throw new Error("Nenhuma categoria de serviço foi fornecida.");
        }

        this.services = services;
    }

    private _registerServices(): void {
        this.services.forEach(category => {
            this.registerService(category);
        });
    }

    protected abstract registerService(service: IServiceCategory): void;

    protected throwServiceNotFoundError(serviceId: string): never {
        throw new Error(`O serviço solicitado não está implementado: ${serviceId}`);
    }

    createService(serviceId: string): TService {
        const service = this.map.get(serviceId);

        if (!service) {
            this.throwServiceNotFoundError(serviceId);
        }

        return service;
    }
} 