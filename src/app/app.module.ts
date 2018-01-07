import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { BasicCardComponent } from './basic-card/basic-card.component';
import { MessageCardComponent } from './message-card/message-card.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusCardComponent,
    BasicCardComponent,
    MessageCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
