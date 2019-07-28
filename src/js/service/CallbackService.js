import { BrowserUtils } from "../utils/BrowserUtils"
import { W3CDomUtils } from "../utils/W3CDomUtils";
import { WebviewBridgeError } from "../error/WebviewBridgeError"

export class CallbackService {
  constructor(action, callback) {
    this.action = action
    this.callback = callback
  }

  clear () {
    delete this.promise
    delete this.resolve
    delete this.reject
  }

  get () {
    if (!this.promise) {
      const env = W3CDomUtils.getMeta('env')

      let data = {}
      this.promise = new Promise((resolve, reject) => {
        if (BrowserUtils.isWebviewForiOs()) {
          this.action()

          this.resolve = resolve
          this.reject = reject

        } else if (BrowserUtils.isWebviewForAndroid()) {
          data = this.action()
          console.log(`[UserProvider.getUserData] data for android : ${data}`)

          if (data) {
            resolve(JSON.parse(data))
          } else {
            reject(new WebviewBridgeError('android', 'data is null'))
          }

        } else if (env != 'real' && BrowserUtils.isPcPlatform()) {
          data = this.action()

          resolve(data)
        } else {
          reject(new WebviewBridgeError('other', 'other platform'))
        }
      })

    }

    return this.promise
  }

  resolve () {
    let resolve = this.resolve
    this.clear()
    resolve.apply(null, arguments)
  }

  reject () {
    let reject = this.reject
    this.clear()
    reject.apply(null, arguments)
  }
}