import { Injectable } from '@angular/core';


import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe-list/recipe.model';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Biryani',
      'A tasty Indian Dish',
      'https://images.food52.com/McqpjxUiMekhfX6Rsq7wuuSoz0g=/2016x1344/filters:format(webp)/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Rice', 2)
      ]),
    new Recipe('Chicken Burger',
      'Here is a Chicken Burger',
      'https://www.kimscravings.com/wp-content/uploads/2022/06/Chicken-Burgers-5.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Chicken fillet', 1),
        new Ingredient('Tomato', 1),
        new Ingredient('Onion', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
