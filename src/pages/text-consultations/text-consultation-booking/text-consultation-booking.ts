import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";
import {TextConsultationServiceInterface} from "../../../model/TextConsultation";
import {TreatmentCategoryInterface} from "../../../model/TreatmentCategory";

/**
 * Generated class for the TextConsultationBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-text-consultation-booking',
  templateUrl: 'text-consultation-booking.html',
})
export class TextConsultationBookingPage {

  specialist: Array<TreatmentCategoryInterface> = [
    {id: 1, title: "Cardiologist"},
    {id: 2, title: "Dentist"},
    {id: 3, title: "Darmatologist"},
    {id: 4, title: "Diabetist"}
  ];
  textConsultationServices: Array<TextConsultationServiceInterface> = [
    {id: 1, text: "Ask a General Physician(1 Free Follow Up)", amount: 250, treatmentCategory: null},
    {id: 2, text: "Ask a  Specialist (1 Free Follow Up)", amount: 500, treatmentCategory: this.specialist},
    {id: 3, text: "Ask a  consultant(1 Free Follow Up)", amount: 1000, treatmentCategory: this.specialist},
  ];
  private form: FormGroup;
  private submitted: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public alertController: AlertController) {

    this.buildForm();
  }


  validatePasswordAction() {
    this.submitted = true;
    if (!this.form.valid) {
      this.submitted = false;
      return false;
    }

    this.alertController.create({title: "Hey", message: "We will redirect the user to payment gateway."}).present();


  }

  private buildForm() {

    this.form = this.formBuilder.group({
      promo: ['']
    });

  }

}
