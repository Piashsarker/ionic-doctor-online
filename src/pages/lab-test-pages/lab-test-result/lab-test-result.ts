import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {LabTest} from "../../../model/LabTest";

/**
 * Generated class for the LabTestResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lab-test-result',
  templateUrl: 'lab-test-result.html',
})
export class LabTestResultPage {

  allTest: Array<LabTest> = [{
    id: 1, name: "HLA B 27", lab_name: " Thyrocare Technology Limited", certified_by: "ISO 9001, NABL , CAP",
    previous_price: 995.0, current_price: 625, service_type: "Home Service", description: "No decription available."
  }, {
    id: 1, name: "HLA B 27", lab_name: " Thyrocare Technology Limited", certified_by: "ISO 9001, NABL , CAP",
    previous_price: 995.0, current_price: 625, service_type: "Home Service", description: "No decription available."
  }, {
    id: 1, name: "HLA B 27", lab_name: " Thyrocare Technology Limited", certified_by: "ISO 9001, NABL , CAP",
    previous_price: 995.0, current_price: 625, service_type: "Home Service", description: "No decription available."
  }, {
    id: 1, name: "HLA B 27", lab_name: " Thyrocare Technology Limited", certified_by: "ISO 9001, NABL , CAP",
    previous_price: 995.0, current_price: 625, service_type: "Home Service", description: "No decription available."
  }
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LabTestResultPage');
  }

}
