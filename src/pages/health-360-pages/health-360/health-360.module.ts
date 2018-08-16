import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {Health_360Page} from './health-360';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    Health_360Page,
  ],
  imports: [
    IonicPageModule.forChild(Health_360Page),
    TranslateModule.forChild()
  ],
})
export class Health_360PageModule {
}
