import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  insertData(data){
    return this.http.post("https://contact-us-app.herokuapp.com/writeToDB",data);
  }

  getData(){
    return this.http.get("https://contact-us-app.herokuapp.com/displayMessages");
  }
}
