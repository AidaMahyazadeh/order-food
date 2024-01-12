import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Food } from '../shared/models/food.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
 food !:Food; 
 constructor(
  private foodService: FoodService,
  private activatedRoute :ActivatedRoute,
  private cartService :CartService,
  private router:Router,
  ){}

 ngOnInit(): void {
   this.activatedRoute.paramMap.subscribe((params:Params)=>{
    const id= params['get']('id')
    console.log(id)
    if(id){
      this.food
      = this.foodService.getFoodById(id)
    }
   })
 }

 addToCart(){
 this.cartService.addToCart(this.food) 
 this.router.navigate(['/cart-page'])
 }
}
