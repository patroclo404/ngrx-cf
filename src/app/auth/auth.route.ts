import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(APP_ROUTES)],
    exports: [RouterModule]
  })
export class AuthRoutingModule { }
