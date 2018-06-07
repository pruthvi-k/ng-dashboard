import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html'
})

export class RecipeDetailComponent {
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }
}
