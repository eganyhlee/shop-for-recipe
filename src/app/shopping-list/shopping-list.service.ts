import { Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
	ingredientChanged = new Subject<Ingredient[]>();
	startedEditing = new Subject<number>();
	
	private ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Tomates', 10)
	];

	constructor() { }
	
	getIngredients() {
		return this.ingredients.slice();
	}

	getIngredient(index: number) {
		return this.ingredients[index];
	}

	addIngredient(ingredient: Ingredient) {
		this.ingredients.push(ingredient);
		this.ingredientChanged.next(this.ingredients.slice());
	}

	addIngredientList(ingredients: Ingredient[]) {
		this.ingredients.push(...ingredients);
		this.ingredientChanged.next(this.ingredients.slice());
	}

	updateIngredient(index:number, newIngredient: Ingredient) {
		this.ingredients[index] = newIngredient;
		this.ingredientChanged.next(this.ingredients.slice());
	}
}
