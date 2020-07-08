import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

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

  constructor(
    private messageService: MessageService
  ) {
  }

  showSuccess(){
    this.messageService.add({severity: 'success', summary: 'SuccessMessage', detail: 'Ordersubmitted'});
  }

}
