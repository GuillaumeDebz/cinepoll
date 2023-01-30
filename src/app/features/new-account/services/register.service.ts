import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/core/models/interfaces/profile';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseURL: string = environment.baseURL;

  constructor(private http: HttpClient) { }

  
  // REGISTER //
  register(value: Profile): Observable<{ token: string }> {

    return this.http.post<{ token: string }>(this.baseURL + "user/register", value)
  };


}
