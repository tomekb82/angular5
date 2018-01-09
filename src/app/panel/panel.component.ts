import { flatMap } from 'rxjs/operators';
import {
  Component,
  Input,
  AfterContentInit,
  ContentChild,
  OnInit,
  OnDestroy
} from '@angular/core';
import {PanelCloseComponent} from './panel-close.component';

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
export class PanelComponent implements OnInit, AfterContentInit, OnDestroy {

  @Input()
  title;

  @Input()
  open = true;

  @ContentChild(PanelCloseComponent)
  closeBtn:PanelCloseComponent;

  subscription;

  ngAfterContentInit() {
    if(this.closeBtn){
      this.subscription = this.closeBtn.onClose.subscribe(()=>{
        this.open = false;
      })
    }
  }

  ngOnDestroy(){
    this.subscription && this.subscription.unsubscribe();
  }

  constructor() { }

  ngOnInit() {
  }

}
