import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusCardComponent } from './status-card/status-card.component';
import { BasicCardComponent } from './basic-card/basic-card.component';
import { MessageCardComponent } from './message-card/message-card.component';
import { CardCloseComponent } from './card-close/card-close.component';

@NgModule({
  declarations: [
    StatusCardComponent,
    BasicCardComponent,
    MessageCardComponent,
    CardCloseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StatusCardComponent,
    BasicCardComponent,
    MessageCardComponent,
    CardCloseComponent
  ]
})
export class CardModule { }
