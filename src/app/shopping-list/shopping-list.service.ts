import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService{
   private ingredients:Ingredient[]=[
        new Ingredient('Cabbage',1),
        new Ingredient('Onion',1),
      ];
    ingredientsAdded = new Subject<Ingredient[]>();
    startEditing = new Subject<number> ();
    getIngredient() 
    {
        return this.ingredients.slice();
    }
    getIngredientByIndex(index: number) 
    {
        return this.ingredients[index];
    }
    addIngredient(ingr: Ingredient){
      this.ingredients.push(ingr);
      this.ingredientsAdded.next(this.ingredients.slice());
    }
    updateIngredient(index: number , ingr: Ingredient) {
      this.ingredients[index] = ingr;
      this.ingredientsAdded.next(this.ingredients.slice());
    }
    addToSl(ingr:Ingredient[] ){
      this.ingredients.push(...ingr);
      this.ingredientsAdded.next(this.ingredients.slice());
    }
}