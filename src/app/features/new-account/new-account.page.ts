import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountProperties } from 'src/app/core/models/enum/accountproperties';
import { Profile } from 'src/app/core/models/interfaces/profile';
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

  // Message d'erreur Login //
  errorMessage: string = "";

  // HIDE PASSWORD //
  hide: boolean = true;


  // CONSTRUCTOR //
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private serviceRegister: RegisterService
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
        next: token => {
          this.router.navigate(['user']);
        }, error: err => {
          this.errorMessage = err.error          
        }
      })
    }
  };




}
