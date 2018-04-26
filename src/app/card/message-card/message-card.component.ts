import { Component, OnInit } from '@angular/core';
import {BasicCardComponent} from '../basic-card/basic-card.component';

@Component({
  selector: 'message-card',
  template: `
   <div class="alert alert-primary" *ngIf="isOpen">
      <card-close></card-close>
      <card-close></card-close>
      <card-close></card-close>
      {{ text }}
    </div>
  `,
  styles: []
})
export class MessageCardComponent extends BasicCardComponent implements OnInit {

  timeout = 1000;

  constructor() {
    super();
  }

  ngOnInit() {
  }

  close() {
    setTimeout(() => {
      super.close();
    }, this.timeout);
  }

}
