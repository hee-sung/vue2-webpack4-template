export class PhoneNumberUtils {
  static telNumberFormat(num) {
    num = this.#excludeString(num);

    let regExp, format;
    if (num.length < 9) {
      regExp = /(\d{4})(\d{4})/;
      format = "$1-$2";
    } else if (num.startsWith('02')) {
      regExp = /(\d{2})(\d{3,4})(\d{4})/;
      format = "$1-$2-$3";
    } else {
      regExp = /(\d{3})(\d{3,4})(\d{4})/;
      format = "$1-$2-$3";
    }

    return num.replace(regExp, format);
  }

  static checkTelNumber(telNumber) {
    // 1588-0000 or 031-123-1234 or 031-1234-1234 or 02-123-1234 or 02-1234-1234
    return /^\d{4}[-]+\d{4}$/.test(telNumber) || /^\d{2,3}[-]\d{3,4}[-]\d{4}$/.test(telNumber);
  }

  static phoneNumberFormat(phoneNumber) {
    phoneNumber = this.#excludeString(phoneNumber);

    return phoneNumber.replace(/(\d{3})(\d+)(\d{4})/, "$1-$2-$3");
  }

  static checkPhoneNumber(phoneNumber) {
    // 010-1234-1234 or 010-123-1234 or +82-10-1234-1234 or +82-10-123-1234
    return /^\d{3}[-]+\d{3,}[-]+\d{4}$/.test(phoneNumber) || /^\+\d{2}[-]+\d{2}[-]\d{3,}[-]\d{4}$/.test(phoneNumber);
  }

  static #excludeString = function (str) {
    return ('' + str).replace(/\D/g, '');
  }
}