import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient,
               private cookieService: CookieService,
               private router: Router
  ) { }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  getEndUser(param) {
    const isTokenExist = this.cookieService.check('token');
    if (isTokenExist) {
      const isUsernameExist = this.cookieService.check('username');
      if (isUsernameExist) {
        return this.cookieService.get('username');
      } else {
        return 'ccomadmin';
      }
    } else {
      if (this.router.url === '/auth/login') {
        return param.username;
      }
    }
  }

  headerparams(param) {
    const params = new HttpParams(param);
    const token = this.cookieService.get('token');
    const endUser = this.getEndUser(param);
    const headerMap = {
      Authorization: 'Bearer  ' + token,
      'Content-Type': 'application/json;charset=UTF-8',
      'End-User': endUser,
      'End-User-Type': 'Admin',
      sourceSystem: 'Admin Portal'
    };
    const headers = new HttpHeaders(headerMap);
    return { headers, params };
  }

  isTokenExist() {
    if (this.router.url === '/auth/login') {
      return true;
    } else {
      const isTokenExist = this.cookieService.check('token');
      if (isTokenExist) {
        return true;
      } else {
        localStorage.setItem('auth', 'false');
        this.router.navigate(['/auth']);
      }
    }
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    const isTokenExist = this.isTokenExist();
    if (isTokenExist) {
      const headerparameter = this.headerparams(params);
      return this.http.get(`${path}`, headerparameter)
        .pipe(catchError(this.formatErrors));
    }
  }

  put(path: string, body: any): Observable<any> {
    const isTokenExist = this.isTokenExist();
    if (isTokenExist) {
      const headerparameter = this.headerparams('');
      return this.http.put(
        `${path}`,
        JSON.stringify(body), headerparameter
      ).pipe(catchError(this.formatErrors));
    }
  }

  post(path: string, body: any): Observable<any> {
    const isTokenExist = this.isTokenExist();
    if (isTokenExist) {
      const headerparameter = this.headerparams(body);
      return this.http.post(
        `${path}`,
        JSON.stringify(body), headerparameter
      ).pipe(catchError(this.formatErrors));
    }
  }

  patch(path: string, body: any): Observable<any> {
    const isTokenExist = this.isTokenExist();
    if (isTokenExist) {
      const headerparameter = this.headerparams('');
      return this.http.patch(
        `${path}`,
        JSON.stringify(body), headerparameter
      ).pipe(catchError(this.formatErrors));
    }
  }

  delete(path: string, body: any): Observable<any> {
    const isTokenExist = this.isTokenExist();
    if (isTokenExist) {
      const headerparameter = this.headerparams('');
      const headers = headerparameter.headers;
      const options: any = {headers, body};
      return this.http.delete(
        `${path}`, options
      ).pipe(catchError(this.formatErrors));
    }
  }

}
