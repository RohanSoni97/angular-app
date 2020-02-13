import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
   private ingredients:Ingredient[]=[
        new Ingredient('Cabbage',1),
        new Ingredient('Onion',1),
      ];
    ingredientsAdded=new EventEmitter<Ingredient>();
    getIngredient(){
        return this.ingredients.slice();
    }
}