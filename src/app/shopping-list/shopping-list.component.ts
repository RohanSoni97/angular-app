import { Component, OnInit, EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[];
 
  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.shoppingService.getIngredient();
    this.shoppingService.ingredientsAdded.subscribe(
     (ingredient: Ingredient) =>{
      this.ingredients.push(ingredient)
     } 
    );
  }
  

}
