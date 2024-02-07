import { EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient({ name: 'Apples', amount: 5 }),
    new Ingredient({ name: 'Tomatoes', amount: 10 }),
  ];

  ingredientEvent = new EventEmitter<Ingredient>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientEvent.emit();
  }

  addIngredients(ingredients: Ingredient[]) {
    for (let ingredient of ingredients) {
      this.addIngredient(ingredient);
    }
  }
}
