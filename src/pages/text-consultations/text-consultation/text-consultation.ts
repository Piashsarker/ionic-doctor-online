import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";
import {PageChat} from "../../Page";

/**
 * Generated class for the TextConsultationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-text-consultation',
  templateUrl: 'text-consultation.html',
})
export class TextConsultationPage {

  private form: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public navParams: NavParams) {
    this.buildForm();
  }

  nextOnClick() {

  }

  liveSupportOnClick() {
    this.navCtrl.push(PageChat)
  }

  private buildForm() {

    this.form = this.formBuilder.group({
      username: ['']
    });

  }
}
