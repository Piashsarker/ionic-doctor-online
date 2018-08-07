import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {HomePage} from './home';
import {TrendingSliderModule} from "../../components/trending/trending-slider.module";

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    TrendingSliderModule
  ],
})
export class HomePageModule {
}
