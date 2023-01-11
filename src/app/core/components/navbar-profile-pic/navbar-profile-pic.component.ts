import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-profile-pic',
  templateUrl: './navbar-profile-pic.component.html',
  styleUrls: ['./navbar-profile-pic.component.scss'],
})
export class NavbarProfilePicComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() { }

  // PROFILE  //
  goToProfile() {
    this.router.navigate(['user/profile']);
  };

}
