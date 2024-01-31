import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe({
      name: 'A Test Recipe',
      desc: 'This is simply a test',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
    }),
    new Recipe({
      name: 'A Test Recipe 2',
      desc: 'This is simply a test',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
    }),
    new Recipe({
      name: 'A Test Recipe 3',
      desc: 'This is simply a test',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
    }),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
