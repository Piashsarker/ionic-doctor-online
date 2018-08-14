import {Component} from '@angular/core';
import {PageChat} from "../../pages/Page";
import {NavController} from "ionic-angular";

/**
 * Generated class for the LiveSupportFabComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'live-support-fab',
  templateUrl: 'live-support-fab.html'
})
export class LiveSupportFabComponent {

  constructor(public navCtrl: NavController) {
  }


  liveSupportOnClick() {
    this.navCtrl.push(PageChat);
  }

}
