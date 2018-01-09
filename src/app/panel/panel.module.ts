import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '../card/card.module';
import { PanelComponent } from './panel.component';


@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [
    PanelComponent
  ]
})
export class PanelModule { }
