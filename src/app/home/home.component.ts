import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Food } from '../shared/models/food.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(private foodService: FoodService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
      const searchTerm=params['searchTerm']
      const tag=params['tag']
      
      if(searchTerm){
        this.foods=this.foodService.getAllFoodsBySearchTerm(searchTerm)
      }else if(tag){
        this.foods=this.foodService.getAllFoodsByTag(tag)
      }
      else{
        this.foods = this.foodService.getAllFoods()
      }
    })
    
  }
}
