import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { item } from '../models/item.model';


@Injectable({
  providedIn: 'root'
})
export class ItemsdataService {

  constructor(private db:AngularFirestore) {}
  public async createShopItems(Item:item){
    try{
      await this.db.collection("item").doc(Item.ID).set(Item)
    }
    catch(err){
      alert ('Cannot create this item [${item.id}]')
    }
  }
}
