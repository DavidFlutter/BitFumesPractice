import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template:`
    <div class="header">
      <h1>
        <a routerLink="/">Book store</a>
      </h1>
      <div class="links">
        <a routerLink="/login">Login</a>
        <a routerLink="/signup">Sigup</a>
        <a class="cart-link" routerLink="/cart">Cart</a>
        <app-bubble></app-bubble>
      </div>
    </div>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
