import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;
  constructor(private http: HttpClient) { 
    this.ROOT_URL='http://localhost:4000';
  }

  get(uri: String){
    return this.http.get(`${this.ROOT_URL}/${uri}`)
  }
  
}
