import { Component } from '@angular/core';
import { CartDataService } from '../cart-data.service';

@Component({
  selector: 'app-bubble',
  template: `
    <div class="bubble">
      {{_cartService.get().length}}
    </div>
  `,
  styleUrl: './bubble.component.scss'
})
export class BubbleComponent {

  //Services
  _cartService:CartDataService;

  /**
   *
   */
  constructor(cartService:CartDataService) {
    this._cartService = cartService;    
  }
}
