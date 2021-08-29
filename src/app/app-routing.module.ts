import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './layout/homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },{
    path: 'signup',
    component: SignupComponent
  },{
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
