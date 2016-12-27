import {Component,Input} from '@angular/core';
 
@Component({
  selector: 'inputField',
  templateUrl: './app/input.html'
})
export class input {
	todos=[];
	enter(y){
		this.todos.push({text:y, done:false});
	}
	totalcount(){
		return this.todos.length;
	}
	remove(index){
		this.todos.splice(index,1);
	}
}