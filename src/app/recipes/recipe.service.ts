import { Recipe } from "./recipe.model";
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService{
    recipeSelected=new EventEmitter<Recipe>();
    recipes:Recipe[]=[
        new Recipe('Chilly Chicken','Some Test','https://live.staticflickr.com/5496/31479301445_cb53c0f4e9_b.jpg',[
            new Ingredient("Meat",1),
            new Ingredient("Peanuts",100),
        ]),
        new Recipe('Bread','Some Test','https://live.staticflickr.com/5496/31479301445_cb53c0f4e9_b.jpg',[
            new Ingredient("Bread",1),
            new Ingredient("Peanuts Butter",1),
        ]),
    
      ];
      getRecipe(){
          return this.recipes.slice();
      }
}