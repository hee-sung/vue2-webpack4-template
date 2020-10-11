// TODO : interface를 통해 강제 구현
export class WebJsInterface {
  constructor() {
    console.log('[WebJsInterface]');
  }

  getUserInfo() {
    return {
      name: 'IU',
      age: 27
    }
  }

  getUserToken() {
    return "vBVbrb88bK6Ns0EaKsTnPqLR5vs06jELqrM02IyN80K8nd9m+mI+2y9NN+cxr8RD";
  }
}