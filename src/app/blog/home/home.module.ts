import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { OnlineContactComponent } from './online-contact/online-contact.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent,
    OnlineContactComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
