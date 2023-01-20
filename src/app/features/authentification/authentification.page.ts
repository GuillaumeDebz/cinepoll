import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/features/authentification/services/login.service';
import { LoginProperties } from './enum/login-properties';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {


  // Création formulaire
  public formLogin: FormGroup;

  // Enum//
  loginProperties = LoginProperties


  // CONSTRUCTOR //
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private serviceLogin: LoginService
  ) {
    this.formLogin = this.generateForm();
  }


  // NGONINIT //
  ngOnInit() {      // VOID OBLIGATOIRE ?
    if (this.serviceLogin.isConnect) {
      this.router.navigate(['user'])
    };
  };


  // GENERATE FORM //
  public generateForm(): FormGroup {
    const formLogin = this.fb.group({
      [LoginProperties.EMAIL]: [null, [Validators.required]],
      [LoginProperties.PASSWORD]: [null, [Validators.required]]
    },)
    return formLogin;
  }


  // CONNEXION  //
  checkConnection() {
    this.router.navigate(['user']);
  };


  // CREER NOUVEAU COMPTE  //
  creerCompte() {
    this.router.navigate(['newAccount']);
  };

}
