import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountProperties } from 'src/app/core/models/enum/accountproperties';
import { AddfriendService } from './services/addfriend.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.page.html',
  styleUrls: ['./add-friend.page.scss'],
})
export class AddFriendPage implements OnInit {

  // Création formulaire //
  public formAddFriend: FormGroup;

  // Enum AccountProperties //
  accountProperties = AccountProperties;


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private serviceAddFriend: AddfriendService
  ) {
    this.formAddFriend = this.generateForm();
  }


  ngOnInit() {
  }


  // GENERATE FORM //
  public generateForm(): FormGroup {
    const formAddFriend = this.fb.group({
      [AccountProperties.PSEUDO]: [null, [Validators.required, Validators.minLength(3)]]
    })
    return formAddFriend;
  };


  // AJOUTER UN AMI  //
  sendInvitation() {
    this.router.navigate(['user/friends']);
  };
}