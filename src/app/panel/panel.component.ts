import { flatMap } from 'rxjs/operators';
import {
  Component,
  Input,
  AfterContentInit,
  ContentChildren,
  QueryList
} from '@angular/core';
import { PanelTabComponent } from './panel-tab.component'
import { PanelBaseComponent } from './panel-base.component';

@Component({
  selector: 'panel',
  template: `
    <div class="card" *ngIf="open">
      <div class="card-header">
        <h5 *ngIf="title">{{title}}</h5>
        <ng-content select="panel-header"></ng-content>
      </div>
      
      <ul class="nav nav-tabs">
        <li class="nav-item" *ngFor="let panel of panels">
            <a class="nav-link"
                [class.active]="panel.open"
                (click)="openTabPanel(panel)"> 
                {{panel.title}} 
            </a>
        </li>
      </ul>
      
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

  @ContentChildren(PanelTabComponent)
  panels = new QueryList<PanelTabComponent>()
  
  ngAfterContentInit() {
    setTimeout(()=>{
      if(this.panels.length){
        this.openTabPanel(this.panels.first)
      }
    })
    super.ngAfterContentInit()
  }

  openTabPanel(panel){
    this.panels.toArray().forEach(panel=>{
      panel.open = false
    })
    panel.open = true
  }

}
