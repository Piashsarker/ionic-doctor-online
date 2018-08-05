import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PageIntroPage} from "../Page";


interface LanguageInterface {
  id?: number,
  name?: string,
  icon?: string
}


@IonicPage()
@Component({
  selector: 'page-language-select',
  templateUrl: 'language-select.html',
})
export class LanguageSelectPage {

  languages: Array<LanguageInterface> = [
    {id: 1, name: 'Bangla', icon: 'assets/icon/bangladesh.svg'},
    {id: 2, name: 'English', icon: 'assets/icon/usa.svg'}
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  languageSelected(language: LanguageInterface) {
    this.navCtrl.push(PageIntroPage);
  }
}
