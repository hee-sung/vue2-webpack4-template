export class Logger {
  static #methodName = ''

  static of(methodName) {
    this.#methodName = methodName;

    return this;
  }

  static clear() {
    this.#methodName = ''

    return this;
  }

  static log(logMessage = '', logObject = {}) {
    this.#printLogMessage('log', logMessage, logObject)
  }
  static info(logMessage = '', logObject = {}) {
    this.#printLogMessage('info', logMessage, logObject)
  }
  static warn(logMessage = '', logObject = {}) {
    this.#printLogMessage('warn', logMessage, logObject)
  }
  static error(logMessage = '', logObject = {}) {
    this.#printLogMessage('error', logMessage, logObject)
  }

  static table(logLevel, logMessage = '', logObject= {}) {
    this.#printLogMessage(logLevel, logMessage)
    console.table(logObject);
  }

  static #reset = function () {
    this.#methodName = '';
  }

  static #getMethodName = function () {
    if (this.#methodName) {
      return this.#methodName;
    }

    const error = new Error();
    const stack = error.stack;

    // console.warn('[Logger.getMethodName] : stack : ', stack.split('\n'));
    let stackTrace = stack.split('\n')[4];

    if (/ /.test(stackTrace)) {
      stackTrace = stackTrace.trim().split(" ")[1];
    }
    if (stackTrace && stackTrace.indexOf(".") > -1) {
      stackTrace = stackTrace.split(".")[1];
    }

    return stackTrace
  }

  static #printLogMessage = function (logLevel, logMessage = '', logObject= {}) {
    const methodName = this.#getMethodName()
    const currentDate = new Date().toLocaleString()
    const objectSeparator = Object.keys(logObject).length > 0 ? '-' : ''

    console[logLevel](`${logLevel.toUpperCase()}  ${currentDate} [ ${methodName} ] ${logMessage} ${objectSeparator}`);
    if (Object.keys(logObject).length > 0) {
      console[logLevel](logObject)
    }

    this.#reset();
  }
}