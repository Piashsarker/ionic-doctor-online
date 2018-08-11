import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ChatPage} from './chat';
import {TranslateModule} from "@ngx-translate/core";
import {MomentModule} from "ngx-moment";

@NgModule({
  declarations: [
    ChatPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatPage),
    TranslateModule.forChild(),
    MomentModule
  ],
})
export class ChatPageModule {
}
