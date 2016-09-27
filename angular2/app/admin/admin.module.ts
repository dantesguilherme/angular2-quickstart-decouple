import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './admin.routes';
import { SharedModule } from '../shared';

@NgModule({
  imports: [ RouterModule.forChild(MODULE_ROUTES) ],
  declarations: [ MODULE_COMPONENTS ]
})
export class AdminModule {}