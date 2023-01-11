import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.page.html',
  styleUrls: ['./add-friend.page.scss'],
})
export class AddFriendPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // CONFIRMER LES CHANGEMENTS  //
  sendInvitation() {
    this.router.navigate(['user/friends']);
  };
}
