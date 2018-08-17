import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TreatmentCategoryPostPage} from './treatment-category-post';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    TreatmentCategoryPostPage,
  ],
  imports: [
    IonicPageModule.forChild(TreatmentCategoryPostPage),
    TranslateModule.forChild()
  ],
})
export class TreatmentCategoryPostPageModule {
}
