import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food.model';
import { Cart } from '../shared/models/cart.model';
import { CartItem } from '../shared/models/cartItem.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart :Cart=new Cart();
  constructor() { }

  addToCart(food :Food):void{
   let cartItem=this.cart.items.find(item=>item.food.id===food.id)
   if(cartItem){
    this.changeQuantity(food.id,cartItem.quantity+1);
    return;
   }
   this.cart.items.push(new CartItem(food))
  }

 

  removeFromCart(foodId:number):void{
    let index=this.cart.items.findIndex(item=>item.food.id===foodId);
    this.cart.items.splice(index,1)
    // this.cart.items=this.cart.items.filter(item=>item.food.id!==foodId)
  }

  changeQuantity(foodId:number,quantity:number){
     let carItem = this.cart.items.find(item=>item.food.id===foodId)
     if(!carItem) return;
     carItem.quantity=quantity
  }

  getCart():Cart{
    return this.cart;
  }
}
