import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap'

@NgModule({
    imports: [Ng2BootstrapModule],
    exports: [Ng2BootstrapModule, CommonModule, FormsModule],
    declarations: [],
    providers: [],
})
export class SharedModule { }
