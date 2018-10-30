export class User {
    public id: number;
    public name: string;
    public phone: string;
    public birthday: string;

    constructor(id?: number, name?: string, phone?: string, birthday?: string) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.birthday = birthday;
    }
}