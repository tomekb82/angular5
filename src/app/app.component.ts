import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message = 'Sample message';
  open = false;
  openMessage = false;
  navType = 'tabs';
  list = ['Basic','Message','Status'];
  
  panelType='single';

  focus(element) {
    if  (element.className) {
      element.className = '';
    }else {
      element.className = 'input-border';
    }
  }
  
 public types: NavType[] = [
      { "id": 1, "name": "Tabs", "class": "tabs" },
      { "id": 2, "name": "Buttons", "class": "pills" }
    ];
    public selectedType: NavType = this.types[0];
    onSelect(typeId) { 
        this.selectedType = null;
        for (var i = 0; i < this.types.length; i++)
        {
          if (this.types[i].id == typeId) {
            this.selectedType = this.types[i];
          }
        }
    }

}

class NavType {
  id: number;
  name: string;
}

