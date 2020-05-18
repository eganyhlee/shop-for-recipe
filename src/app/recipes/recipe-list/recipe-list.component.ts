import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[];

	@Output() selectedRecipeInList = new EventEmitter<Recipe>();

	constructor(private recipeService: RecipeService) { }

	ngOnInit(): void {
		this.recipes = this.recipeService.getRecipes();
	}

	loadRecipeDetail(recipe: Recipe) {
		this.selectedRecipeInList.emit(recipe);
	}

}
