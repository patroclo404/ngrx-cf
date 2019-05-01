import { environment } from '../../environments/environment';


import {
  ActionReducer,
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import { RouterStateUrl } from '../utils/utils.ngrx';
import * as fromAuth from '../auth/reducers/auth.reducer';


import { storeFreeze  } from 'ngrx-store-freeze';

// State interface it's like a map
export interface State {
  auth: fromAuth.State;
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

//
export const reducers: ActionReducerMap<State|any> = {
  auth: fromAuth.AuthReducer,
  router: fromRouter.routerReducer,
};

// to get what we are doing
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action: any): State => {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}
// depends the environment to do freeze
export const metaReducers: MetaReducer<State>[] = !environment.production
? [logger, storeFreeze]
: [];

export const getAuthState = createFeatureSelector<fromAuth.State>('auth');

export const getAuth = createSelector(
  getAuthState,
  fromAuth.getAuthState
);

export const getAuthLoading = createSelector(
  getAuthState,
  fromAuth.getAuthLoading
);

export const getAuthError = createSelector(
  getAuthState,
  fromAuth.getAuthError
);



