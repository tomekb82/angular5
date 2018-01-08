import { Component, OnInit, Attribute } from '@angular/core';

@Component({
  selector: 'status-card',
  template: `
    <div class="card" [ngClass]="{
      'bg-info text-white': type == 'info',
      'bg-success text-white': type == 'success',
      'bg-danger text-white': type == 'error'
      }">
      <div class="card-body">
        {{ bodyText }}
      </div>
    </div>
  `,
  styles: []
})
export class StatusCardComponent implements OnInit {

  constructor(
    @Attribute('text') public bodyText,
    @Attribute('type') public type) { }

  ngOnInit() {
  }

}
