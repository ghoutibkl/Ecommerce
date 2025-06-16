import { Component } from '@angular/core';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent {

  products: any[] = [];
  categories: any[] = [];

  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts(){
    this.service.getAllProducts().subscribe((res:any) => {
      this.products = res;
    }, error => {
      console.log(error.message);
    })
  }

  getCategories(){
    this.service.getAllCategories().subscribe((res:any) => {
      this.categories = res;
    }, error => {
      console.log(error.message);
    })
  }

  filterCategory(event: any) {
    let value = event.target.value;
    if (value == 'All')
      this.getProducts();
    else
      this.getProductsCategory(value);
  }

  getProductsCategory(keyword: string){
    this.service.getProductsByCategory(keyword).subscribe((res:any) => {
      this.products = res;
    }, error => {
      console.log(error.message);
    })
  }
}
