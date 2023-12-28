import { Component,OnInit } from '@angular/core';
import { HomeService } from '../api/home.service';
import { response } from 'express';
import { CartService } from '../api/cart.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  HomeService: any;
  constructor(private api:HomeService,private cart:CartService,private toast :NgToastService){}
  public productlist:any;
  searchQuery: string = '';

  ngOnInit():void{
    this.api.gethome().subscribe((res: any)=>{
      //console.log(res);
      this.productlist = res;
      this.productlist.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price})
      });
    });
  }
  addtocart(item:any){
    this.toast.success({detail:'Added to Cart',summary:'Item has been added',duration:1000})
    this.cart.addtocart(item);
    console.log(item);
  }
  search(searchQuery: string) {
    if (searchQuery) {
      this.productlist = this.productlist.filter((item: any) =>
      item.title.toLowerCase().replace(/\s+/g, '').includes(searchQuery.toLowerCase().replace(/\s+/g, ''))
      );
    }
    else {
      this.api.gethome().subscribe((res: any) => {
        this.productlist = res;
      })
    }
  }
}
