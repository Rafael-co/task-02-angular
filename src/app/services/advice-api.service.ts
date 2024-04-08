import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdviceApiService {

  constructor(private http:HttpClient) { }


  getadvice():Observable<any>{
    return this.http.get("https://api.adviceslip.com/advice")
  }
}
