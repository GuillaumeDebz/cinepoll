import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate {


  isConnect: boolean = false

  constructor(
    private router: Router,
    private serviceToken: TokenService
  ){}


  canActivate(): Observable<boolean> | boolean {
    this.isConnect = this.serviceToken.isConnect

    if(this.isConnect){
      return true
    }

    else{
      this.router.navigate(["authentification"])
      return false
    }
    
  }
  
}
