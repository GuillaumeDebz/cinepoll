import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Friend } from 'src/app/core/models/interfaces/friend';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddfriendService {

  baseURL: string = environment.baseURL;

  constructor( private http: HttpClient) { }

    // ADD FRIEND  //
    addFriend (pseudo: Friend): Observable<{ pseudo: string }> {

      return this.http.patch<{ pseudo: string }>(this.baseURL + "user/addFriend", { pseudo})
    };

}
