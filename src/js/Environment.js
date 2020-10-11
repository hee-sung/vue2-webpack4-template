import { W3CDomUtils } from "./utils/W3CDomUtils";
import { LOCAL_IP_LIST, SERVER_TYPES, SUB_DOMAIN_FOR_WEB } from "../enums/serverInfo";

export class Environment {

  static setEnv(env) {
    W3CDomUtils.setMeta('env', env);
  }

  static getEnv() {
    const envFromMeta = W3CDomUtils.getMeta('env');
    if (envFromMeta) {
      return envFromMeta;
    }

    const hostName = location.hostname;

    if (LOCAL_IP_LIST.indexOf(hostName) >= 0) {
      return SERVER_TYPES.LOCAL;
    }

    const urlParts = hostName.split('.');
    if (urlParts.length > 0) {
      const subDomain = urlParts[0];

      if (SUB_DOMAIN_FOR_WEB.DEV === subDomain) {
        return SERVER_TYPES.DEV;
      } else if (SUB_DOMAIN_FOR_WEB.STAGE === subDomain) {
        return SERVER_TYPES.STAGE;
      }
    }

    return SERVER_TYPES.REAL;
  }

}