import { iphone } from "./iphone.models";

export class Cart {
    public quantity: number;
    public iphone: iphone;

    constructor(quantity: number, iphone: iphone) {

        this.quantity = quantity;
        this.iphone = iphone;
    }

    // public get totalPrice()
    // {
    //     return this.iphone.price * this.quantity;
    // }

}