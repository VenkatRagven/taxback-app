import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './Users';


@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  // api url to get all user transactions
  defaultUser = "ragav@gmail.com";
  api_URL = "https://jointhecrew.in/api/txns/";

  //Create constructor to get Http instance
  constructor(private http: HttpClient) {
  }

  //get all user transactions
  getUserDetails(){
    return this.http.get(this.api_URL + this.defaultUser);
  }

  createNewUser(formData){
    return this.http.post(this.api_URL+formData.user+"/"+formData.id, formData);
  }
  deleteNewUser(formData){
    console.log(formData);
    return this.http.delete(this.api_URL+formData.user+"/"+formData.id, formData);
    
  }
}
