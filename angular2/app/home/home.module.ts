import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './home.routes';
import { SharedModule } from '../shared';

@NgModule({
  imports: [ RouterModule.forChild(MODULE_ROUTES), SharedModule ],
  declarations: [ MODULE_COMPONENTS ]
})
export class HomeModule {}