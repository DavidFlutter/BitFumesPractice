import { Injectable } from '@angular/core';
import { IBook } from './interfaces/IBooks';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  constructor() { }

  cartBooks:IBook[] = [];

  get():IBook[]{
    return this.cartBooks;
  }

  add(book:IBook){
    this.cartBooks.unshift(book);
  }

  remove(book:IBook):void{
    this.cartBooks = this.cartBooks.filter((b) => b !== book);
  }
}
