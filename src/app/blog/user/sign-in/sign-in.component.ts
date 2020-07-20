import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../../shared/animations/fade-in';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  animations: [fadeIn]
})
export class SignInComponent implements OnInit {
  public user: any = {};
  public error: Error;

  constructor() { }

  ngOnInit(): void {
  }

  public doLogin(): void {
  }

  public retrievePwd(): void {
  }

}
