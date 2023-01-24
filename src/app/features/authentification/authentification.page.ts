import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/features/authentification/services/login.service';
import { LoginProperties } from '../../core/models/enum/login-properties';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {


  // Création formulaire //
  public formLogin: FormGroup;

  // Enum//
  loginProperties = LoginProperties

  // Message d'erreur Login //
  errorMessage: string = ""

  // CACHER MOT DE PASSE //
  hide: boolean = true


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
      [LoginProperties.EMAIL]: [null, [Validators.required, Validators.email]],
      [LoginProperties.PASSWORD]: [null, [Validators.required]]
    },)
    return formLogin;
  }


  // HIDE PASSWORD //
  public hidePassword(){
      this.hide = !this.hide
  }


  // CONNEXION  //
  public connexion() {
    if (this.formLogin.valid) {
      this.serviceLogin.login(
        this.formLogin.value
      ).subscribe({
        next: token => {
          this.router.navigate(['user']);
        }, error: err => {
          this.errorMessage = err.error
        }
      })
    }
  }


  // CREER NOUVEAU COMPTE  //
  public creerCompte() {
    this.router.navigate(['newAccount']);
  };

}
