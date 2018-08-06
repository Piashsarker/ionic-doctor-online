import {Injectable} from '@angular/core';
import {AlertController, Events, NavController, NavParams, Platform, ToastController} from "ionic-angular";

/*
  Generated class for the ShareServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShareServiceProvider {

  public noInternetDialog: any;

  constructor(public events: Events,
              public toastCtrl: ToastController,
              private alertCtrl: AlertController,
              public platform: Platform,
              public storage: Storage) {
  }


  presentToast(msg = 'OTP has been resent.') {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }

  presentConfirmToast(msg = '') {
    let toast = this.toastCtrl.create({
      message: msg,
      // duration: 3000,
      position: 'bottom',
      showCloseButton: true,
      dismissOnPageChange: true,
      closeButtonText: 'OK'
    });

    toast.present();
  }

  presentErrorMessage(error: any, defaultMsg?: string, handler?, autoClose?, backDropStatus?) {
    let msg = defaultMsg;
    let defaultTitle = 'Sorry!';
    if (Object.keys(error).length && error.error) {
      msg = error.error;
    }
    if (Object.keys(error).length && error.errorTitle) {
      defaultTitle = error.errorTitle;
    }
    return this.presentMessage(defaultTitle, msg, false, handler, autoClose, 'error-alert', backDropStatus);
  }

  presentMessage(title, msg, role?, handler?, autoClose?, css?, backDropStatus?) {
    let alert = this.alertCtrl.create({
      title: title,
      message: msg,
      cssClass: css || false,
      buttons: [
        {
          text: role || 'OK',
          role: role || 'OK',
          handler: handler || (() => {
          })
        }
      ],
      enableBackdropDismiss: backDropStatus
    });

    alert.present();

    if (autoClose == true) {
      setTimeout(() => {
        alert.dismiss();
      }, 3000);
    }

    return alert;
  }

  presentConfirmDouble(title, msg, handlerOK?, handlerCancel?, OkText?, CancelText?) {
    let alert = this.alertCtrl.create({
      title: title,
      message: msg,
      enableBackdropDismiss: false,
      buttons: [
        {
          text: CancelText || 'Cancel',
          role: 'Cancel',
          handler: handlerCancel || (() => {
          })
        },
        {
          text: OkText || 'OK',
          role: 'OK',
          handler: handlerOK || (() => {
          })
        }
      ]
    });
    alert.present();
    return alert;
  }


  getItemFromAlertList(title: string, items$: Array<{ label: string, value: string }>, handlerOK?: any, handlerCancel?: any) {

    let alert = this.alertCtrl.create();
    alert.setTitle(title);

    items$.forEach(item => {
      alert.addInput({
        type: 'radio',
        label: item.label,
        value: item.value
      });
    });
    alert.addButton({
      text: 'Cancel',
      handler: handlerCancel || (() => {
      })
    });
    alert.addButton({
      text: 'OK',
      handler: handlerOK || (() => {

      })
    });
    alert.present();
  }


  prepareNavParams(navParams: NavParams, data: any) {
    let params = {};
    for (let k in data) {
      params[k] = navParams.get(k) ? navParams.get(k) : false;
    }
    return params;
  }


  showNoInternetDialog(navCtrl: NavController): void {
    let dialogMessage = {
      errorTitle: 'Attention!',
      error: 'It looks like your Internet Connection is off. Please turn it on and try again.'
    };
    this.noInternetDialog = this.presentErrorMessage(dialogMessage, '', () => {
      navCtrl.pop();
    }, '', false);
    return this.noInternetDialog;
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  objectIsEqual(obj1, obj2): boolean {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }


  getUrlParams(search: string) {
    /** getUrlParams('https://google.com/foo?a=1&b=2&c');
     *  Will returns {a: '1', b: '2', c: ''} **/

    return `${search}?`
      .split('?')[1]
      .split('&')
      .reduce((params: object, pair: string) => {
        const [key, value] = `${pair}=`.split('=').map(decodeURIComponent);
        return key.length > 0 ? {...params, [key]: value} : params
      }, {});
  }

  removeMeFromStack(navCtrl: NavController) {
    navCtrl.remove(navCtrl.getPrevious().index);
  }

}
