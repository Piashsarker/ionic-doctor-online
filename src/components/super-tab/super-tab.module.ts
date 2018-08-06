import {NgModule} from '@angular/core';
import {IonicModule} from "ionic-angular";
import {SuperTabComponent} from "./super-tab-component";
import {SuperTabsModule} from "ionic2-super-tabs";

@NgModule({
  declarations: [
    SuperTabComponent
  ],
  imports: [
    IonicModule,
    SuperTabsModule
  ],
  exports: [
    SuperTabComponent
  ]
})
export class SuperTabModule {
}
