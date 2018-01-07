import { Component, OnInit } from '@angular/core';
import {BasicCardComponent} from '../basic-card/basic-card.component';

@Component({
  selector: 'message-card',
  template: `
   <div class="alert alert-primary" *ngIf="isOpen">
      <span class="close" (click)="close()">&times;</span>
     {{ text }}
    </div>
  `,
  styles: []
})
export class MessageCardComponent extends BasicCardComponent implements OnInit {

  constructor() {
    super();
  }

  close(){
    setTimeout(()=>{
      super.close()
    },1000)
  }

  ngOnInit() {
  }

}
