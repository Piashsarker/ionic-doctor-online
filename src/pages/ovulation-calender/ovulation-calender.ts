import {Component} from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {CalendarComponentOptions} from "ion2-calendar";

/**
 * Generated class for the OvulationCalenderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ovulation-calender',
  templateUrl: 'ovulation-calender.html',
})
export class OvulationCalenderPage {

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
    let alert = this.alertController.create({
      title: 'Hey there',
      message: 'You are likely to be most fertile from: 09/08/2018-14/08/2018'
    });
    alert.present();
  }
}
