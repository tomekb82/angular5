import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { PanelCloseComponent } from './panel-close.component';
import { PanelTabComponent } from './panel-tab.component';
import { PanelBaseComponent } from './panel-base.component';
import { PanelNavComponent } from './panel-nav.component';

@NgModule({
  declarations: [
    PanelComponent,
    PanelCloseComponent,
    PanelTabComponent,
    PanelBaseComponent,
    PanelNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PanelComponent,
    PanelCloseComponent,
    PanelTabComponent,
    PanelNavComponent
  ]
})
export class PanelModule { }
