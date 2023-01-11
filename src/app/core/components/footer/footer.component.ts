import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {}
  
  // HISTORY  //
  goToHistory() {
    this.router.navigate(['user/history']);
  };

  // POLL  //
  goToPoll() {
    this.router.navigate(['user/poll']);
  };
  // FRIENDS  //
  goToFriends() {
    this.router.navigate(['user/friends']);
  };
}
