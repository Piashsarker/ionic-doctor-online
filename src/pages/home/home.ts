import {Component} from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {TrendingInterface} from "../../components/trending/trending";
import {
  PageBlogPostDetails,
  PageBMICalculator,
  PageDiseasesAZ,
  PageLabTest,
  PageOvulationCalender,
  PagePregnancyDueDateCalculator,
  PageTextConsultation,
  PageTreatmentCategory,
  PageVideoConsultation
} from "../Page";
import {htmlDemoText} from "../../providers/Constant";
import {BlogPostInterface} from "../../model/BlogPost";


export interface HealthServices {
  id: number,
  img: string,
  text: string
}

enum HealthServiceEnum {
  VIDEO_CONSULTATION_ID = 1,
  TEXT_CONSULTATION_ID,
  LAB_TEST_ID
}

enum HealthInformationEnum {
  HEALTH_360_ID = 1,
  DOC_SPEAK_ID = 2,
  DIEASES_AZ_ID = 3
}

enum HealthToolsEnum {
  BMI_CALCULATOR_ID = 1,
  PREGNANCY_DUE_DATE_CALCULATOR_ID,
  OVULATION_CALENDER_ID
}


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  blogPost: BlogPostInterface = {
    id: 1, img: 'assets/imgs/sample_3.jpg', title: "Night Blindness | Do You Go Blind At Night?",
    smallDescription: "Night Blindness is a condition wherein a person is unable to see at night or poor light. " +
    "It is not a condition or disease by itself but is rather a symptom of some other underlying eye problem.",
    publishedDate: "27 Jan 2018 11.25am",
    descriptionHTML: htmlDemoText
  };

  healthServices: Array<HealthServices> = [{
    id: HealthServiceEnum.VIDEO_CONSULTATION_ID,
    text: 'Video Consultation',
    img: 'assets/icon/video_calling.svg'
  },
    {id: HealthServiceEnum.TEXT_CONSULTATION_ID, text: 'Text Consultation', img: 'assets/icon/text_consultation.svg'},
    {id: HealthServiceEnum.LAB_TEST_ID, text: 'Lab Test', img: 'assets/icon/lab_test.svg'}];

  healthInformations: Array<HealthServices> = [{
    id: HealthInformationEnum.HEALTH_360_ID,
    text: 'Health 360',
    img: 'assets/icon/health_360.svg'
  },
    {id: HealthInformationEnum.DOC_SPEAK_ID, text: 'Doc Speak', img: 'assets/icon/doctor_speak.svg'},
    {id: HealthInformationEnum.DIEASES_AZ_ID, text: 'Diseases A-Z', img: 'assets/icon/dieases.svg'}];

  trendings: Array<TrendingInterface> = [{
    id: '1',
    title: 'A title goes here',
    type: 'text_post',
    imageUrl: 'assets/imgs/sample_4.jpg',
    blogPost: this.blogPost
  },
    {
      id: '1',
      title: 'A title goes here',
      type: 'video_post',
      imageUrl: 'assets/imgs/sample_4.jpg',
      blogPost: this.blogPost
    },
    {
      id: '1',
      title: 'A title goes here',
      type: 'video_post',
      imageUrl: 'assets/imgs/sample_4.jpg',
      blogPost: this.blogPost
    }];


  healthTools: Array<HealthServices> = [{
    id: HealthToolsEnum.BMI_CALCULATOR_ID,
    text: 'BMI Calculator',
    img: 'assets/icon/bmi_calculator.svg'
  },
    {
      id: HealthToolsEnum.PREGNANCY_DUE_DATE_CALCULATOR_ID,
      text: 'Pregnancy Due Date Calculator',
      img: 'assets/icon/pregnancy.svg'
    },
    {id: HealthToolsEnum.OVULATION_CALENDER_ID, text: 'Ovulation Calender', img: 'assets/icon/fertilization.svg'}];


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public app: App) {


    console.log(this.healthInformations);

  }


  servicesOnClick(services: HealthServices) {
    if (services.id == HealthServiceEnum.LAB_TEST_ID) {
      this.app.getRootNav().push(PageLabTest);
    }
    if (services.id == HealthServiceEnum.TEXT_CONSULTATION_ID) {
      this.app.getRootNav().push(PageTextConsultation);
    }
    if (services.id == HealthServiceEnum.VIDEO_CONSULTATION_ID) {
      this.app.getRootNav().push(PageVideoConsultation);
    }
  }

  informationOnClick(services: HealthServices) {
    console.log(services);
    if (services.id == HealthInformationEnum.HEALTH_360_ID || services.id == HealthInformationEnum.DOC_SPEAK_ID) {
      this.app.getRootNav().push(PageTreatmentCategory, services);
    }
    if (services.id == HealthInformationEnum.DIEASES_AZ_ID) {
      this.app.getRootNav().push(PageDiseasesAZ, services);
    }


  }

  trendingClick(trending: TrendingInterface) {
    this.app.getRootNav().push(PageBlogPostDetails, trending.blogPost);
  }

  btnHealthToolOnClick(tool: HealthServices) {
    if (tool.id == HealthToolsEnum.BMI_CALCULATOR_ID) {
      this.app.getRootNav().push(PageBMICalculator);
    }
    if (tool.id == HealthToolsEnum.OVULATION_CALENDER_ID) {
      this.app.getRootNav().push(PageOvulationCalender);
    }
    if (tool.id == HealthToolsEnum.PREGNANCY_DUE_DATE_CALCULATOR_ID) {
      this.app.getRootNav().push(PagePregnancyDueDateCalculator);
    }
  }
}
