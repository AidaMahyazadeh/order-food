import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Tag } from '../shared/models/tag.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{
tags !:Tag[];  
@Input()foodTags ?:string[];

constructor(private foodService:FoodService,private router:Router){}

ngOnInit(): void {
  if(!this.foodTags){
    this.tags=this.foodService.getAllTags()
  }
}

}
