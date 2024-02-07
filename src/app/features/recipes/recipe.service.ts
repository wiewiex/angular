import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe({
      name: 'Tasty Schnitzel',
      desc: 'This is simply a test',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      ingredients: [
        new Ingredient({ name: 'Meat', amount: 1 }),
        new Ingredient({ name: 'French Fries', amount: 20 }),
      ],
    }),
    new Recipe({
      name: 'Burger',
      desc: 'This is simply a test 2',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      ingredients: [
        new Ingredient({ name: 'Buns', amount: 2 }),
        new Ingredient({ name: 'Meat', amount: 1 }),
      ],
    }),
    new Recipe({
      name: 'A Test Recipe 3',
      desc: 'This is simply a test',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      ingredients: [],
    }),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
