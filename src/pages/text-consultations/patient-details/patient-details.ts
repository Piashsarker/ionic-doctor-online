import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";

/**
 * Generated class for the PatientDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patient-details',
  templateUrl: 'patient-details.html',
})
export class PatientDetailsPage {

  genders: Array<{ id: string, title: string }> = [
    {id: 'male', title: 'Male'},
    {id: 'female', title: 'Female'},
    {id: 'other', title: 'Other'}
  ];
  private form: FormGroup;
  private submitted: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.buildForm();
  }


  validatePasswordAction() {
    this.submitted = true;
    if (!this.form.valid) {
      this.submitted = false;
      return false;
    }


  }

  private buildForm() {

    this.form = this.formBuilder.group({
      full_name: [''],
      age: [''],
      gender: [''],
      weight: [''],
      height: [''],
      address: [''],
      city: ['']
    });

  }
}
