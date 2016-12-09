import { Component, Input } from 'angular2/core';
 
@Component({
  selector: 'inputField',
  templateUrl: './app/modules/input/input.html'
})
export class input {
	enter(){
		console.log("hi")
	}
}