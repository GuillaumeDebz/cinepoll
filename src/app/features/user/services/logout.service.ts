import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/core/models/interfaces/profile';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  isConnect: boolean = false
  connectedUser: Profile | null = null

  
  constructor( private router: Router) { }

  // LOGOUT //
  logout() {
    this.isConnect = false
    this.connectedUser = null
    localStorage.removeItem("connectedUser")
    this.router.navigate(["authentification"])
  };

}
