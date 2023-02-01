import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountProperties } from 'src/app/core/models/enum/accountproperties';
import { Profile } from 'src/app/core/models/interfaces/profile';
import { TokenService } from 'src/app/core/services/token.service';
import { RegisterService } from './services/register.service';
import { matchPasswordValidator } from './validators/matchPassword.validator';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.page.html',
  styleUrls: ['./new-account.page.scss'],
})
export class NewAccountPage implements OnInit {

  // Création formulaire //
  public formRegister: FormGroup;

  // Enum AccountProperties //
  accountProperties = AccountProperties;

  // Message d'erreur //
  errorMessage: string = "";

  // HIDE PASSWORD //
  hide: boolean = true;


  // CONSTRUCTOR //
  constructor(
    private fb: FormBuilder,
    private serviceRegister: RegisterService,
    private serviceToken: TokenService
  ) {
    this.formRegister = this.generateForm();
  };


  // NGONINIT //
  ngOnInit() {
  };


  // GENERATE FORM //
  public generateForm(): FormGroup {
    const formRegister = this.fb.group({
      [AccountProperties.EMAIL]: [null, [Validators.required, Validators.email]],
      [AccountProperties.PSEUDO]: [null, [Validators.required, Validators.minLength(3)]],
      [AccountProperties.PASSWORD]: [null, [Validators.required, Validators.minLength(6)]],
      [AccountProperties.CONFIRMPASSWORD]: [null, [Validators.required, Validators.minLength(6)]]
    }, {
      validators : [matchPasswordValidator]
    }
    
    )
    return formRegister;
  };


  // HIDE PASSWORD (get hide status) //
  public hidePassword(status: boolean) {
    this.hide = status;
  }


  // CREER NOUVEAU COMPTE  //
  public creerCompte() {
    
    if (this.formRegister.valid) {

      // Mapper //
      const profile: Profile = {
        pseudo : this.formRegister.get(this.accountProperties.PSEUDO)?.value,
        email: this.formRegister.get(this.accountProperties.EMAIL)?.value,
        password: this.formRegister.get(this.accountProperties.PASSWORD)?.value
      }

      this.serviceRegister.register(profile)
      .subscribe({
        next: (data: any) => {
          this.serviceToken.setToken(data.token)
          this.formRegister.reset()
        }, 
        error: err => {
          this.errorMessage = err.error          
        }
      })
    }
  };




}
