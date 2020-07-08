import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showToggleMenu = false;

  onMenuToggle() {
    this.showToggleMenu = !this.showToggleMenu;
  }

}
