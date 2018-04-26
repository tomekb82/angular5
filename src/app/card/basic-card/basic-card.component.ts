import { flatMap } from 'rxjs/operators';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CardCloseComponent } from '../card-close/card-close.component';

@Component({
  selector: 'basic-card',
  template: `
    <div class="card" *ngIf="isOpen">
      <div class="card-body">
        <card-close></card-close>
        {{ text }}
      </div>
    </div>
  `,
  styles: []
})
export class BasicCardComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input('open')
  isOpen = false;

  @Input()
  text = ' ';

  @Output()
  openChange = new EventEmitter();

  @ViewChildren(CardCloseComponent)
  closeRefs = new QueryList<CardCloseComponent>();

  subscription;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.subscription = this.closeRefs.changes
      .pipe(
        flatMap( changes => <CardCloseComponent[]>changes.toArray()),
        //switchMap( button => button.onClose )
        flatMap( button => button.onClose ))
      .subscribe(() => {
        this.close();
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  close() {
    this.isOpen = false;
    this.openChange.emit(this.isOpen);
  }

  open() {
    this.isOpen = true;
    this.openChange.emit(this.isOpen);
  }

}
