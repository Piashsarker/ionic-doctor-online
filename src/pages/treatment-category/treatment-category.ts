import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";
import {PageTreatmentCategoryPost} from "../Page";
import {TreatmentCategoryInterface} from "../../model/TreatmentCategory";

/**
 * Generated class for the TreatmentCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-treatment-category',
  templateUrl: 'treatment-category.html',
})
export class TreatmentCategoryPage {

  options: any;

  items: Array<TreatmentCategoryInterface> = [
    {id: 1, title: "Eye Care", icon: "md-eye", forwardIcon: true},
    {id: 2, title: "Healthy Living", icon: "md-eye", forwardIcon: true},
    {id: 3, title: "IT Related Conditions", icon: "md-eye", forwardIcon: true},
    {id: 4, title: "Men's Health", icon: "md-eye", forwardIcon: true},
    {id: 5, title: "Pregnancy & Childcare", icon: "md-eye", forwardIcon: true},
    {id: 6, title: "Psychology", icon: "md-eye", forwardIcon: true},
    {id: 7, title: "Sexual Health", icon: "md-eye", forwardIcon: true},
    {id: 8, title: "Skin Health", icon: "md-eye", forwardIcon: true},
    {id: 9, title: "Teen Health", icon: "md-eye", forwardIcon: true},
    {id: 10, title: "Women's Health", icon: "md-eye", forwardIcon: true},
    {id: 11, title: "Yoga", icon: "md-eye", forwardIcon: true}
  ];
  private form: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public navParams: NavParams) {
    this.buildForm();
    if (navParams.data != undefined) {
      this.options = navParams.data;
    }
  }

  healthItemOnClick(item: TreatmentCategoryInterface) {
    this.navCtrl.push(PageTreatmentCategoryPost, item);
  }

  private buildForm() {

    this.form = this.formBuilder.group({
      search: ['']
    });

  }

}
