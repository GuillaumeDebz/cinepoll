import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Friend } from 'src/app/core/models/interfaces/friend';
import { FriendsListService } from './services/friends-list.service';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {


  // RECUPRER FRIENDS LIST //
  friendsList$: Observable<Friend[]>;


  constructor(
    private router: Router,
    private serviceFriendsList: FriendsListService
    ) {
      this.friendsList$ = this.serviceFriendsList.getFriendsList()
      
     }

  ngOnInit() {
  }
  

  // AJOUTER UN AMI  //
  addFriend() {
    this.router.navigate(['user/friends/addFriend']);
  };

}
