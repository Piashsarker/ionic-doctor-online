import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DiseasesInterface} from "../../model/Diseases";
import {BlogPostInterface} from "../../model/BlogPost";
import {htmlDemoText} from "../../providers/Constant";
import {PageBlogPostDetails} from "../Page";

/**
 * Generated class for the DiseasesAzPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-diseases-az',
  templateUrl: 'diseases-az.html',
})
export class DiseasesAzPage {


  blogPost: BlogPostInterface = {
    id: 1, img: 'assets/imgs/sample_1.jpg', title: "Night Blindness | Do You Go Blind At Night?",
    smallDescription: "Night Blindness is a condition wherein a person is unable to see at night or poor light. " +
    "It is not a condition or disease by itself but is rather a symptom of some other underlying eye problem.",
    publishedDate: "27 Jan 2018 11.25am",
    descriptionHTML: htmlDemoText
  };

  diseasesList: Array<DiseasesInterface> = [{id: 1, diseasesName: 'Diabetes in a nutshel', blogPost: this.blogPost},
    {
      id: 2,
      diseasesName: 'Osteoporosis: Symptoms, causes, Risk Factors, Treatment and Prevention',
      blogPost: this.blogPost
    },
    {id: 3, diseasesName: 'Diabetes in a nutshel', blogPost: this.blogPost},
    {id: 4, diseasesName: 'Diabetes in a nutshel', blogPost: this.blogPost},
    {id: 5, diseasesName: 'Diabetes in a nutshel', blogPost: this.blogPost},
    {id: 6, diseasesName: 'Diabetes in a nutshel', blogPost: this.blogPost},
    {id: 7, diseasesName: 'Diabetes in a nutshel', blogPost: this.blogPost},
    {id: 8, diseasesName: 'Diabetes in a nutshel', blogPost: this.blogPost},
    {id: 9, diseasesName: 'Diabetes in a nutshel', blogPost: this.blogPost}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  diseasesOnClick(item: DiseasesInterface) {
    this.navCtrl.push(PageBlogPostDetails, item.blogPost);
  }
}
