import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import * as Auth from '../actions/auth.actions';
import * as fromAuth from '../reducers/auth.reducer';

import { IUser } from '../../interfaces/iuser';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: IUser = {
    username: 'fake',
    email: 'a@mail.com',
    password: '12345'
  };

  error$ = this.store.pipe(select(fromAuth.getAuthError));
  isLoading$ = this.store.pipe(select(fromAuth.getAuthLoading));
  constructor(
    private store: Store<any>,
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormGroup(
      {
        username: new FormControl(this.user.username),
        email: new FormControl(
          this.user.email ,
          [
            Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
          ]
        ),
        password: new FormControl(
          this.user.password,
          [
            Validators.required,
            Validators.pattern(/[A-Za-z\d!@#$%^&*()-+<>]{4,20}/)
          ]
        ),
      });
  }

  submitLogin() {
    if (!this.loginForm.valid) {
      Object.keys( this.loginForm.controls ).forEach( (key) => {
        if (this.loginForm.controls[key].invalid) {
          this.loginForm.controls[key].markAsTouched();
        }
      });
    } else {
      this.user = this.loginForm.value;
      this.store.dispatch(new Auth.LoginUser({user: this.user}));
      // this.onLogin = true;
      // this.authService.userLogin(this.loginForm.value)
      // .subscribe( (res) => {
      //   this.onLogin = false;
      //   console.log(res);
      //   this.msgLogin = (res) ? '' : 'Invalid user or password';
      // }, (error) => {
      //   this.onLogin = false;
      //   this.msgLogin = 'Invalid user or password';
      //   setTimeout( () => {
      //     this.msgLogin = '';
      //   }, 5000);
      // });
    }
  }
}
