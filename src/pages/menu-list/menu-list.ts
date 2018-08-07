import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ProfileSetting} from "../../model/ProflieSetting";

/**
 * Generated class for the MenuListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-list',
  templateUrl: 'menu-list.html',
})
export class MenuListPage {

  menus: Array<ProfileSetting> = [
    {text: 'About Us', icon: 'md-help-buoy', forwardIcon: true},
    {text: 'Contact Us', icon: 'md-contacts', forwardIcon: true},
    {text: 'Tell A Friend', icon: 'md-chatbubbles', forwardIcon: true},
    {text: 'Language', icon: 'md-document', forwardIcon: true},
    {text: 'Rate This App', icon: 'md-heart', forwardIcon: true}
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuListPage');
  }

}
