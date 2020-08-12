import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  @Input() modalData: any;
  public isModalOpen: boolean;
  @Output() modalActionEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(changes: OnChanges) {
    if (this.modalData) {
      if (this.modalData.state === true) {
        this.openModal();
      }else{
        this.closeModal();
      }
    }
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onModalConfirm() {
    if (this.modalData.flag === 'shadow_login') {
      this.modalActionEvent.emit('shadow_login');
    } else if (this.modalData.flag === 'lock_account') {
      this.modalActionEvent.emit('lock_account');
    } else if (this.modalData.flag === 'unlock_account') {
      this.modalActionEvent.emit('unlock_account');
    } else if (this.modalData.flag === 'reset_pwd') {
      this.modalActionEvent.emit('reset_pwd');
    } else if (this.modalData.flag === 'reset_crc') {
      this.modalActionEvent.emit('reset_crc');
    } else if (this.modalData.flag === 'delete_account') {
      this.modalActionEvent.emit('delete_account');
    }
  }

}
