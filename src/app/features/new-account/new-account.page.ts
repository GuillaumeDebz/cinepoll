import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.page.html',
  styleUrls: ['./new-account.page.scss'],
})
export class NewAccountPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

    // CREER NOUVEAU COMPTE  //
    creerCompte(){
      this.router.navigate(['user']);
    };
    

}
