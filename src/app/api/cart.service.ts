import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

public productlist = new BehaviorSubject<any[]>([])
public cartitemlist:any[]=[]
  product: any;
constructor() { }

  gethome(){
    return this.productlist.asObservable();
  }

  addtocart(product:any){
    this.cartitemlist.push(product);
    this.productlist.next(this.cartitemlist)
    this.gettotalprice();
  }
  gettotalprice():number{
    let grandtotal = 0;
    this.cartitemlist.map((a:any)=>{
      grandtotal +=a.total;
    })
    return grandtotal;
  }
  removeallcart(){
    this.cartitemlist=[]
    this.productlist.next(this.cartitemlist);
  }
  removecart(product: any) {
    const indexToRemove = this.cartitemlist.findIndex(item => item.id === product.id);

    if (indexToRemove !== -1) {
      this.cartitemlist.splice(indexToRemove, 1);
      this.productlist.next([...this.cartitemlist]); 
    }
  }
}
