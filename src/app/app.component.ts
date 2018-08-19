import {Component} from '@angular/core';
import {App, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {PageLanguageSelect} from "../pages/Page";
import {TranslateService} from "@ngx-translate/core";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: string = PageLanguageSelect;

  constructor(public platform: Platform,
              public  statusBar: StatusBar,
              public  splashScreen: SplashScreen,
              public app: App,
              public translate: TranslateService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      this.setStatusBar();
      this.setBackbuttonEvent();
      this.initializeTranslate();
      splashScreen.hide();
    });
  }

  private initializeTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');

    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use('en'); // Set your language here
    }
  }

  private setStatusBar() {
    if (this.platform.is('cordova') && this.platform.is('android')) {
      this.statusBar.styleBlackTranslucent();
      this.statusBar.backgroundColorByHexString('#9b151b');
    }
  }


  private setBackbuttonEvent() {
    //Registration of push in Android and Windows Phone
    this.platform.registerBackButtonAction(() => {
      this.performBackButtonAction();
    });
  }

  private performBackButtonAction() {
    this.app.goBack();
  }
}

