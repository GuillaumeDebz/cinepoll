import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.page.html',
  styleUrls: ['./poll.page.scss'],
})
export class PollPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // CREER NOUVEAU SONDAGE  //
  newPoll() {
    this.router.navigate(['user/poll/newPoll']);
  };

}
