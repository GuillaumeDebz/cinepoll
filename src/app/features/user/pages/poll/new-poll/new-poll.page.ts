import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pollproperties } from 'src/app/core/models/enum/pollproperties';

@Component({
  selector: 'app-new-poll',
  templateUrl: './new-poll.page.html',
  styleUrls: ['./new-poll.page.scss'],
})
export class NewPollPage implements OnInit {


   // Création formulaire //
   public formNewPoll: FormGroup;

  // Enum PollProperties //
  pollproperties = Pollproperties;


  constructor(
    private router: Router,
    private fb: FormBuilder
    ) {
      this.formNewPoll = this.generateForm();
     }

  ngOnInit() {
  }

  // GENERATE FORM //
  public generateForm(): FormGroup {
    const formNewPoll = this.fb.group({
      [Pollproperties.GENRE]: [null, [Validators.required, Validators.minLength(3)]],
      [Pollproperties.COMMENT]: [null],
      [Pollproperties.EXCLUDED]: [null]
    })
      return formNewPoll;
  }

  
  // CREE NOUVEAU SONDAGE  //
  newPoll() {
    this.router.navigate(['user/poll']);
  };

}
