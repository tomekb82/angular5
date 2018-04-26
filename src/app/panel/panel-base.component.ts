import { Component, ContentChild, Input, OnInit, OnDestroy, AfterContentInit } from '@angular/core';
import { PanelCloseComponent } from './panel-close.component';

@Component({
  selector: 'panel-base',
  template: `
    <p>
      panel-base works!
    </p>
  `,
  styles: []
})
export class PanelBaseComponent implements OnInit, OnDestroy, AfterContentInit {

  @Input()
  title;

  @Input()
  open = true;

  subscription;

  @ContentChild(PanelCloseComponent)
  closeBtn: PanelCloseComponent;

  constructor() { }

  ngOnInit() {}

  ngAfterContentInit() {
    this.subscribeCloseBtn();
  }

  subscribeCloseBtn() {
    if (this.closeBtn) {
      this.subscription = this.closeBtn.onClose.subscribe(() => {
        this.open = false;
      });
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
