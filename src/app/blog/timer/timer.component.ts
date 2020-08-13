import {Component, OnInit, Output} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  minuteLeft;
  secnondLeft;
  interval;
  @Output() modalData: any;

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.start();
    }, 1000);
  }

  start() {
    const now = new Date().getTime();
    //1200000
    const after20Minutes =  60000 + now + '';
    if (this.cookieService.get('time') === '') {
      this.cookieService.set('time', after20Minutes);
    }
    // tslint:disable-next-line:radix
    const end = parseInt(this.cookieService.get('time'));
    if (end >= now) {
      const diff = Math.floor(end -  now) / 1000;
      this.minuteLeft = this.getMinutes(diff);
      this.secnondLeft = this.getSeconds(diff);
    } else {
      this.openPopUp();
    }
  }

  getMinutes(t) {
    return Math.floor(t / 60) % 60;
  }

  getSeconds(t) {
    return Math.floor(t % 60);
  }

  openPopUp() {
    this.modalData = { state: true, header: 'Confirm Login', flag: 'lock_account' };
    this.cookieService.set('time', '');
  }

  modalAction(event) {
    if (event === 'shadow_login') {
      alert('shadow_login');
    } else if (event === 'lock_account') {
      alert('lock_account');
    } else if (event === 'unlock_account') {
      alert('unlock_account');
    } else if (event === 'reset_pwd') {
      alert('reset_pwd');
    } else if (event === 'reset_crc') {
      alert('reset_crc');
    } else if (event === 'delete_account') {
      alert('delete_account');
    }
  }

}
