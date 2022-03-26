export class DeliveryTime {
    date!: string;
    hour!: number;

    public toString() {
        return this.date + 'T' +
            this.addZero(this.hour) +
            ':00:00.000Z';
    }

    private addZero(number: Number): string {
        if (number < 10) return '0' + number;
        else return String(number);
    }
}