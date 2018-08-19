import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {htmlDemoText} from "../../providers/Constant";
import {PageBlogPostDetails} from "../Page";
import {BlogPostInterface, PostType} from "../../model/BlogPost";

/**
 * Generated class for the TreatmentCategoryPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-treatment-category-post',
  templateUrl: 'treatment-category-post.html',
})
export class TreatmentCategoryPostPage {
  item: BlogPostInterface;
  health360ItemNews: Array<BlogPostInterface> = [{
    id: 1, img: 'assets/imgs/sample_1.jpg', title: "Night Blindness | Do You Go Blind At Night?",
    smallDescription: "Night Blindness is a condition wherein a person is unable to see at night or poor light. " +
    "It is not a condition or disease by itself but is rather a symptom of some other underlying eye problem.",
    publishedDate: "27 Jan 2018 11.25am",
    descriptionHTML: htmlDemoText
  },
    {
      id: 1, img: 'assets/imgs/sample_1.jpg', title: "Night Blindness | Do You Go Blind At Night?",
      smallDescription: "Night Blindness is a condition wherein a person is unable to see at night or poor light. " +
      "It is not a condition or disease by itself but is rather a symptom of some other underlying eye problem.",
      publishedDate: "27 Jan 2018 11.25am",
      descriptionHTML: htmlDemoText,
      postType: PostType.VIDEO_POST,
      videoURL: "https://www.youtube.com/embed/W3P3rT0j2gQ"
    },
    {
      id: 1, img: 'assets/imgs/sample_1.jpg', title: "Night Blindness | Do You Go Blind At Night?",
      smallDescription: "Night Blindness is a condition wherein a person is unable to see at night or poor light. " +
      "It is not a condition or disease by itself but is rather a symptom of some other underlying eye problem.",
      publishedDate: "27 Jan 2018 11.25am",
      descriptionHTML: htmlDemoText
    },
    {
      id: 1,
      img: 'assets/imgs/sample_1.jpg', title: "Night Blindness | Do You Go Blind At Night?",
      smallDescription: "Night Blindness is a condition wherein a person is unable to see at night or poor light. " +
      "It is not a condition or disease by itself but is rather a symptom of some other underlying eye problem.",
      publishedDate: "27 Jan 2018 11.25am",
      descriptionHTML: htmlDemoText
    },
    {
      id: 1, img: 'assets/imgs/sample_1.jpg', title: "Night Blindness | Do You Go Blind At Night?",
      smallDescription: "Night Blindness is a condition wherein a person is unable to see at night or poor light. " +
      "It is not a condition or disease by itself but is rather a symptom of some other underlying eye problem.",
      publishedDate: "27 Jan 2018 11.25am",
      descriptionHTML: htmlDemoText,
      postType: PostType.VIDEO_POST,
      videoURL: "https://www.youtube.com/embed/W3P3rT0j2gQ"
    },
    {
      id: 1, img: 'assets/imgs/sample_1.jpg', title: "Night Blindness | Do You Go Blind At Night?",
      smallDescription: "Night Blindness is a condition wherein a person is unable to see at night or poor light. " +
      "It is not a condition or disease by itself but is rather a symptom of some other underlying eye problem.",
      publishedDate: "27 Jan 2018 11.25am",
      descriptionHTML: htmlDemoText
    },
    {
      id: 1, img: 'assets/imgs/sample_1.jpg', title: "Night Blindness | Do You Go Blind At Night?",
      smallDescription: "Night Blindness is a condition wherein a person is unable to see at night or poor light. " +
      "It is not a condition or disease by itself but is rather a symptom of some other underlying eye problem.",
      publishedDate: "27 Jan 2018 11.25am",
      descriptionHTML: htmlDemoText,
      postType: PostType.VIDEO_POST,
      videoURL: "https://www.youtube.com/embed/W3P3rT0j2gQ"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (this.navParams.data != undefined) {
      this.item = this.navParams.data;
    }
  }


  healthItemOnClick(item: BlogPostInterface) {
    this.navCtrl.push(PageBlogPostDetails, item);
  }

}
