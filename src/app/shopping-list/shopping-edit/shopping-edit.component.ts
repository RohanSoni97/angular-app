import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
  }
  onAddItem(form: NgForm) {
    const value = form.value;
    this.shoppingService.addIngredient(new Ingredient(value.name, value.amount));
  }
}
