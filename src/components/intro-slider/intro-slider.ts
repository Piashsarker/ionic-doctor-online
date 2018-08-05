import {Component, Input, ViewChild} from '@angular/core';
import {NavController, Slides} from "ionic-angular";


export interface SlideInterface {
  title?: string,
  description?: string,
  imageUrl?: string
}


@Component({
  selector: 'intro-slider',
  templateUrl: 'intro-slider.html'
})
export class IntroSliderComponent {

  @ViewChild('slider') slider: Slides;
  @Input('slides') slides: Array<SlideInterface>;
  allSlides: Array<SlideInterface>;
  slideIndex = 0;
  pageReady: boolean = false;


  constructor(public navCtrl: NavController) {
  }

  ngAfterViewInit() {

    this.allSlides = this.slides;
    this.pageReady = true;
  }

  onSlideChanged() {
    this.slideIndex = this.slider.getActiveIndex();
    console.log('Slide changed! Current index is', this.slideIndex);
  }

  goToApp() {
    console.log('Go to App clicked');
  }

  skip() {
    console.log('Skip clicked');
  }

}
