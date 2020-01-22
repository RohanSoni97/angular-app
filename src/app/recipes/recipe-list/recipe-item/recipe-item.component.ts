import { Component, OnInit, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  constructor() { }
  @Input() recipe:Recipe;
   @Output() recipeSelected=new EventEmitter<>();
  ngOnInit() {
  }
  onSelected(){
    this.recipeSelected.emit();
  }
}
