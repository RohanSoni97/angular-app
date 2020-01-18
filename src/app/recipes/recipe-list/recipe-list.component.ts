import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('A test Recipe','Some Test','https://live.staticflickr.com/5496/31479301445_cb53c0f4e9_b.jpg'),
    new Recipe('A test Recipe','Some Test','https://live.staticflickr.com/5496/31479301445_cb53c0f4e9_b.jpg'),

  ];
  constructor() { }

  ngOnInit() {
  }

}
