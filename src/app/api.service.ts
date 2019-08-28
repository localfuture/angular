import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  insertData(data){

  console.log("Insert");
  console.log(data);
    return this.http.post("http://localhost:3000/writeToDB",data);
  }

  getData(){
    return this.http.get("http://localhost:3000/displayMessages");
  }
  searchData(data){
    return this.http.post("http://localhost:3000/searchMobile",data);
  }

  editData(data){
    return this.http.post("http://localhost:3000/editUser",data);
  }

  deleteData(data){
    return this.http.post("http://localhost:3000/deleteContact",data);
  }
}
