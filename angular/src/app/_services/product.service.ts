import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../_models/product.model';
import { environment } from 'src/environments/environment';

//const baseUrl = 'http://69.48.150.9:5004/api/product';
const baseUrl = environment.BaseUrl +'/api/';

const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmNlZGZjOTQ5MWQyZDEzMzAwMjZiMCIsImlhdCI6MTY2ODA4MzcwNCwiZXhwIjoxNjcwNjc1NzA0fQ.dCYeWRA5hst_FeRja-lCg-1ol_L2w6KEB7r24XudkoQ';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public responseData: any;
  private url: any;

  constructor( private http: HttpClient) { 
  }
  
  public getCategoryProducts(id:any): Observable<any> {
    return this.http.get(baseUrl + 'category/'+ id, httpOptions);
  }

  /*
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(baseUrl);
  }

  // get(id: any): Observable<Product> {
  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}?title=${title}`);
  }
  
  */
  
}
