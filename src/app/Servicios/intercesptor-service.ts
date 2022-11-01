import { HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "./token.service";

@Injectable({
    providedIn: 'root'
})

export class IntercesptorService {
    constructor(private tokenService: TokenService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        let intReq = req;
        const token = this.tokenService.getToken();
        if(token != null){
            intReq = req.clone({
                headers: req.headers.set('Autorization','Bearer' + token)
            })
        }
        return next.handle(intReq);
    }
}

export const interceptorProvider = [{
    provider: HTTP_INTERCEPTORS,
    useClass: IntercesptorService,
    multi: true
}];