import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TrendingInterface} from "../../components/trending/trending";


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

  trendings: Array<TrendingInterface> = [{
    id: '1', title: 'A title goes here', type: 'text_post', imageUrl: 'assets/imgs/sample_4.jpg'
  },
    {id: '1', title: 'A title goes here', type: 'video_post', imageUrl: 'assets/imgs/sample_4.jpg'},
    {id: '1', title: 'A title goes here', type: 'video_post', imageUrl: 'assets/imgs/sample_4.jpg'}];


  healthTools: Array<HealthServices> = [{text: 'BMI Calculator', img: 'assets/icon/bmi_calculator.svg'},
    {text: 'Pregnancy Due Date Calculator', img: 'assets/icon/pregnancy.svg'},
    {text: 'Ovulation Calender', img: 'assets/icon/fertilization.svg'}];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  servicesOnClick(services: HealthServices) {
    console.log(services)
  }

  informationOnClick(services: HealthServices) {
    console.log(services);
  }

  trendingClick($event: TrendingInterface) {
    console.log($event);
  }
}
