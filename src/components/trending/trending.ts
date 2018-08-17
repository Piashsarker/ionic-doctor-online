import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BlogPostInterface} from "../../model/BlogPost";


export interface TrendingInterface {
  id: string,
  title: string,
  type?: string,
  imageUrl?: string,
  videoUrl?: string,
  descriptionHtml?: string,
  blogPost?: BlogPostInterface,
}


@Component({
  selector: 'trending',
  templateUrl: 'trending.html'
})
export class TrendingComponent {

  @Input() allTrending: Array<TrendingInterface>;
  @Output() trendingAction: EventEmitter<TrendingInterface> = new EventEmitter();

  constructor() {
  }

  trendingOnClick(trending: TrendingInterface) {
    this.trendingAction.emit(trending);
  }

}
