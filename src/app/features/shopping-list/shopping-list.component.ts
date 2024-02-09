import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  ingredientsSubscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientsSubscription =
      this.shoppingListService.ingredientEvent.subscribe(() => {
        this.ingredients = this.shoppingListService.getIngredients();
      });
  }

  ngOnDestroy() {
    this.ingredientsSubscription.unsubscribe();
  }

  onEditItem(index) {
    this.shoppingListService.startedEditing.next(index);
  }
}
