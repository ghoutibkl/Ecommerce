import { NgModule } from '@angular/core';
import { CartComponent } from './components/cart/cart.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ]
})
export class CartsModule { }
