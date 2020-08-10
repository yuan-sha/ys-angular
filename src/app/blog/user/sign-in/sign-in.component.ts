import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../../shared/animations/fade-in';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
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
              public activatedRoute: ActivatedRoute,
              public signInService: SignInService) { }

  ngOnInit(): void {
    console.log('--- sign-in-component ---');
    console.log(this.router);
    console.log(this.activatedRoute);

    const activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
    const routerState: RouterState = this.router.routerState;
    const routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

    console.log(activatedRouteSnapshot);
    console.log(routerState);
    console.log(routerStateSnapshot);
  }

  public doLogin(): void {
    console.log(this.user);
    this.signInService.login();
  }

  public retrievePwd(): void {
    this.router.navigateByUrl('retrievepwd');
  }

}
