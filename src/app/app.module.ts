import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SignUpComponent } from './blog/user/sign-up/sign-up.component';
import { RetrievePwdComponent } from '../app/blog/user/retrieve-pwd/retrieve-pwd.component';

// 通知模块
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// 国际化模块
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { PopUpComponent } from './blog/pop-up/pop-up.component';
import { TimerComponent } from './blog/timer/timer.component';

// 国际化模块
export function createTranslateHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    RetrievePwdComponent,
    PopUpComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // 通知模块
    ToastModule,
    BrowserAnimationsModule,
    // 国际化模块
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateHttpLoader),
        deps: [HttpClient]
      }
    }),
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    // 通知模块
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
