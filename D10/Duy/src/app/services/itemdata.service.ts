import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import { item } from 'src/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemdataService {

  constructor(private db: AngularFirestore) { }

  public async createItem (itemshop: item){
    try{
    await this.db.collection("items").doc(itemshop.id).set(itemshop);
    alert(`Create item [${itemshop.ten}] was created`);
    }
    catch(err){
      alert(`Cannot create item [${itemshop.ten}]`);
    }
  }

}
