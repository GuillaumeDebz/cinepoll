import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Friend } from 'src/app/core/models/interfaces/friend';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FriendsListService {

  baseURL: string = environment.baseURL;

  constructor(private http: HttpClient) { }


  getFriendsList(): Observable<Friend[]> {
    return this.http.get<Friend[]>(this.baseURL + "user/friendList");
  };

}
