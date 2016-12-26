// import 'core-js';
// import 'reflect-metadata';
// import 'zone.js/dist/zone';
import {header} from './app/modules/header/header';
import {input} from './app/modules/input/input';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
@NgModule({
  imports: [BrowserModule],
  declarations: [header, input],
  bootstrap: [header]
})
 
export class AppModule {}
