import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchTerm :string='';

constructor(private activatedRoute:ActivatedRoute,private router:Router){}

ngOnInit(): void {
  this.activatedRoute.params.subscribe(params=>{
    if(params['searchTerm']){
      this.searchTerm=params['searchTerm']
    }
  })
}

onSearch():void{
  if(this.searchTerm){
    this.router.navigate(['/search',this.searchTerm])
  }else {
    this.router.navigate(['/'])
  }
}
}
