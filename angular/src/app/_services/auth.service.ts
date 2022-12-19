import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const AUTH_API = environment.BaseUrl + '/user/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
	console.log("Calling Auth Servic");
  }

  login(username: string, password: string): Observable<any> {
  console.log("Inside auth service login");
    return this.http.post(AUTH_API + 'login', {
      username,
      password
    }, httpOptions);
  }
 
  register(user_type: string, company_name: string, first_name: string, last_name: string, mobile: string,  fax: string, address: string, country: string, city: string, state: string, zip: string, tax_id: string, email: string, password: string): Observable<any> {
  
   console.log("Inside auth service register");
   
   console.log(this.http.post(AUTH_API + 'register', {user_type,company_name,first_name,last_name,mobile,fax,address,country,city,state,zip,tax_id,email,password}, httpOptions));
  
    return this.http.post(AUTH_API + 'register', {
  
		user_type,
		company_name,
		first_name,
		last_name,
		mobile,
		fax,
		address,
		country,
		city,
		state,
		zip,
		tax_id,
		email,
		password
	  
    }, httpOptions);
  }
}
