import { Recipe } from "./recipe.model";
import { EventEmitter } from '@angular/core';

export class RecipeService{
    recipeSelected=new EventEmitter<Recipe>();
    recipes:Recipe[]=[
        new Recipe('A test Recipe','Some Test','https://live.staticflickr.com/5496/31479301445_cb53c0f4e9_b.jpg'),
        new Recipe('A test Recipe','Some Test','https://live.staticflickr.com/5496/31479301445_cb53c0f4e9_b.jpg'),
    
      ];
      getRecipe(){
          return this.recipes.slice();
      }
}