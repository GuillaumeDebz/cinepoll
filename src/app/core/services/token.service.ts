import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor( private router: Router) { }


  setToken(token: string): void {
    localStorage.setItem('token', token)
    this.router.navigate(['user']);
  }


  getToken(): string | null {
    return localStorage.getItem('token')
  }


  clearToken(): void {
    localStorage.removeItem('token')
    this.router.navigate(["authentification"])
  }

}
