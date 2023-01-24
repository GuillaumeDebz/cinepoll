import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from '../../services/logout.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private router: Router,
    private serviceLogout: LogoutService
    ) { }

  ngOnInit() {
  }

  // CONFIRMER LES CHANGEMENTS  //
  confirmChange() {
    this.router.navigate(['user/poll']);
  };

  // DECONNEXION  //
  deconnexion() {
    this.serviceLogout.logout();
  };
}
