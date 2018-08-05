import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {LanguageSelectPage} from './language-select';

@NgModule({
  declarations: [
    LanguageSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(LanguageSelectPage),
  ],
})
export class LanguageSelectPageModule {
}
