import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import * as fromAuth from './reducers/auth.reducer';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './effects/auth.effects';

import { AuthRoutingModule } from './auth.route';
import { LoginComponent } from './login/login.component';

import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', fromAuth.AuthReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
