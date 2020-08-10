import { Component, OnInit } from '@angular/core';
import { RetrievePwdService } from './retrieve-pwd.service';
import { fadeIn } from '../../../shared/animations/fade-in';

@Component({
  selector: 'app-retrieve-pwd',
  templateUrl: './retrieve-pwd.component.html',
  styleUrls: ['./retrieve-pwd.component.css'],
  animations: [fadeIn]
})
export class RetrievePwdComponent implements OnInit {
  public user: any = {};
  public message: string;
  public messgeType: string;

  constructor(public retrievePwdService: RetrievePwdService) { }

  ngOnInit(): void {
  }

  public sendValidationEmail(): void {
    this.retrievePwdService.sendValidationEmail(this.user.email)
      .subscribe(
        data => {
          this.message = data.message;
          this.messgeType = 'success';
        },
        error => {
          this.message = error.messge;
          this.messgeType = 'danger';
        }
      );
  }

}
