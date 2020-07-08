import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public showToggleMenu = false;
  languageBtn;
  language;

  constructor(
    private messageService: MessageService,
    public translateService: TranslateService
  ) {
  }

  ngOnInit(){
    const browserLang = this.translateService.getBrowserLang();
    this.changeLanguage(browserLang);
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

}
