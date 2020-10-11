export class URIUtils {
  static makeQueryString(data) {
    if (Object.keys(data).length < 1) {
      return '';
    }

    let result = [];
    for (let key in data) {
      result.push(`${key}=${data[key]}`);
    }

    return `?${result.join('&')}`;
  }

  static webBaseUrl() {
    return `${location.protocol}//${location.host}`
  }

  static getWebStaticUrl() {
    let baseUrl = this.webBaseUrl();
    return `${baseUrl}/static`
  }
}