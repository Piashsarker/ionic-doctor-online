import {Component, Input} from '@angular/core';


export interface TabInterface {
  title?: string,
  icon?: string,
  page?: string
}


@Component({
  selector: 'super-tab-component',
  templateUrl: 'super-tab-component.html'
})
export class SuperTabComponent {
  @Input() tabs: Array<TabInterface>;

  constructor() {
  }
}
