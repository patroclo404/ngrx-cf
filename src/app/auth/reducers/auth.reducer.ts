import * as AuthActions from '../actions/auth.actions';
import { AuthActionTypes } from '../actions/auth.actions';


export interface State {
  user: Array<any>;
  tokens: Array<any>;
  error: string;
  isLoading: boolean;
}

const initianState: State = {
  user: [],
  tokens: [],
  error: '',
  isLoading: false,
};

export function AuthReducer(state = [], action: AuthActions.actions) {
  switch (action.type) {
    case AuthActionTypes.LoginUser:
      console.log('reducer entre en login');
      return {
        ...state,
        isLoading: true,
        action
      };
    case AuthActionTypes.LoggedUser:
      console.log('entre al logged');
      return {
        ...state,
        isLoading: false,
        tokens: action.payload,
      };
    case AuthActionTypes.LoginUserError:
      console.log('entre al error');
      return {
        ...state,
        isLoading: false,
        error: 'Email or password incorrect auth action'
      };
    default:
      return state;
  }
}

export const getAuthState = (state: State) => state.user;
export const getAuthAction = (action: any) => action.payload;
export const getAuthError = (state: any) => {
  console.log('error state', state.auth.error);
  return state.auth.error;
};
export const getAuthLoading = (state: any) => {
  console.log('loading', state.auth.isLoading);
  return state.auth.isLoading;
};
