import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";

interface Measurement {
  id?: number,
  text?: string
}


@IonicPage()
@Component({
  selector: 'page-bmi-calculator',
  templateUrl: 'bmi-calculator.html',
})


export class BmiCalculatorPage {

  heightMeasurement: Array<Measurement> = [{id: 1, text: "FT+IN"}, {id: 2, text: "CM"}];
  weightMeasurement: Array<Measurement> = [{id: 1, text: "Kilograms(KG)"}, {id: 2, text: "Pound(LB)"}];

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


    let alert = this.alertController.create({title: 'Hey there', message: 'Your BMI is Normal.'});
    alert.present();


  }

  private buildForm() {

    this.form = this.formBuilder.group({
      height: [''],
      weight: ['']
    });

  }

}
