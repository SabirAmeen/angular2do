import {Component,Input} from '@angular/core';
 
@Component({
  selector: 'inputField',
  templateUrl: './app/input.html'
})
export class input {
	todos=[];
	ins;
	enter(y){
		if(y!=""){
			this.todos.push({text:y, done:false});
			this.ins=""
		}
	}
	totalcount(){
		return this.todos.length;
	}
	remove(index){
		this.todos.splice(index,1);
	}
	clear(){
	     	this.todos = this.todos.filter(function(item,index){
      		return item.done!=true;
       	})
	}
}