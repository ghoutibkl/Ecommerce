import { Component } from '@angular/core';
import {CartsService} from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartProducts: any[] = [];
  total: any = 0;
  success: boolean = false;

  constructor(private service: CartsService) {
  }

  ngOnInit(){
    this.getCartProducts();
  }

  getCartProducts () {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
    }

    this.getCartTotal();
  }

  getCartTotal() {
    this.total = 0;
    for (let x in this.cartProducts){
      this.total +=
        this.cartProducts[x].item.price * this.cartProducts[x].quantity;
    }
  }

  addAmount(index: number) {
    this.cartProducts[index].quantity++;
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));

    this.getCartTotal();
  }

  minsAmount(index: number){
    this.cartProducts[index].quantity--;
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));

    this.getCartTotal();
  }

  detectChange() {
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }

  deleteProduct(index: number) {
    this.cartProducts.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }

  clearCart() {
    this.cartProducts = [];
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
    this.getCartTotal();
  }

  addCart() {

    let products = this.cartProducts.map(item => {
      return {productId: item.item.id, quantity: item.quantity}
    })

    let Model = {
      userId: 5,
      date: new Date(),
      products: products
    }

    this.service.createNewCart(Model).subscribe(() => {
      this.success = true;
    });

    console.log(Model);
  }
}
