import {Component, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is for test', 'https://www.thespruceeats.com/thmb/Ld0wmhXMI8q4GK7xN4jojhRi2_M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/basic-congee-recipes-4065244-hero-01-5cf81547c34d4520be10bb57c6cda902.jpg'),
    new Recipe('A Test Recipe', 'This is for test', 'https://www.thespruceeats.com/thmb/Ld0wmhXMI8q4GK7xN4jojhRi2_M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/basic-congee-recipes-4065244-hero-01-5cf81547c34d4520be10bb57c6cda902.jpg')
  ]

  onRecipeSelected(recipe: Recipe) {
this.recipeWasSelected.emit(recipe)
  }
}
