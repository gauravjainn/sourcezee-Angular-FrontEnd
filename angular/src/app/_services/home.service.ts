import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIURL } from '../shared/api.constant';

 
@Injectable({
    providedIn: 'root'
})
export class HomeService {
   
    constructor(private http: HttpClient) { }

    getBestSellingData() {
        return this.http.get(APIURL.bestSelling);
    }
}