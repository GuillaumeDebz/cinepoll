import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  // CONNECTE //
  isConnect: boolean = false


  constructor( private router: Router) { }


  setToken(token: string): void {
    this.isConnect = true;
    localStorage.setItem('token', token)
    this.router.navigate(['user']);
  }


  getToken(): string | null {
    return localStorage.getItem('token')
  }


  clearToken(): void {
    this.isConnect = false;
    localStorage.removeItem('token')
    this.router.navigate(["authentification"])
  }

}
