import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  msgLogin: string = '';
  onLogin: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormGroup(
      {
        email: new FormControl(
          '' ,
          [
            Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
          ]
        ),
        password: new FormControl(
          '',
          [
            Validators.required,
            Validators.pattern(/[A-Za-z\d!@#$%^&*()-+<>]{8,20}/)
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
      this.onLogin = true;
      this.authService.userLogin(this.loginForm.value)
      .subscribe( (res) => {
        this.onLogin = false;
        this.router.navigate(['/dashboard']);

      }, (error) => {
        this.onLogin = false;
        this.msgLogin = 'Invalid user or password';
        setTimeout( () => {
          this.msgLogin = '';
        }, 5000);
      });
    }
  }
}
