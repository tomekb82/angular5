import { flatMap } from 'rxjs/operators';
import {
  Component,
  AfterViewInit,
  ViewChildren,
  QueryList,
  OnInit,
  OnDestroy
} from '@angular/core';

import { CardCloseComponent } from '../card/card-close/card-close.component';

@Component({
  selector: 'panel',
  template: `
    <div class="card" *ngIf="isOpen">
      <div class="card-header">
        <card-close></card-close>
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
export class PanelComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChildren(CardCloseComponent)
  closeRefs = new QueryList<CardCloseComponent>();

  isOpen = true;

  subscription;

  ngAfterViewInit() {
    this.subscription = this.closeRefs.changes.pipe(
      flatMap( changes => <CardCloseComponent[]>changes.toArray()),
      flatMap( button => button.onClose )
    )
      .subscribe(() => {
        this.close();
      })
  }

  ngOnDestroy(){
    this.subscription && this.subscription.unsubscribe();
  }

  close(){
    console.log("clos panel");
    this.isOpen = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
