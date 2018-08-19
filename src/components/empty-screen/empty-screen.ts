import {Component, Input} from '@angular/core';


export interface EmptyScreenOptions {
  title: string,
  description?: string,
  icon?: string,
  img?: string
}


@Component({
  selector: 'empty-screen',
  templateUrl: 'empty-screen.html'
})
export class EmptyScreenComponent {

  @Input('options') options: EmptyScreenOptions;
  pageReady: boolean;


  constructor() {

  }

  ngOnInit() {
    this.pageReady = true;
  }

}
