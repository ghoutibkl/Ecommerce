import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import {SharedModule} from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import {RouterLink} from '@angular/router';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgOptimizedImage,
    RouterLink
  ]
})
export class ProductsModule { }
