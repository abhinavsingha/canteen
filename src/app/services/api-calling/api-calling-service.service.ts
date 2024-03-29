import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiCallingServiceService {

  constructor(private http: HttpClient) {}

  postApi(url: any, jsonPayload: any) {
    return this.http.post(url, jsonPayload).pipe(
      map((results) => results),
      catchError(this.handleError)
    );
  }

  newpostApi(url: any, jsonPayload: any): Observable<Object> {
    const headers = new HttpHeaders().set('authorityUnit', 'demo');
    return this.http.post(url, JSON.stringify(jsonPayload)).pipe(
      map((results) => results),
      catchError(this.handleError)
    );
  }
  //
  token:string|null='';
  postApiWithToken(url: any, jsonPayload: any) {
    this.token=localStorage.getItem('token');
    if(this.token!=null){
      debugger;
      const headers = new HttpHeaders({
        'Authorization': this.token
      });
      return this.http.post(url, jsonPayload,{headers}).pipe(
        map((results) => results),
        catchError(this.handleError)
      );
    }
    else{
      debugger;
      console.log(localStorage.getItem('token'));
      return this.http.post(url, jsonPayload).pipe(
        map((results) => results),
        catchError(this.handleError));
    }
  }


  getApiWithToken(url: any) {
    this.token=localStorage.getItem('token');
    if(this.token!=null) {
      debugger;
      const headers = new HttpHeaders({
        'Authorization': this.token
      });
      return this.http.get(url,{headers}).pipe(
        map((results) => results),
        catchError(this.handleError)
      );
    }
    else{
      debugger;
      console.log(localStorage.getItem('token'));
      return this.http.get(url).pipe(
        map((results) => results),
        catchError(this.handleError));
    }
  }
  getApi(url: any) {
    return this.http.get(url).pipe(
      map((results) => results),
      catchError(this.handleError)
    );
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(error);
    return throwError(() => error);

  }
}
