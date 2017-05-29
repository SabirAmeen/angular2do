import {Component,Input} from '@angular/core';
 
@Component({
  selector: 'inputField',
  templateUrl: './input.html'
})
export class input {
	todos=[];
	enter(y){
		this.todos.push(y);
	}
}