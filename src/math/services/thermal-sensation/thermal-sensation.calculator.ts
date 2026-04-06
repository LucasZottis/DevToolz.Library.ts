export class ThermalSensationCalculator {
    private windChill(temperature: number, windSpeed: number): number {
        return (
            13.12 +
            0.6215 * temperature -
            11.37 * Math.pow(windSpeed, 0.16) +
            0.3965 * temperature * Math.pow(windSpeed, 0.16)
        );
    }

    heatIndex(temperature: number, humidity: number): number {
        if (humidity < 0 || humidity > 100) {
            throw new Error("A umidade relativa deve estar entre 0 e 100.");
        }

        const T = temperature * 9 / 5 + 32;
        const R = humidity;

        const HI_F =
            -42.379 +
            2.04901523 * T +
            10.14333127 * R -
            0.22475541 * T * R -
            0.00683783 * T * T -
            0.05481717 * R * R +
            0.00122874 * T * T * R +
            0.00085282 * T * R * R -
            0.00000199 * T * T * R * R;

        return (HI_F - 32) * 5 / 9;
    }

    thermalSensation(temperature: number, windSpeed: number, humidity: number): number {
        if (windSpeed < 0) {
            throw new Error("A velocidade do vento não pode ser negativa.");
        }

        if (humidity < 0 || humidity > 100) {
            throw new Error("A umidade relativa deve estar entre 0 e 100.");
        }

        if (temperature >= 27) {
            return this.heatIndex(temperature, humidity);
        }

        if (temperature <= 10 && windSpeed > 4.8) {
            return this.windChill(temperature, windSpeed);
        }

        return temperature;
    }
}
