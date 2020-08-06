import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { SignInComponent } from '../blog/user/sign-in/sign-in.component';
import { SignUpComponent } from '../blog/user/sign-up/sign-up.component';



@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  exports: [
    SignInComponent,
    CommonModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class SharedModule { }
