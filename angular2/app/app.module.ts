import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { NavbarModule } from './navbar'
import { HomeModule } from './home'
import { AdminModule } from './admin'

import { AppComponent }  from './app.component';


@NgModule({
  imports: [ BrowserModule, HomeModule, NavbarModule, AdminModule, RouterModule.forRoot([]) ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
