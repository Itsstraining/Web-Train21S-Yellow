import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import { iphone } from 'src/models/iphone.models';

@Injectable({
  providedIn: 'root'
})
export class ItemsdataService {

  constructor(private database:AngularFirestore) { }

  public async createItem (item:iphone)
  {
    try
    {
      await this.database.collection("items").doc(item.id).set(item);
      alert(`Item [${item.id}] was created`)

    } catch (err)
    {
      alert(`Cannot create item [${item.id}]`)
    }
  }
}
