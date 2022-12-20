import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIURL } from '../shared/api.constant';

 
@Injectable({
    providedIn: 'root'
})
export class DashboardService {
   
    constructor(private http: HttpClient) { }

    getOurCollectionData() {
        return this.http.get(APIURL.ourCollection);
    }

    getshopByFactorys(){
        return this.http.get(APIURL.shopByFactory);
    }
    
    getshopByCategory(){
        return this.http.get(APIURL.shopByCategory);
    }

    getshopByStyle(){
        return this.http.get(APIURL.shopByStyle);
    }
}