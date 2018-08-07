import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {User} from "../../model/User";
import {ProfileSetting} from "../../model/ProflieSetting";


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user: User = {
    full_name: 'Piash Sarker',
    profileImage: 'assets/imgs/logo.png',
    coverImage: 'assets/imgs/sample_1.jpg',
    username: '@piashsarker',
    email: 'sarkerpt@gmail.com'
  };

  profileSettings: Array<ProfileSetting> = [
    {text: 'My Account', icon: 'md-contact', forwardIcon: true},
    {text: 'My Text Queries and Answer', icon: 'md-text', forwardIcon: true},
    {text: 'My Video Consultation', icon: 'md-videocam', forwardIcon: true},
    {text: 'My Reports', icon: 'md-document', forwardIcon: true},
    {text: 'My Lab Orders', icon: 'md-flask', forwardIcon: true},
    {text: 'Saved', icon: 'md-cloud-download', forwardIcon: true},
    {text: 'Logout', icon: 'md-log-out', forwardIcon: true},
  ];


  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileFivePage');
  }
}
