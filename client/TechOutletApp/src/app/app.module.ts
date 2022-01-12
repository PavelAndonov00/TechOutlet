import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdvertComponent } from './advert/advert.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NavComponent,
    CardComponent,
    HomeComponent,
    LoginComponent,
    AdvertComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
