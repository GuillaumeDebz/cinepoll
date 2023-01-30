import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/core/models/interfaces/profile';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseURL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  
  // REGISTER //
  register(value: Profile): Observable<{ token: string }> {

    return this.http.post<{ token: string }>(this.baseURL + "user/register", value)
  };


}
