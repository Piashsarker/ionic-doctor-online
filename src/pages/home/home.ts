import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';


export interface HealthServices {
  img: string,
  text: string
}


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  healthServices: Array<HealthServices> = [{text: 'Video Consultation', img: 'assets/icon/video_calling.svg'},
    {text: 'Text Consultation', img: 'assets/icon/text_consultation.svg'},
    {text: 'Lab Test', img: 'assets/icon/lab_test.svg'}];

  healthInformations: Array<HealthServices> = [{text: 'Health 360', img: 'assets/icon/health_360.svg'},
    {text: 'Doc Speak', img: 'assets/icon/doctor_speak.svg'},
    {text: 'Diseases A-Z', img: 'assets/icon/dieases.svg'}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
