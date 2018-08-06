import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ForgotPasswordPage} from './forgot-password';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    ForgotPasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(ForgotPasswordPage),
    TranslateModule.forChild()
  ],
})
export class ForgotPasswordPageModule {
}
