import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { ListtasksComponent } from './components/listtasks/listtasks.component';
import { CreatetaskComponent } from './components/createtask/createtask.component';

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
  },{
    path: 'listtasks',
    component: ListtasksComponent
  },{
    path: 'createtask',
    component: CreatetaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
