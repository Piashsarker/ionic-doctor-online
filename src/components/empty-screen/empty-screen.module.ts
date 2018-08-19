import {NgModule} from '@angular/core';
import {IonicModule} from "ionic-angular";
import {EmptyScreenComponent} from "./empty-screen";

@NgModule({
  declarations: [
    EmptyScreenComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    EmptyScreenComponent
  ]
})
export class EmptyScreenModule {
}
