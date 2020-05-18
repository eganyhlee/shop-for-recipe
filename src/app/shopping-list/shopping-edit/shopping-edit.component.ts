import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
	@ViewChild('nameInput', {static:false}) nameInputRef: ElementRef;
	@ViewChild('amountInput', {static:false}) amountInputRef: ElementRef;
	
	constructor(private slService: ShoppingListService) { }

	ngOnInit(): void {
	}

	onAdd() {
		const name = this.nameInputRef.nativeElement.value;
		const amount = this.amountInputRef.nativeElement.value;
		const newIngredient = new Ingredient(name, amount);
		this.slService.addIngredient(newIngredient);
	}

}
