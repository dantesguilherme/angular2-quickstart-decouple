import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { AdminComponent } from './admin.component';


export const MODULE_ROUTES: Route[] = [
  { path: 'admin', component: AdminComponent }
]

export const MODULE_COMPONENTS = [
  AdminComponent
]