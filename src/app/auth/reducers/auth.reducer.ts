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

export function authReducer(state = [], action: AuthActions.actions) {
  switch (action.type) {
    case AuthActionTypes.LoginUser:
      return action;
    case AuthActionTypes.LoggedUser:
      return {
        ...state,
        isLoading: false,
        token: action.payload,
      };
    default:
      return state;
  }
}
