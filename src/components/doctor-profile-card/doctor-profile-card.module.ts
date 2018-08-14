import {NgModule} from '@angular/core';
import {IonicModule} from "ionic-angular";
import {DoctorProfileCardComponent} from "./doctor-profile-card";

@NgModule({
  declarations: [
    DoctorProfileCardComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    DoctorProfileCardComponent
  ]
})
export class DoctorProfileCardModule {
}
