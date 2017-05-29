// import 'core-js';
// import 'reflect-metadata';
// import 'zone.js/dist/zone';
import {header} from './header';
import {input} from './input';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, header, input],
  bootstrap: [AppComponent]
})
 
export class AppModule {}
