import { Component, OnInit, EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[]=[
    new Ingredient('Cabbage',1),
    new Ingredient('Onion',1),
  ];
 
  constructor() { }

  ngOnInit() {
  }
  onIngredientsAdded(ingredient:Ingredient)
  {
    this.ingredients.push(ingredient);
  }

}
