// TODO : interface를 통해 강제 구현
export class AndroidJsInterface {
  constructor() {
    console.log('[AndroidJsInterface]');
  }

  getUserInfo() {
    return window.Android.getUserInfo();
  }

  getUserToken() {
    return window.Android.getUserToken();
  }
}