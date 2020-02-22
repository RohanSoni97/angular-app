import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService{
   private ingredients:Ingredient[]=[
        new Ingredient('Cabbage',1),
        new Ingredient('Onion',1),
      ];
    ingredientsAdded = new Subject<Ingredient[]>();
    getIngredient() 
    {
        return this.ingredients.slice();
    }
    addIngredient(ingr:Ingredient){
      this.ingredients.push(ingr);
      this.ingredientsAdded.next(this.ingredients.slice());
    }
    addToSl(ingr:Ingredient[] ){
      this.ingredients.push(...ingr);
      this.ingredientsAdded.next(this.ingredients.slice());
    }
}