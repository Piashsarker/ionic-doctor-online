import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {DashboardPage} from './dashboard';
import {TranslateModule} from "@ngx-translate/core";
import {SuperTabModule} from "../../components/super-tab/super-tab.module";

@NgModule({
  declarations: [
    DashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardPage),
    TranslateModule.forChild(),
    SuperTabModule

  ],
})
export class DashboardPageModule {
}
