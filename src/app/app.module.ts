import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './features/recipes/recipes.component';
import { RecipeListComponent } from './features/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './features/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './features/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './features/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './features/shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './features/shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
