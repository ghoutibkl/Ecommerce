import { Component } from '@angular/core';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent {

  products: any[] = []

  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.service.getAllProducts().subscribe((res:any) => {
      this.products = res;
    })
  }

}
