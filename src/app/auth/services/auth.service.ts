import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, delay } from 'rxjs/operators';
import { of } from 'rxjs';

import { IUser } from '../../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = '';
  urlLogin: string = `${this.apiUrl}/users/user/login`;
  urlUser: string = `${this.apiUrl}/users/user`;

  userFake: IUser = {
    username: 'fake',
    email: 'a@mail.com',
    password: '12345'
  };

  constructor(
    private http: HttpClient,
    private route: Router,
  ) { }

  userLogin(req) {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })
    // };

    // // tslint:disable-next-line:align
    // return this.http.post(this.urlLogin, req, httpOptions)
    // .pipe(
    //   catchError(this.handleError)
    // );
    let send = false;
    if (JSON.stringify(req) === JSON.stringify(this.userFake)) {
      send = true;
    }
    return of (send).pipe(delay(5000));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
