import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
	private recipes: Recipe[] = [
		new Recipe('Test', 'This is a test Recipe', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg'),
		new Recipe('Test', 'This is a test Recipe', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg')
	];

	getRecipes(){
		return this.recipes.slice(); //get a copy, not itself
	}
	
  constructor() { }
}
