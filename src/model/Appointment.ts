import {DoctorsProfileInterface} from "./DoctorsProfile";


export  enum AppointmentType {
  VIDEO_CONSULTATION = 1,
  AUDIO_CONSULTATION
}


export interface AppointmentInterface {
  id?: string,
  doctorProfile: DoctorsProfileInterface,
  appointment_time: string,
  appointment_date: string,
  appointment_type: AppointmentType,
}
