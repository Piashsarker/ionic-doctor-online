import {Component} from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {CalendarComponentOptions} from "ion2-calendar";

/**
 * Generated class for the PregnancyDueDateCalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pregnancy-due-date-calculator',
  templateUrl: 'pregnancy-due-date-calculator.html',
})
export class PregnancyDueDateCalculatorPage {
  date: string;
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  calenderOptions: CalendarComponentOptions = {};

  selectedDate: string;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalController: ModalController,
              public alertController: AlertController) {


  }

  ionViewDidLoad() {

  }

  onDateSelected(date) {
    /** Check here if appointment is available or not **/
    this.selectedDate = date;
  }

  getAverageCycleDuration() {
    let duration = [];
    let i;
    for (i = 20; i < 45; i++) {
      duration.push({time: i})
    }
    return duration;
  }


  durationOnClick(time) {
    let alert = this.alertController.create({title: 'Hey there', message: 'You are at 2 weeks.'});
    alert.present();
  }
}
