import {FormControl} from "@angular/forms";

export class AppValidators {

  public static EMAIL_REGEX = '(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))';
  public static PHONE_REGEX = '((?:(\\+|00)?88)?01[15-9]\\d{8})';
  public static PASSWORD_REGEX = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})';

  static getPhoneOrEmailRegex(): string {
    return `${AppValidators.PHONE_REGEX}|${AppValidators.EMAIL_REGEX}`;
  }


  static optionalEmailIfBlank(control: FormControl): any {
    // skip validation if empty (Validators.required should handle this)
    if (!control.value) {
      return null;
    }
    let exp = new RegExp(`^${AppValidators.EMAIL_REGEX}$`);
    if (exp.test(control.value)) {
      return null;
    }
    return {isValid: true};
  }

  static shouldNotbeBlank(control: FormControl): any {
    if (control.value.trim() != '') {
      return null;
    }
    return {isValid: true};
  }

  static isValidPassword(control: FormControl): any {
    let passwordExp = new RegExp(`^${AppValidators.PASSWORD_REGEX}`);
    if (passwordExp.test(control.value)) {
      return null;
    }
    return {isValid: true};
  }

  static validateAmount(control: FormControl): any {

    let regExp = /^([5-9][0-9]|[1-9][0-9]{2}|1000)$/;
    const group = control.parent;

    if (group && group.controls['connection_type'].value == 'POSTPAID') {
      regExp = /^([5-9][0-9]|[1-9][0-9]{2}|[1-4][0-9]{3}|5000)$/;
    }

    let exp = new RegExp(regExp);
    if (exp.test(control.value)) {
      return null;
    }
    return {isValid: true, rangeError: {msg: "Invalid Range."}};
  }

  static validateNIDLength(control: FormControl): any {
    let regExp = /^([0-9]{10}|[0-9]{13}|[0-9]{17})$/;
    let exp = new RegExp(regExp);
    if (exp.test(control.value)) {
      return null;
    }
    return {NIDLength: {msg: "Invalid NID length."}};
  }

  static isValidMobileNumber(value): any {
    let exp = new RegExp(`^${AppValidators.PHONE_REGEX}`);
    return exp.test(value);
  }

}
