import { WebJsInterface } from "./webJsInterface";
import { iOSJsInterface } from "./iOSJsInterface";
import { AndroidJsInterface } from "./androidJsInterface";
import { BrowserUtils } from "../utils/BrowserUtils";

export class JsInterfaceDelegation {
  constructor() {
    if (BrowserUtils.isWebviewForiOs()) {
      this.jsInterface = new iOSJsInterface();
    } else if (BrowserUtils.isWebviewForAndroid()) {
      this.jsInterface = new AndroidJsInterface();
    } else {
      this.jsInterface = new WebJsInterface();
    }
  }

  getUserInfo() {
    return this.jsInterface.getUserInfo();
  }

  getUserToken() {
    return this.jsInterface.getUserToken();
  }
}