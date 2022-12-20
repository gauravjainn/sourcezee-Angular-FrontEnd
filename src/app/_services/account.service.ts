import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIURL } from '../shared/api.constant';


@Injectable({
    providedIn: 'root'
})
export class AccountService {

    constructor(private http: HttpClient) { }

    LoginUser(requestdata: any) {
        return this.http.post(APIURL.Login, requestdata);
    }

    isAuthenticated() {
        var getstorage = localStorage.getItem("token");

        if (getstorage != null && getstorage != undefined && getstorage.length > 0)
            return true;
        else
            return false;
    }

    getAuthToken() {
        console.log("ss");
        
        var getstorage = localStorage?.getItem("token");

        if (getstorage != null && getstorage != undefined && getstorage.length > 0)
            return { token: getstorage }
        else
            return null
    }

}