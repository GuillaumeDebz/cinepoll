import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountProperties } from 'src/app/core/models/enum/accountproperties';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.page.html',
  styleUrls: ['./new-account.page.scss'],
})
export class NewAccountPage implements OnInit {

  // Création formulaire //
  public formRegister: FormGroup;

  // Enum AccountProperties //
  accountProperties = AccountProperties

  // HIDE PASSWORD //
  hide: boolean = true


  // CONSTRUCTOR //
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.formRegister = this.generateForm();
  }


  // NGONINIT //
  ngOnInit() {
  };


  // GENERATE FORM //
  public generateForm(): FormGroup {
    const formRegister = this.fb.group({
      [AccountProperties.EMAIL]: [null, [Validators.required, Validators.email]],
      [AccountProperties.PSEUDO]: [null, [Validators.required, Validators.minLength(3)]],
      [AccountProperties.PASSWORD]: [null, [Validators.required]],
      [AccountProperties.CONFIRMPASSWORD]: [null, [Validators.required]]
    },)
    return formRegister;
  };

  
  // HIDE PASSWORD (get hide status) //
  public hidePassword(status: boolean) {
    this.hide = status;
  }


  // CREER NOUVEAU COMPTE  //
  creerCompte() {
    this.router.navigate(['user']);
  };


}
