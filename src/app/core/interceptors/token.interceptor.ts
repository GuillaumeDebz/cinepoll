import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  
  constructor( private serviceToken: TokenService ) {}


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.serviceToken.getToken()

    if (token !== null){
      
      let clone = req.clone({                                                                   // On ne peut pas modifier la req originelle (dans l'intercept) mais on peut la cloner
        headers: req.headers.set('Authorization', 'bearer '+token)
      });

      console.log(clone);

      return next.handle(clone);    // clone = req originelle + header
    };
    
    return next.handle(req);
  };
};

export const TokenInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,             // Brancher au bon endroit
    useClass: TokenInterceptor,             // Utilise la class TokenInterceptor ci-dessus
    multi: true                             // A disposition partout
  };