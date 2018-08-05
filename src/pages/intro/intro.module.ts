import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {IntroPage} from './intro';
import {IntroSliderModule} from "../../components/intro-slider/intro-slider.module";

@NgModule({
  declarations: [
    IntroPage
  ],
  imports: [
    IonicPageModule.forChild(IntroPage),
    IntroSliderModule
  ],
})
export class IntroPageModule {
}
