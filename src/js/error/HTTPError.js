import { HTTP_ERROR_TYPES, CUSTOM_ERROR_TYPES } from '../../enums/errorTypes';

export class HTTPError extends Error {
  constructor(status = 500, name = HTTP_ERROR_TYPES.HTTP_ERROR.NAME, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HTTPError);
    }

    this.type = CUSTOM_ERROR_TYPES.HTTP_ERROR.TYPE;
    this.name = name;
    this.status = status;
    this.date = new Date();
  }
}