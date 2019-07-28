export class Error {
  constructor(message) {
    this.message = message
  }
}

export class WebviewBridgeError extends Error {

  constructor(platform, message) {
    super(message)

    this.platform = platform
  }

}