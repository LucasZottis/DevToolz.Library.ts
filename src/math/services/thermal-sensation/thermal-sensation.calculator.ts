export class ThermalSensationCalculator {
    calculate(temperature: number, windSpeed: number): number {
        if (windSpeed < 0) {
            throw new Error("A velocidade do vento não pode ser negativa.");
        }

        if (temperature <= 10 && windSpeed > 4.8) {
            return (
                13.12 +
                0.6215 * temperature -
                11.37 * Math.pow(windSpeed, 0.16) +
                0.3965 * temperature * Math.pow(windSpeed, 0.16)
            );
        }

        return temperature;
    }
}
