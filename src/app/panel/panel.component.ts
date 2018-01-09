import { flatMap } from 'rxjs/operators';
import {
  Component,
  AfterViewInit,
  ViewChildren,
  QueryList,
  OnInit,
  OnDestroy
} from '@angular/core';
import {PanelCloseComponent} from './panel-close.component';

@Component({
  selector: 'panel',
  template: `
    <div class="card" *ngIf="isOpen">
      <div class="card-header">
        <panel-close></panel-close>
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

  @ViewChildren(PanelCloseComponent)
  closeRefs = new QueryList<PanelCloseComponent>();

  isOpen = true;

  subscription;

  ngAfterViewInit() {
    this.closeRefs.changes.subscribe(changes => {
      console.log(changes);
    });
    this.subscription = this.closeRefs.changes.pipe(
      flatMap( changes => <PanelCloseComponent[]>changes.toArray()),
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
