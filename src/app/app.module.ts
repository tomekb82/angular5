import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { BasicCardComponent } from './basic-card/basic-card.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusCardComponent,
    BasicCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
