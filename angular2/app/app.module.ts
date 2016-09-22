import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap'
import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule, Ng2BootstrapModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
