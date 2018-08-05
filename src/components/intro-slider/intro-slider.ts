import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
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
  @Input() slides: Array<SlideInterface>;
  @Output() goToNext: EventEmitter<boolean> = new EventEmitter<boolean>();

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
  }

  goToApp() {
    /** Send back the response to parent that the introSlide is over **/
    this.goToNext.emit(true);
  }

  skip() {
    /** Send back the response to parent that the introSlide is over **/

    this.goToNext.emit(true);
  }

}
