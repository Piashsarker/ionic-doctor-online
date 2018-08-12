import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";

/**
 * Generated class for the Health_360Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-health-360',
  templateUrl: 'health-360.html',
})
export class Health_360Page {

  private form: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public navParams: NavParams) {
    this.buildForm();
  }

  private buildForm() {

    this.form = this.formBuilder.group({
      password: ['']
    });

  }

}
