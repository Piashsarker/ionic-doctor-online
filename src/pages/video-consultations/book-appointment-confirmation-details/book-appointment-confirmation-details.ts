import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AppointmentInterface} from "../../../model/Appointment";
import {FormBuilder, FormGroup} from "@angular/forms";

/**
 * Generated class for the BookAppointmentConfirmationDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-appointment-confirmation-details',
  templateUrl: 'book-appointment-confirmation-details.html',
})
export class BookAppointmentConfirmationDetailsPage {

  appointmentDetails: AppointmentInterface;

  private form: FormGroup;
  private submitted: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    if (this.navParams.data != undefined) {
      this.appointmentDetails = this.navParams.data;
    }
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
      promo: ['']
    });

  }
}
