import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {Health_360ItemNewsPage} from './health-360-item-news';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    Health_360ItemNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(Health_360ItemNewsPage),
    TranslateModule.forChild()
  ],
})
export class Health_360ItemNewsPageModule {
}
