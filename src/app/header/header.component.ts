import { Component,OnInit } from '@angular/core';
import { CartService } from '../api/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public totalitem=0;
addtocart: any;
item: any;
  constructor(private cart:CartService){}

  ngOnInit(): void {
    this.cart.gethome().subscribe(res=>{
      this.totalitem=res.length;
    })
  }
}
