import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {EmptyScreenOptions} from "../../../components/empty-screen/empty-screen";
import {LabTest} from "../../../model/LabTest";

/**
 * Generated class for the LabTestCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lab-test-cart',
  templateUrl: 'lab-test-cart.html',
})
export class LabTestCartPage {

  cartItems: Array<LabTest> = [{
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

  emptyScreenOptions: EmptyScreenOptions = {
    title: "Empty!",
    description: "You have no items in cart.",
    icon: "md-cart"
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
