import {Component} from '@angular/core';
import {App, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {PageLanguageSelect} from "../pages/Page";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: string = PageLanguageSelect;

  constructor(public platform: Platform,
              public  statusBar: StatusBar,
              public  splashScreen: SplashScreen,
              public app: App) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      this.setStatusBar();
      this.setBackbuttonEvent();
      splashScreen.hide();
    });
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
    let nav = this.app.getActiveNav();
    if (nav.canGoBack()) {
      nav.pop();
    }
    else {
      // Exit Dialog Here.
    }
  }
}

