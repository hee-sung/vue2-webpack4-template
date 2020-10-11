export class W3CDomUtils {
  static getMeta(name) {
    const metas = document.getElementsByTagName('meta');
    const len = metas.length;

    let i = 0;
    for (i = 0; i < len; i++) {
      if (metas[i].getAttribute('property') === name) {
        return metas[i].getAttribute('content')
      }
    }

    return '';
  }

  static setMeta(name, value) {
    let metaTag = document.createElement('meta');

    metaTag.setAttribute('property', name);
    metaTag.setAttribute('content', value);

    document.getElementsByTagName('head')[0].appendChild(metaTag);
  }

  static setHtmlLang(language) {
    document.documentElement.lang = language;
  }
}