import { Component, OnInit } from '@angular/core';
import { LoginService } from '../authentification/services/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  // isConnect : boolean = false


  constructor(
    // private serviceLogin: LoginService
  ) { }


  ngOnInit() {
    // this.isConnect = this.serviceLogin.isConnect
  }



}
