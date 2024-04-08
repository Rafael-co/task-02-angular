import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, EMPTY } from 'rxjs';
import { UrlBase } from '../models/urlBase';
import { CatModel } from '../models/CatModel';

@Injectable({
  providedIn: 'root'
})
export class CatApiService {

  constructor(private http:HttpClient) { }

  searchImage():Observable<CatModel[]>{
    return this.http.get<CatModel[]>(UrlBase.catApi+"/search").pipe(catchError( erro => {
      console.error(erro);
       return EMPTY}))
  }
   serchTenImages():Observable<CatModel[]>{
   return this.http.get<CatModel[]>(UrlBase.catApi+"/search?limit=10").pipe(catchError( erro => {
    console.error(erro);
     return EMPTY}))
}
}
