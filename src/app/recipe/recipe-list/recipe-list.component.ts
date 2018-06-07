import {Component, Output, EventEmitter} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is sliply a test', 'http://assets.kraftfoods.com/recipe_images/opendeploy/143366_640x428.jpg'),
    new Recipe('A Test Recipe2', 'This is sliply a test2', 'http://assets.kraftfoods.com/recipe_images/opendeploy/143366_640x428.jpg')
  ];

  constructor() {}

  ngOnInit() {

  }

  onRecipeSelected(recipe: Recipe) {
    console.log(recipe);
    this.recipeWasSelected.emit(recipe);
  }
}
