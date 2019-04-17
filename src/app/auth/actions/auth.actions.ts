import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LoggedUser = '[Auth] LOGGED_USER',
  LoginUser = '[Auth] LOGIN_USER',
  LoginUserError = '[Auth] LOGGED_USER_ERROR',
  LoggedIn = '[Auth] LOGGED_IN',
  LogoutAuth = '[Auth] LOGOUT_USER',
}

export class LoggedUser implements Action {
  readonly type = AuthActionTypes.LoggedUser;
  constructor(public payload: { isLogin: any }) {}
}

export class LoginUser implements Action {
  readonly type = AuthActionTypes.LoginUser;
  constructor(public payload: { user: string, password: string }) {}
}

export class LoginUserError implements Action {
  readonly type = AuthActionTypes.LoginUserError;
  constructor(public payload: { error: string }) {}
}

export class LoggedIn implements Action {
  readonly type = AuthActionTypes.LoggedIn;
  constructor(public payload: { isLogin: boolean }) {}
}

export class LogoutAuth implements Action {
  readonly type = AuthActionTypes.LogoutAuth;
  constructor(public payload: { isLogin: boolean }) {}
}

export type actions =
LoggedUser
| LoginUser
| LoginUserError
| LoggedIn
| LogoutAuth;
