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
  loading:boolean = false;

  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts(){
    this.loading = true;
    this.service.getAllProducts().subscribe((res:any) => {
      this.products = res;
      this.loading = false;
    }, error => {
      console.log(error.message);
      this.loading = false;
    })
  }

  getCategories(){
    this.loading = true;
    this.service.getAllCategories().subscribe((res:any) => {
      this.categories = res;
      this.loading = false;
    }, error => {
      console.log(error.message);
      this.loading = false;
    })
  }

  filterCategory(event: any) {
    let value = event.target.value;
    (value == 'All') ? this.getProducts() : this.getProductsCategory(value);
  }

  getProductsCategory(keyword: string){
    this.loading = true;
    this.service.getProductsByCategory(keyword).subscribe((res:any) => {
      this.products = res;
      this.loading = false;
    }, error => {
      console.log(error.message);
      this.loading = false;
    })
  }
}
