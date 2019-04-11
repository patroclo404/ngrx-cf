import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  { path: 'login', loadChildren: './auth/auth.module#AuthModule' },
  //   { path: '**', pathMatch: 'full', redirectTo: 'login' }
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
