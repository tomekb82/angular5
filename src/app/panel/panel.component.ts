import { flatMap } from 'rxjs/operators';
import {
  Component,
  Input,
  AfterContentInit,
  ContentChild,
  ContentChildren,
  QueryList
} from '@angular/core';
import { PanelTabComponent } from './panel-tab.component'
import { PanelBaseComponent } from './panel-base.component';
import { PanelNavComponent } from './panel-nav.component';

@Component({
  selector: 'panel',
  template: `
    <div class="card" *ngIf="open">
      <div class="card-header">
        <h5 *ngIf="title">{{title}}</h5>
        <ng-content select="panel-header"></ng-content>
      </div>
        
      <div class="card-body">
        <ng-content></ng-content>
      </div>
      <div class="card-footer">
        <ng-content select="panel-footer"></ng-content>
      </div>
    </div>
  `,
  styles: []
})
export class PanelComponent extends PanelBaseComponent implements AfterContentInit {

  @Input()
  type = 'single';
  
  @ContentChild(PanelNavComponent)
  nav:PanelNavComponent;
  
  @ContentChildren(PanelTabComponent)
  panels = new QueryList<PanelTabComponent>()
  
  ngAfterContentInit() {
    if(this.nav){
      this.nav.panels = this.panels
      this.nav.onOpen.subscribe(panel => {
        this.openTabPanel(panel);
      })
    }
    
    setTimeout(()=>{
      if(this.panels.length){
        this.openTabPanel(this.panels.first)
      }
    })
    super.ngAfterContentInit()
  }

  openTabPanel(panel){
  if(this.type=='single'){
    this.panels.toArray().forEach(panel=>{
      panel.open = false
    })
    panel.open = true;
    }
    else{
      panel.open = !panel.open;
    }
  }

}
