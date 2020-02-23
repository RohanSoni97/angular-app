import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('f', {static: true}) slForm:NgForm;
  subscription: Subscription;
  editMode= false; 
  editedItemIndex : number;
  editIngredients: Ingredient;
  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingService.startEditing.
    subscribe(
      (index: number) => {
        this.editedItemIndex = index; 
        this.editMode = true; 
        this.editIngredients = this.shoppingService.getIngredientByIndex(index);
        this.slForm.
        setValue({
          name : this.editIngredients.name,
          amount : this.editIngredients.amount
        });
      }
    );
  }
  onAddItem(form: NgForm) {
    const value = form.value;
    const newIng = new Ingredient(value.name, value.amount);
    if(this.editMode) {
      this.shoppingService.updateIngredient(this.editedItemIndex, newIng);
    }
  else {
    this.shoppingService.addIngredient(newIng);
}
  this.editMode= false;
  form.reset();
  }
  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }
  onClear() {
    this.slForm.reset();
    this.editMode= false;
  }
}
