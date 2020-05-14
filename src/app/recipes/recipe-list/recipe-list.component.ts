import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe('Test', 'This is a test Recipe', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg'),
		new Recipe('Test', 'This is a test Recipe', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg')
	];

	@Output() selectedRecipeInList = new EventEmitter<Recipe>();

	constructor() { }

	ngOnInit(): void {
	}

	loadRecipeDetail(recipe: Recipe) {
		this.selectedRecipeInList.emit(recipe);
	}

}
