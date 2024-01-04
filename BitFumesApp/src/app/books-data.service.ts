import { Injectable } from '@angular/core';
import { IBook } from './interfaces/IBooks';

@Injectable({
  providedIn: 'root'
})
export class BooksDataService {

  constructor() { }

  private allBooks:IBook[] = [
    {
      title: "The Fault in Our Stars",
      authour:"John Green",
      price:12.99,
      img:"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Big Little Kingdom",
      authour:"Rick Manuel",
      price:9.50,
      img:"https://plus.unsplash.com/premium_photo-1664006988924-16f386bcd40e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Running Out of Breath",
      authour:"Love Smith",
      price: 7.59,
      img:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2t8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Why",
      authour:"Lucy Lu",
      price: 35.99,
      img:"https://plus.unsplash.com/premium_photo-1681825268400-c561bd47d586?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJvb2t8ZW58MHx8MHx8fDA%3D",
    },
  ];


  get():IBook[]{
    return this.allBooks;
  }
}
