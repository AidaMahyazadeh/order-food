import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/models/cart.model';
import { CartItem } from '../shared/models/cartItem.model';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
 cart !:Cart;
 constructor(private cartService:CartService){}

 ngOnInit(): void {
  this.setCart()
 }

 setCart(){
  this.cart=this.cartService.getCart()
 }

 removeItemFromCart(cartItem:CartItem){
  this.cartService.removeFromCart(cartItem.food.id);
  this.setCart()
 }

 changeQuantity(cartItem:CartItem,quantity:string){
  this.cartService.changeQuantity(cartItem.food.id,+(quantity));
  this.setCart();
 }
}
