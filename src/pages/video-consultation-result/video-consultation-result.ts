import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PageChat} from "../Page";

/**
 * Generated class for the VideoConsultationResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video-consultation-result',
  templateUrl: 'video-consultation-result.html',
})
export class VideoConsultationResultPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoConsultationResultPage');
  }

  liveSupportOnClick() {
    this.navCtrl.push(PageChat);
  }

}
