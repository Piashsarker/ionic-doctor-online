import {TreatmentCategoryInterface} from "./TreatmentCategory";

export interface TextConsultationServiceInterface {
  id?: number,
  text?: string,
  amount?: number,
  treatmentCategory?: Array<TreatmentCategoryInterface>
}
