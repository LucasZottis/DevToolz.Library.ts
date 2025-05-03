export class TimeConverter {
    public static timeToDecimal(hours: number, minutes: number, seconds: number): number {
        return hours + (minutes / 60) + (seconds / 3600);
    }

    public static decimalToTime(decimal: number) {
        // Lógica para conversão de decimal para hora
        // Implementação para o modo inverso
        // const decimalValue = parseFloat(decimal);
        const totalHours = decimal;

        const wholeHours = Math.floor(totalHours);
        const decimalPart = totalHours - wholeHours;

        const mins = Math.floor(decimalPart * 60);
        const secs = Math.floor((decimalPart * 60 - mins) * 60);

        const hours = wholeHours;
        const minutes = mins;
        const seconds = secs;

        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }
}