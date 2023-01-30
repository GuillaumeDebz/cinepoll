import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/features/authentification/services/login.service';
import { AccountProperties } from '../../core/models/enum/accountproperties';
import { Login } from 'src/app/core/models/interfaces/login';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {

  // Création formulaire //
  public formLogin: FormGroup;

  // Enum AccountProperties //
  accountProperties = AccountProperties

  // Message d'erreur Login //
  errorMessage: string = ""

  // HIDE PASSWORD //
  hide: boolean = true


  // CONSTRUCTOR //
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private serviceLogin: LoginService,
  ) {
    this.formLogin = this.generateForm();
  }


  // NGONINIT //
  ngOnInit() {
  };


  // GENERATE FORM //
  public generateForm(): FormGroup {
    const formLogin = this.fb.group({
      [AccountProperties.EMAIL]: [null, [Validators.required, Validators.email]],
      [AccountProperties.PASSWORD]: [null, [Validators.required]]
    },)
    return formLogin;
  };


  // HIDE PASSWORD (get hide status) //
  public hidePassword(status: boolean) {
    this.hide = status;
  }


  // CONNEXION  //
  public connexion() {

    if (this.formLogin.valid) {

      // Mapper //
      const login: Login = {
        email: this.formLogin.get(this.accountProperties.EMAIL)?.value,
        password: this.formLogin.get(this.accountProperties.PASSWORD)?.value
      }

      this.serviceLogin.login(login).
      subscribe({
        next: token => {
          this.router.navigate(['user']);
        }, error: err => {
          this.errorMessage = err.error
        }
      })
    }
  };


  // CREER NOUVEAU COMPTE  //
  public creerCompte() {
    this.router.navigate(['newAccount']);
  };

}
