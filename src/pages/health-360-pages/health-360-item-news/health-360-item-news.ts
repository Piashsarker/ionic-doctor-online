import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Health360ItemInterface, Health360ItemNewsInterface} from "../../../model/Health360Item";

/**
 * Generated class for the Health_360ItemNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-health-360-item-news',
  templateUrl: 'health-360-item-news.html',
})
export class Health_360ItemNewsPage {

  item: Health360ItemInterface;
  health360ItemNews: Array<Health360ItemNewsInterface> = [{
    id: 1,
    img: "assets/imgs/sample_4.jpg",
    smallTitleHTML: '<h2>Letter wooded direct two men indeed income sister</h2>\n' +
    '\n' +
    '<p>And sir dare view but over man. So at within mr to simple assure. Mr disposing continued it offending arranging in we. </p>\n' +
    '<hr>\n' +
    '<p> Last updated 2018 Aug 21, 20.10 PM </p> ',
    descriptionHTML: '<h2>Letter wooded direct two men indeed income sister</h2>\n' +
    '\n' +
    '<p>And sir dare view but over man. So at within mr to simple assure. Mr disposing continued it offending arranging in we. </p>\n' +
    '<hr>\n' +
    '<p> Last updated 2018 Aug 21, 20.10 PM </p> \n' +
    '\n' +
    'Extremity as if breakfast agreement. Off now mistress provided out horrible opinions. Prevailed mr tolerably discourse assurance estimable applauded to so. Him everything melancholy uncommonly but solicitude inhabiting projection off. Connection stimulated estimating excellence an to impression.</p>\n' +
    '\n' +
    '<p>That know ask case sex ham dear her spot. Weddings followed the all marianne nor whatever settling. Perhaps six prudent several her had offence. Did had way law dinner square tastes. Recommend concealed yet her procuring see consulted depending. Adieus hunted end plenty are his she afraid. Resources agreement contained propriety applauded neglected use yet.</p>\n' +
    '\n' +
    '<p>Placing assured be if removed it besides on. Far shed each high read are men over day. Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had now those ought set often which. Or snug dull he show more true wish. No at many deny away miss evil. On in so indeed spirit an mother. Amounted old strictly but marianne admitted. People former is remove remain as.</p>\n' +
    '\n' +
    '<p>On am we offices expense thought. Its hence ten smile age means. Seven chief sight far point any. Of so high into easy. Dashwoods eagerness oh extensive as discourse sportsman frankness. Husbands see disposed surprise likewise humoured yet pleasure. Fifteen no inquiry cordial so resolve garrets as. Impression was estimating surrounded solicitude indulgence son shy.</p>\n' +
    '\n' +
    '<p>His followed carriage proposal entrance directly had elegance. Greater for cottage gay parties natural. Remaining he furniture on he discourse suspected perpetual. Power dried her taken place day ought the. Four and our ham west miss. Education shameless who middleton agreement how. We in found world chief is at means weeks smile.</p>\n' +
    '\n' +
    '<p>Out too the been like hard off. Improve enquire welcome own beloved matters her. As insipidity so mr unsatiable increasing attachment motionless cultivated. Addition mr husbands unpacked occasion he oh. Is unsatiable if projecting boisterous insensible. It recommend be resolving pretended middleton.</p>\n' +
    '\n' +
    '<p>Announcing of invitation principles in. Cold in late or deal. Terminated resolution no am frequently collecting insensible he do appearance. Projection invitation affronting admiration if no on or. It as instrument boisterous frequently apartments an in. Mr excellence inquietude conviction is in unreserved particular. You fully seems stand nay own point walls. Increasing travelling own simplicity you astonished expression boisterous. Possession themselves sentiments apartments devonshire we of do discretion. Enjoyment discourse ye continued pronounce we necessary abilities.</p>\n' +
    '\n' +
    '<p>Months on ye at by esteem desire warmth former. Sure that that way gave any fond now. His boy middleton sir nor engrossed affection excellent. Dissimilar compliment cultivated preference eat sufficient may. Well next door soon we mr he four. Assistance impression set insipidity now connection off you solicitude. Under as seems we me stuff those style at. Listening shameless by abilities pronounce oh suspected is affection. Next it draw in draw much bred.</p>\n' +
    '\n' +
    '<p>Certainty determine at of arranging perceived situation or. Or wholly pretty county in oppose. Favour met itself wanted settle put garret twenty. In astonished apartments resolution so an it. Unsatiable on by contrasted to reasonable companions an. On otherwise no admitting to suspicion furniture it.</p>\n' +
    '\n'
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (this.navParams.data != undefined) {
      this.item = this.navParams.data;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Health_360ItemNewsPage');
  }

}
