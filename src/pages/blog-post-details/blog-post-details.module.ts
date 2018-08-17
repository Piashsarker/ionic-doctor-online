import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {BlogPostDetailsPage} from './blog-post-details';
import {TranslateModule} from "@ngx-translate/core";
import {BottomSaveShareLikeModule} from "../../components/bottom-save-share-like/bottom-save-share-like.module";

@NgModule({
  declarations: [
    BlogPostDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BlogPostDetailsPage),
    TranslateModule.forChild(),
    BottomSaveShareLikeModule
  ],
})
export class BlogPostDetailsPageModule {
}
