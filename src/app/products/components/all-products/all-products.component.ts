import { Component } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../models/products';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent {

  products: Product[] = [];
  categories: string[] = [];
  loading:boolean = false;
  cartProducts:any[] = [];

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

  addToCart(event: any) {
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
      let exist= this.cartProducts.find(item => item.item.id == event.item.id)
      if(exist) {
        alert("Product is already in your cart!");
      } else {
        this.cartProducts.push(event);
        localStorage.setItem("cart", JSON.stringify(this.cartProducts));
      }
    } else {
      this.cartProducts.push(event);
      localStorage.setItem("cart", JSON.stringify(this.cartProducts));
    }
  }
}
