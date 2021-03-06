import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './blog/user/sign-in/sign-in.component';
import { SignUpComponent } from './blog/user/sign-up/sign-up.component';
import {RetrievePwdComponent} from './blog/user/retrieve-pwd/retrieve-pwd.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./blog/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./blog/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'post',
    loadChildren: () => import('./blog/post/post.module').then(m => m.PostModule)
  },
  {
    path: 'login',
    component: SignInComponent
  },
  {
    path: 'register',
    component: SignUpComponent
  },
  {
    path: 'retrievepwd',
    component: RetrievePwdComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
