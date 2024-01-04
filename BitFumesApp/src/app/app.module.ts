import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SigupComponent } from './sigup/sigup.component';
import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BookTileComponent } from './book-tile/book-tile.component';
import { BooksDataService } from './books-data.service';
import { CartDataService } from './cart-data.service';
import { BubbleComponent } from './bubble/bubble.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SigupComponent,
    CartComponent,
    HomepageComponent,
    BookTileComponent,
    BubbleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BooksDataService, CartDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
