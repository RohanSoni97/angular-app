import { Recipe } from "./recipe.model";

export class RecipeService{
    recipes:Recipe[]=[
        new Recipe('A test Recipe','Some Test','https://live.staticflickr.com/5496/31479301445_cb53c0f4e9_b.jpg'),
        new Recipe('A test Recipe','Some Test','https://live.staticflickr.com/5496/31479301445_cb53c0f4e9_b.jpg'),
    
      ];
      getRecipe(){
          return this.recipes.slice();
      }
}