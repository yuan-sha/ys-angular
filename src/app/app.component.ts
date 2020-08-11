import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { SignInService } from './blog/user/sign-in/sign-in.service';
import { SignUpService } from './blog/user/sign-up/sign-up.service';
import { Router, RouterState, RouterStateSnapshot } from '@angular/router';
import { merge } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public showToggleMenu = false;
  languageBtn;
  language;
  public currentUser: any;
  // tslint:disable-next-line:ban-types
  private globalClickCallbackFn: Function;

  constructor(
    public elementRef: ElementRef,
    public renderer: Renderer2,
    public router: Router,
    private messageService: MessageService,
    public translateService: TranslateService,
    public signInService: SignInService,
    public signUpService: SignUpService
  ) {
  }

  ngOnInit(){
    this.globalClickCallbackFn = this.renderer.listen(this.elementRef.nativeElement, 'click', (event: any) => {
      console.log('全局监听点击事件>' + event);
    });

    const browserLang = this.translateService.getBrowserLang();
    this.changeLanguage(browserLang);
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));


    merge(this.signInService.currentUser, this.signUpService.currentUser)
      .subscribe(
        data => {
          this.currentUser = data;
          const routerState: RouterState = this.router.routerState;
          const routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

          // 如果是从/login这个URL进行的登录，跳转到首页，否则什么都不做
          // tslint:disable-next-line:triple-equals
          if (routerStateSnapshot.url.indexOf('/login') != -1 || routerStateSnapshot.url.indexOf('/register') != -1) {
            this.router.navigateByUrl('/home');
          }
        },
        error => console.error(error)
      );
  }

  changeLanguage(lang: string){
    this.translateService.use(lang);
    this.settingBtn(lang);
  }

  settingBtn(language: string){
    if (language === 'zh'){
      this.languageBtn = 'English';
      this.language = 'en';
    }else{
      this.languageBtn = '中文';
      this.language = 'zh';
    }
  }

  onMenuToggle() {
    this.showToggleMenu = !this.showToggleMenu;
  }

  showSuccess(){
    this.messageService.add({severity: 'success', summary: 'SuccessMessage', detail: 'Ordersubmitted'});
  }

  public doLogout(): void {
    this.showToggleMenu = false;
    this.signInService.logout();
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: '退出成功', life: 500 });
    this.router.navigateByUrl('');
  }

}
