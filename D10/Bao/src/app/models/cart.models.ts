import { Item } from "./item.models";

export class Cart
{
    SoLuong: number;
    item: Item;

    constructor(sl:number,cart:Item)
    {
        this.SoLuong=sl,
        this.item=cart
    }
}