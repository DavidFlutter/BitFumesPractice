import { Component } from '@angular/core';
import { BooksDataService } from '../books-data.service';

@Component({
  selector: 'app-homepage',
  template:`
    <div class="all-books">
      <div class="wrapper">
        <ng-container *ngFor="let book of _booksData.get()">
          <app-book-tile [book]="book"></app-book-tile>
        </ng-container>
      </div>
    </div>
  `,
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  // Services
  _booksData:BooksDataService;
  constructor(bookData:BooksDataService) {
    this._booksData = bookData;
  }

}
