import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppValidators} from "../../Validators/AppValidators";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  isActiveToggleTextPassword: Boolean = true;
  private form: FormGroup;
  private submitted: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder) {

    this.buildForm();
  }

  public toggleTextPassword(): void {
    this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword == true) ? false : true;
  }

  public isShowPassword(): boolean {
    return this.isActiveToggleTextPassword === true;
  }

  validatePasswordAction() {
    this.submitted = true;

    if (!this.form.valid) {
      this.submitted = false;
      return false;
    }


  }

  forgotPassword() {


  }

  private buildForm() {

    this.form = this.formBuilder.group({
      password: ['', Validators.compose([Validators.minLength(8), AppValidators.isValidPassword, Validators.maxLength(30), Validators.required])],
      username: ['']
    });

  }


}
