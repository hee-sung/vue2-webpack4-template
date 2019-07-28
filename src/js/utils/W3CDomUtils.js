export class W3CDomUtils {
  static getMeta (name) {
    const metas = document.getElementsByTagName('meta')
    const len = metas.length

    let i = 0
    for (i = 0; i < len; i++) {
      if (metas[i].getAttribute('property') === name) {
        return metas[i].getAttribute('content')
      }
    }

    return ''
  }
}