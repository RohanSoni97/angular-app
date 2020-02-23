import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  
  ingredients: Ingredient[];
  private igChangedSubscription: Subscription;
  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredient();
    this.igChangedSubscription= this.shoppingService.ingredientsAdded.subscribe(
     (ingredient: Ingredient[]) => {
      this.ingredients = ingredient;
     } 
    );
  }
  onEditItem(index: number) {
    this.shoppingService.startEditing.next(index);
  }
  ngOnDestroy(): void {
      this.igChangedSubscription.unsubscribe();
  }

}
