import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-poll',
  templateUrl: './new-poll.page.html',
  styleUrls: ['./new-poll.page.scss'],
})
export class NewPollPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // CREE NOUVEAU SONDAGE  //
  newPoll() {
    this.router.navigate(['user/poll']);
  };

}
