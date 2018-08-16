import {Component, Input} from '@angular/core';
import {DoctorsProfileInterface} from "../../model/DoctorsProfile";
import {PageBookAppointment} from "../../pages/Page";
import {NavController} from "ionic-angular";

@Component({
  selector: 'doctor-profile-card',
  templateUrl: 'doctor-profile-card.html'
})
export class DoctorProfileCardComponent {

  @Input() profile: DoctorsProfileInterface;
  @Input() enableButton: boolean = false;
  pageReady: boolean = false;

  constructor(public navCtrl: NavController) {
  }

  ngAfterViewInit() {
    if (this.profile != undefined) {
      this.pageReady = true;
    }
  }

  bookNowOnClick(profile: DoctorsProfileInterface) {
    this.navCtrl.push(PageBookAppointment, profile).then(() => {
    });
  }
}
