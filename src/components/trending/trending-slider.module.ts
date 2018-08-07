import {NgModule} from '@angular/core';
import {IonicModule} from "ionic-angular";
import {TrendingComponent} from "./trending";

@NgModule({
  declarations: [
    TrendingComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    TrendingComponent
  ]
})
export class TrendingSliderModule {
}
