import {Component,} from '@angular/core';

class PanelType {
  id: number;
  name: string;
}

class NavType {
  id: number;
  name: string;
  class: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'Sample message';
  open = false;
  openMessage = false;
  list = ['Basic', 'Message', 'Status'];

  panelTypes: PanelType[] = [
    {'id': 1, 'name': 'default'},
    {'id': 2, 'name': 'inline'}
  ];
  selectedPanelType: PanelType = this.panelTypes[0];

  navTypes: NavType[] = [
    {'id': 1, 'name': 'Tabs', 'class': 'tabs'},
    {'id': 2, 'name': 'Buttons', 'class': 'pills'}
  ];
  selectedNavType: NavType = this.navTypes[0];

  focus(element) {
    if (element.className) {
      element.className = '';
    } else {
      element.className = 'input-border';
    }
  }

  onPanelTypeSelect(typeId) {
    this.selectedPanelType = null;
    for (let i = 0; i < this.panelTypes.length; i++) {
      if (this.panelTypes[i].id == typeId) {
        this.selectedPanelType = this.panelTypes[i];
      }
    }
  }

  onNavTypeSelect(typeId) {
    this.selectedNavType = null;
    for (let i = 0; i < this.navTypes.length; i++) {
      if (this.navTypes[i].id == typeId) {
        this.selectedNavType = this.navTypes[i];
      }
    }
  }

}


