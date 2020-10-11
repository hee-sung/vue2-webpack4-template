import { JS_INTERFACE_ERROR_TYPES, CUSTOM_ERROR_TYPES } from './enums/errorTypes';

export class JsInterfaceError extends Error {
  constructor(platform = JS_INTERFACE_ERROR_TYPES.WEB.TYPE, status = 500, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, JsInterfaceError);
    }

    this.type = CUSTOM_ERROR_TYPES.JS_INTERFACE_ERROR.TYPE;
    this.platform = platform;
    this.status = status;
    this.date = new Date();
  }
}