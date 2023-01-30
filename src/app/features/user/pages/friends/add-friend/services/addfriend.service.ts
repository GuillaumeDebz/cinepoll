import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddfriendService {

  baseURL: string = environment.baseURL;

  constructor( private http: HttpClient) { }

    // ADD FRIEND  //
    // addFriend (value: Profile): Observable<{ token: string }> {

    //   return this.http.post<{ pseudo: string }>(this.baseURL + "friends/addFriend", value)
    // };

}
