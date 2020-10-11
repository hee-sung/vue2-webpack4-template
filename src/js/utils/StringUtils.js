export class StringUtils {
  static getJosa(text, josa) {
    if (text.length === 0) {
      return '';
    }

    const code = text.charCodeAt(text.length - 1) - 44032;

    if (code < 0 || code > 11171) { // 한글이 아닌 경우
      return '';
    }

    let _getJosa = function (txt, sup) {
      // jong : true면 받침있음, false면 받침없음

      if (txt == '을' || txt == '를') {
        return (sup ? '을' : '를');
      }
      if (txt == '이' || txt == '가') {
        return (sup ? '이' : '가');
      }
      if (txt == '은' || txt == '는') {
        return (sup ? '은' : '는');
      }
      if (txt == '와' || txt == '과') {
        return (sup ? '와' : '과');
      }

      // 알 수 없는 조사
      return '이';
    }

    if (code % 28 == 0) {
      return text + _getJosa(josa, false);
    } else {
      return text + _getJosa(josa, true);
    }
  }

  static getByteLengthForString(str) {
    let len = 0;
    let i = 0;
    for (i = 0; i < str.length; i++) {
      if (escape(str.charAt(i)).length === 6) {
        len++;
      }

      len++;
    }

    return len;
  }

  static checkEmail(mail) {
    return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(mail);
  }

  static checkPassword(password) {
    // 영어소문자, 숫자 포함 8자 이상
    return /(?=.*\d)(?=.*[a-z]).{8,}/.test(password);
  }

  static removeAllWhiteSpace(str) {
    return str.replace(/\s/gi, '');
  }

  static getTextLines(text) {
    return text.split(/\r\n|\r|\n/);
  }

  static getTextLinesLength(text) {
    return text.split(/\r\n|\r|\n/).length;
  }
}