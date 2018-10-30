export class Restaurant {
    public id: number;
    public name: string;
    public description: string;
    public address: string;
    public image: string;
    public price: string;

    constructor(id?: number,
        name?: string,
        description?: string,
        address?: string,
        image?: string,
        price?: string) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.image = image;
        this.price = price;
        this.description = description;
    }

}