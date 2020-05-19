import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
	providedIn: 'root'
})
export class RecipeService {
	private recipes: Recipe[] = [
		new Recipe(
			'Test',
			'This is a test Recipe',
			'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg',
			[
				new Ingredient('Meat', 1),
				new Ingredient('Egg', 2)
			]
		),
		new Recipe(
			'Test1',
			'This is a test Recipe1',
			'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg',
			[
				new Ingredient('Chicken', 1),
				new Ingredient('Onion', 2)
			]
		)
	];

	getRecipes() {
		return this.recipes.slice(); //get a copy, not itself
	}

	getRecipe(index: number) {
		return this.recipes.slice()[index];
	}

	constructor(private slService: ShoppingListService) { }

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.slService.addIngredientList(ingredients);
	}
}
