import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../../shared/animations/fade-in';
import { Router } from '@angular/router';
import { SignInService } from './sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  animations: [fadeIn]
})
export class SignInComponent implements OnInit {
  public user: any = {};
  public error: Error;

  constructor(public router: Router,
              public signInService: SignInService) { }

  ngOnInit(): void {
  }

  public doLogin(): void {
    console.log(this.user);
    this.signInService.login();
  }

  public retrievePwd(): void {
    this.router.navigateByUrl('retrievepwd');
  }

}
