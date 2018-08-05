import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SlideInterface} from "../../components/intro-slider/intro-slider";
import {PageLogin} from "../Page";

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})

export class IntroPage {

  sliders: Array<SlideInterface> = [{
    title: "Why Use Doctor Online App",
    description: "In-depth and authenticated health articles, informational doctors videos and health forums.",
    imageUrl: "assets/imgs/sample_1.jpg"
  }, {
    title: "Multi Language",
    description: "Friendly and supportive communities and all health information",
    imageUrl: "assets/imgs/sample_2.jpg"
  }, {
    title: "24x7 Healthcare",
    description: "Doctor online  provides you access to all healthcare related information through authenticated sources 24x7 throughout",
    imageUrl: "assets/imgs/sample_3.jpg"
  }, {
    title: "Videos",
    description: "Interactive doc talk and patient talk videos",
    imageUrl: "assets/imgs/sample_4.jpg"
  }];


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  introSliderDidFinished() {
    this.navCtrl.push(PageLogin);
  }
}
