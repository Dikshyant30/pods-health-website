import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

    // private id = new BehaviorSubject('');
    // currentId:any = this.id.asObservable();
    // private name = new BehaviorSubject('');
    // currentName:any = this.id.asObservable();
    catObj = new BehaviorSubject({});
    // currentName:any = this.id.asObservable();
 
  private pId = new BehaviorSubject('');
  currentProdId:any = this.pId.asObservable();
  private pName = new BehaviorSubject('');
  currentProdName:any = this.pName.asObservable();
  private product = new BehaviorSubject('');
  currentProduct:any = this.product.asObservable();

  constructor() { }

  updatePath(msg: any) {
    this.catObj.next(msg);
      // this.id.next(id);
      // this.name.next(name);
      // console.log("id is => ", this.currentId);
      // console.log("name is => ", this.currentName);
  }

  updateProductPath(id: any) {
    this.pId.next(id);
    // this.pName.next(name);
    // this.currentProduct.next(product);
    // console.log("id is => ", this.pId);
    // console.log("name is => ", this.pName);
    // console.log("product is => ", this.product);

}
}
