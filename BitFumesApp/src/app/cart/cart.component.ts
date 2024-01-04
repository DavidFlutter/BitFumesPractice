import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartDataService } from '../cart-data.service';

@Component({
  selector: 'app-cart',
  template: `
    <div class="cart">
      <h2>Your cart</h2>
      <div class="items">
        <ng-container *ngFor="let book of _cartService.get()">
          <app-book-tile [book]="book"></app-book-tile>
        </ng-container>
        <ng-container *ngIf="_cartService.get().length > 0">
          <p class="total-cost">You total is: {{"$"}}{{ totalPrice.toFixed(2) }}</p>
        </ng-container>
        <ng-container *ngIf="_cartService.get().length == 0">
          <p>Your cart is empty</p>
        </ng-container>
      </div>
      
    </div>
    
  `,
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  //Services
  _cartService!:CartDataService;

  totalPrice!:number;

  constructor(cartService:CartDataService) {
    this._cartService = cartService;    
  }
 
  ngOnInit(): void {
    this.totalPrice = this._cartService.get().map(b => b.price).reduce((acc,curr) => {
      return acc + curr
    }, 0);
  }  
}
