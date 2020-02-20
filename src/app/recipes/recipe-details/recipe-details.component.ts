import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
   recipe: Recipe;
   id: number;
  constructor(private recipeService: RecipeService,
              private router: Router,
              private routes: ActivatedRoute) { }

  ngOnInit() {
    this.routes.params
    .subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipeByIndex(this.id);
      }
    );
  }
  addToSl(){
    this.recipeService.addToSl(this.recipe.ingredients);
  }
  onEditRecipe()
  {
    this.router.navigate(['edit'], { relativeTo: this.routes } );
  }
}
