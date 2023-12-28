import { Component,OnInit } from '@angular/core';
import { CartService } from '../api/cart.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  public products!:any[];
  public grandtotal:number=0;

  constructor(private cart:CartService, private toast:NgToastService){}

  ngOnInit(): void {
    this.cart.gethome().subscribe((res: any[])=>{
      this.products = res;
      this.grandtotal= this.cart.gettotalprice();
    });
  }
  emptycart(){
    this.toast.warning({detail:'Deleted From Cart',summary:'All Items are removed from the Cart',duration:3000});
    this.cart.removeallcart();
  }
  delete(item: any){
    this.toast.warning({detail:'Removed From Cart',summary:'Item has been deleted',duration:1000});
    this.cart.removecart(item);
  }
}
