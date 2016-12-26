// import 'core-js';
// import 'reflect-metadata';
// import 'zone.js/dist/zone';
import {header} from './header';
import {input} from './input';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
@NgModule({
  imports: [BrowserModule],
  declarations: [header, input],
  bootstrap: [header]
})
 
export class AppModule {}
