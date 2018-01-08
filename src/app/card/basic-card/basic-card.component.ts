import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
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
export class BasicCardComponent implements OnInit, AfterViewChecked, OnDestroy {

  @ViewChild(CardCloseComponent)
  closeRef:CardCloseComponent;

  subscription;

  ngAfterViewChecked() {
    if(this.closeRef){
      this.subscription = this.closeRef.onClose
        .subscribe(()=>{
          this.close()
        })
    }else{
      this.subscription && this.subscription.unsubscribe()
    }
  }

  ngOnDestroy(){
    this.subscription && this.subscription.unsubscribe()
  }

  @Input('open')
  isOpen = false;

  @Input()
  text = ' ';

  @Output()
  openChange = new EventEmitter();

  close(){
    this.isOpen = false;
    this.openChange.emit(this.isOpen);
  }

  open(){
    this.isOpen = true;
    this.openChange.emit(this.isOpen);
  }

  constructor() { }

  ngOnInit() {
  }

}
