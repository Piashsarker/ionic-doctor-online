import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Notification} from "../../model/Notification";

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {


  notifications: Array<Notification> = [{
    title: 'Supper Offer',
    description: 'Enjoy 25% off on your every first video call.  Random Text From server, I am having a good time with Daktar online app.',
    date_time: Date()
  },
    {
      title: 'Supper Offer',
      description: 'Enjoy 25% off on your every first video call.',
      date_time: Date(),
    },
    {
      title: 'Supper Offer',
      description: 'Enjoy 25% off on your every first video call.',
      date_time: Date()
    }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }

}
