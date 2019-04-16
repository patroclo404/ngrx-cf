import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LoggedUser = '[Auth] LOGGED_USER',
  LoginUser = '[Auth] LOGIN_USER',
  LoginUserError = '[Auth] LOGGED_USER_ERROR',
  LoggedIn = '[Auth] LOGGED_IN',
  LogoutAuth = '[Auth] LOGOUT_USER',
}



