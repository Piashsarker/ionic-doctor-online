import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TabInterface} from "../../components/super-tab/super-tab-component";
import {PageHome, PageMenuList, PageNotification, PageProfile} from "../Page";


@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})


export class DashboardPage {

  tabs: Array<TabInterface> = [{page: PageHome, icon: 'md-home'},
    {page: PageProfile, icon: 'md-person'},
    {page: PageNotification, icon: 'md-notifications'},
    {page: PageMenuList, icon: 'md-menu'}];

  pageReady: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.pageReady = true;
  }

}
