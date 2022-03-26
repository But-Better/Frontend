export class Address {
    id!: string;
    name!: string;
    companyName!: string;
    street!: string;
    city!: string;
    postCode!: string;
    country!: string;

    public getId() {
        return this.id;
    }
}