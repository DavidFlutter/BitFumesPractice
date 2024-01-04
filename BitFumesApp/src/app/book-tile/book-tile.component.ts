import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../interfaces/IBooks';
import { CartDataService } from '../cart-data.service';

@Component({
  selector: 'app-book-tile',
  template:`
    <div class="book-tile">
      <img [src]="book.img" [alt]="book.title">
      <section class="text-content">
        <section class="upper">
          <h3>{{book.title}}</h3>
          <span>{{"$"}}{{book.price.toFixed(2)}}</span>
        </section>
        <span class="authour">{{book.authour}}</span>
        <button (click)="onCartBtnClick()" class="book-btn">{{buttonText}}</button>
      </section>
    </div>
  `,
  styleUrl: './book-tile.component.scss'
})
export class BookTileComponent implements OnInit{
  //Services 
  _cartServcie:CartDataService;

  @Input() book!:IBook;
  buttonText!:string;

  constructor(cartService:CartDataService) {
    this._cartServcie = cartService;
  }
  ngOnInit(): void {
    this.buttonText = this._cartServcie.get().includes(this.book) ? "Remove from cart" : "Add to cart"
  }
  

  onCartBtnClick():void{
    if(this._cartServcie.get().includes(this.book)){
      this._cartServcie.remove(this.book);
      this.buttonText = "Add to cart"
      console.log(this._cartServcie.get());
      return;
    }
    this._cartServcie.add(this.book);
    this.buttonText = "Remove from cart";
    console.log(this._cartServcie.get());

  }
}
