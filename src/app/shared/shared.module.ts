import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { SignInComponent } from '../blog/user/sign-in/sign-in.component';



@NgModule({
  declarations: [
    SignInComponent
  ],
  exports: [
    SignInComponent,
    CommonModule,
    FormsModule,
    TranslateModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule
  ]
})
export class SharedModule { }
