import { Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
	@Output() ingredientChanged = new Subject<Ingredient[]>();
	
	private ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Tomates', 10)
	];

	constructor() { }
	
	getIngredients() {
		return this.ingredients.slice();
	}

	addIngredient(ingredient: Ingredient) {
		this.ingredients.push(ingredient);
		this.ingredientChanged.next(this.ingredients.slice());
	}

	addIngredientList(ingredients: Ingredient[]) {
		this.ingredients.push(...ingredients);
		this.ingredientChanged.next(this.ingredients.slice());
	}
}
