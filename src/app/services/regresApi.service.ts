import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError } from 'rxjs';
import { UrlBase } from '../models/urlBase';
import e from 'express';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class RegresApiService {

  constructor(private http:HttpClient) { }

  public login(login:Login):Observable<any>{
    return this.http.post(UrlBase.reqres+"/api/login",login).pipe(
      catchError(error =>{
        console.error(error);
       
        return EMPTY; })
    )
  }
  public register (credenciais:Login):Observable<any>{
    return this.http.post(UrlBase.reqres+"/api/register",credenciais).pipe(
      catchError(error =>{
        console.error(error);
       
        return EMPTY; })
    )
  }
}
