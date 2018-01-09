import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { PanelCloseComponent } from './panel-close.component';


@NgModule({
  declarations: [
    PanelComponent,
    PanelCloseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PanelComponent,
    PanelCloseComponent
  ]
})
export class PanelModule { }
