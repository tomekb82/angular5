import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'card-close',
  template: `
    <span class="close" (click)="close()">&times;</span>
  `,
  styles: []
})
export class CardCloseComponent implements OnInit {

  @Output('close')
  onClose = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.onClose.emit();
  }

}
