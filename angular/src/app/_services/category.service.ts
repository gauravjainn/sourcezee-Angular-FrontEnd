import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

//const baseUrl = 'http://69.48.150.9:5004/api/admin/';
const baseUrl = environment.BaseUrl+ '/category';

const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmNlZGZjOTQ5MWQyZDEzMzAwMjZiMCIsImlhdCI6MTY2ODA4MzcwNCwiZXhwIjoxNjcwNjc1NzA0fQ.dCYeWRA5hst_FeRja-lCg-1ol_L2w6KEB7r24XudkoQ';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization':'Bearer '+accessToken})
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  
  getAll(): Observable<any> {
    //return this.http.get<any>(baseUrl + 'categories', httpOptions);
    return this.http.get<any>(baseUrl, httpOptions);
  }
  
}
