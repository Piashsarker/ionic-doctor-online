import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Health360ItemInterface} from "../../../model/Health360Item";
import {PageHealth360ItemNews} from "../../Page";


@IonicPage()
@Component({
  selector: 'page-health-360',
  templateUrl: 'health-360.html',
})


export class Health_360Page {

  health360Items: Array<Health360ItemInterface> = [{id: 1, title: "Eye Cared", icon: "md-eye", forwardIcon: true},
    {id: 1, title: "Eye Cared", icon: "md-eye", forwardIcon: true},
    {id: 1, title: "Eye Cared", icon: "md-eye", forwardIcon: true},
    {id: 1, title: "Eye Cared", icon: "md-eye", forwardIcon: true},
    {id: 1, title: "Eye Cared", icon: "md-eye", forwardIcon: true},
    {id: 1, title: "Eye Cared", icon: "md-eye", forwardIcon: true},
    {id: 1, title: "Eye Cared", icon: "md-eye", forwardIcon: true}
  ];
  private form: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public navParams: NavParams) {
    this.buildForm();
  }

  healthItemOnClick(item: Health360ItemInterface) {
    this.navCtrl.push(PageHealth360ItemNews, item);
  }

  private buildForm() {

    this.form = this.formBuilder.group({
      password: ['']
    });

  }
}
