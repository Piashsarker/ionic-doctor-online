import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";
import {PageLabTestCart, PageLabTestResult} from "../../Page";

/**
 * Generated class for the LabTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lab-test',
  templateUrl: 'lab-test.html',
})
export class LabTestPage {

  private form: FormGroup;
  private submitted: boolean;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder) {

    this.buildForm();
  }


  validatePasswordAction() {


    this.navCtrl.push(PageLabTestResult);

    this.submitted = true;
    if (!this.form.valid) {
      this.submitted = false;
      return false;
    }


  }

  private buildForm() {

    this.form = this.formBuilder.group({
      pincode: [''],
      lab_test: ['']
    });

  }

  openCartPage() {
    this.navCtrl.push(PageLabTestCart);
  }
}
