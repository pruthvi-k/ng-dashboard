import { Component } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is sliply a test', 'http://assets.kraftfoods.com/recipe_images/opendeploy/143366_640x428.jpg'),
    new Recipe('A Test Recipe', 'This is sliply a test', 'http://assets.kraftfoods.com/recipe_images/opendeploy/143366_640x428.jpg')
  ];

  constructor() {}

  ngOnInit() {

  }
}
