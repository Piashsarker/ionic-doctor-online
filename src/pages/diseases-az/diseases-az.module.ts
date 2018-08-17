import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {DiseasesAzPage} from './diseases-az';

@NgModule({
  declarations: [
    DiseasesAzPage,
  ],
  imports: [
    IonicPageModule.forChild(DiseasesAzPage),
  ],
})
export class DiseasesAzPageModule {
}
