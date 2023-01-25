import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from '../../services/logout.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  
  // HIDE PASSWORD //
  hide: boolean = true

  
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


  // HIDE PASSWORD (get hide status) //
  public hidePassword(status: boolean) {
    this.hide = status;
  }


  // DECONNEXION  //
  deconnexion() {
    this.serviceLogout.logout();
  };
}
