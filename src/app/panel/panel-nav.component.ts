import { Component, Input, EventEmitter, OnInit} from '@angular/core'

@Component({
  selector: 'panel-nav',
  template: `
    <ul class="nav" [ngClass]="getNavClass()">
      <li class="nav-item" *ngFor="let panel of panels">
        <a class="nav-link" [class.active]="panel.open" (click)="openTabPanel(panel)"> 
            {{panel.title}}
        </a>
      </li>
    </ul>
  `,
  styles: []
})
export class PanelNavComponent implements OnInit {

  @Input()
  type = 'tabs';

  onOpen = new EventEmitter();

  panels;

  constructor() {}

  ngOnInit() {
  }

  openTabPanel(panel) {
    this.onOpen.emit(panel);
  }

  getNavClass() {
   if (this.type === 'pills') {
     return 'nav-pills';
   }

   return 'nav-tabs';
  }

}
