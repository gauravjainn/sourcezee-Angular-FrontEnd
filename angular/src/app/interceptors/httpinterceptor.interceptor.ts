import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';


@Injectable()
export class JWTHttpInterceptor implements HttpInterceptor {

    constructor(private accountService: AccountService) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
console.log("sdsss")
        const account = this.accountService.getAuthToken();
        const isLoggedIn = account?.token;

        if (isLoggedIn) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${account.token}` }
            });
        }

        return next.handle(request);
    }
}
