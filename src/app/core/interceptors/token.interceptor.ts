import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/features/authentification/services/login.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {


  constructor( private serviceLogin: LoginService ) {}


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (localStorage.getItem('Token') !== null){
      let clone = req.clone({
        headers: req.headers.set('Authorization', 'bearer '+localStorage.getItem('Token'))
      });

      console.log(clone);
      return next.handle(clone);
      
    };
    
    return next.handle(req);

  };
};

export const TokenInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  };