import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'Sample message';
  open = false;
  openMessage = false;

  focus(element) {
    if  (element.className) {
      element.className = '';
    }else {
      element.className = 'input-border';
    }
  }

}
