import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent }   from './navbar.component';
import { SharedModule } from '../shared'

@NgModule({
    imports: [RouterModule, SharedModule],
    exports: [NavbarComponent],
    declarations: [NavbarComponent],
    providers: [],
})
export class NavbarModule { }
