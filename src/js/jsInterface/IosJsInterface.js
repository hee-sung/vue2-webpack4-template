// TODO : interface를 통해 강제 구현
export class IosJsInterface {
  constructor() {
    console.log('[iOSJsInterface] constructor');
  }

  getUserInfo() {
    window.iOS.getUserInfo();
  }

  getUserToken() {
    window.iOS.getUserToken();
  }
}