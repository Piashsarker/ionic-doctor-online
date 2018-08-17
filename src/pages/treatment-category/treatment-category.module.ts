import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TreatmentCategoryPage} from './treatment-category';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    TreatmentCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(TreatmentCategoryPage),
    TranslateModule
  ],
})
export class TreatmentCategoryPageModule {
}
