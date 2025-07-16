export interface IFactory<TService> {
    createService(serviceId: string): TService;
}