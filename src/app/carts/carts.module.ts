import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class CartsModule { }
