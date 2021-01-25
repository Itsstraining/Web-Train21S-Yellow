import { item } from "./item.model";

export class cartItem {
    public item: item;
    public gia: number;
    public soluong: number;

    constructor(soluong: number,gia:number, item: item){
        this.soluong = soluong;
        this.gia = gia;
        this.item = item;
    };

    

    // public get tongGia() {
    //     return this.item.gia * this.soluong;
    // }
}