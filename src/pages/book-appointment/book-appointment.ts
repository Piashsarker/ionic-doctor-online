import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {CalendarComponentOptions} from "ion2-calendar";
import {AppointmentScheduleInterface} from "../../model/AppointmentSchedule";
import {PageBookAppointmentConfirmation, PageBookAppointmentConfirmationDetails} from "../Page";

/**
 * Generated class for the BookAppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-appointment',
  templateUrl: 'book-appointment.html',
})
export class BookAppointmentPage {

  date: string;
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  calenderOptions: CalendarComponentOptions = {
    from: new Date()
  };
  appointmentAvailable: boolean = false;
  selectedShiftTime: Array<String>;

  selectedDate: string;
  selectedTime: string;

  appointmentShifts: Array<AppointmentScheduleInterface> = [
    {id: "1", shiftName: "Evening", availableTime: ["6.00 PM ", "6.30 PM ", "7.00 PM ", "8.30 PM"]},
    {id: "2", shiftName: "Night", availableTime: ["9.00 PM ", "9.30 PM ", "10.00 PM ", "11.30 PM"]}

  ];


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalController: ModalController) {

  }

  ionViewDidLoad() {

  }

  onDateSelected(date) {
    /** Check here if appointment is available or not **/
    this.appointmentAvailable = true;
    if (this.appointmentShifts) {
      this.selectedShiftTime = this.appointmentShifts[0].availableTime;
    }
    this.selectedDate = date;

  }

  shiftSelected($event: any) {
    let shift = this.appointmentShifts.find((value => {
      return value.id == $event.value
    }));
    this.selectedShiftTime = shift.availableTime;
  }

  timeOnClick(time: string) {
    this.selectedTime = time;
    this.openConfirmatModal(this.selectedDate, this.selectedTime);
  }

  private openConfirmatModal(selectedDate: string, selectedTime: string) {
    let confirmModal = this.modalController.create(PageBookAppointmentConfirmation, {
      date: selectedDate,
      time: selectedTime
    });
    confirmModal.present();

    confirmModal.onDidDismiss((data) => {
      if (data.confirm) {
        this.navCtrl.push(PageBookAppointmentConfirmationDetails);
      }
    });
  }
}
