import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { SignInComponent } from '../blog/user/sign-in/sign-in.component';
import { SanitizeHtmlPipe } from './pipes/sanitize-html-pipe';


@NgModule({
  declarations: [
    SignInComponent,
    SanitizeHtmlPipe
  ],
  exports: [
    SignInComponent,
    CommonModule,
    FormsModule,
    TranslateModule,
    SanitizeHtmlPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule
  ]
})
export class SharedModule { }
