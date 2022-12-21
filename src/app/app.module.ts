import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { DisplayComponent } from './base/display/display.component';
import { ControllerComponent } from './base/controller/controller.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    DisplayComponent,
    ControllerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
