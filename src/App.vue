<template>
  <div>
    <router-view />
  </div>
</template>

<script>
  import { BrowserUtils } from "./js/utils/BrowserUtils";
  import { W3CDomUtils } from "./js/utils/W3CDomUtils";
  import { Environment } from "./js/Environment";

  import { DEVICE_OS_TYPES } from "./enums/deviceOsTypes";

  export default {
    name: "App",
    data () {
      const language = BrowserUtils.getLanguage();

      return {
        language: language
      }
    },
    created() {
      this.$i18n.locale = this.language;
      this.registerCallbackService();
    },
    mounted() {
      W3CDomUtils.setHtmlLang(this.language);

      const env = Environment.getEnv();
      Environment.setEnv(env);

      this.setDeviceOsClass();
    },
    methods: {
      setDeviceOsClass () {
        let deviceOs;

        if (BrowserUtils.isAndroid()) {
          deviceOs = DEVICE_OS_TYPES.ANDROID;
        } else if (BrowserUtils.isiOS()) {
          deviceOs = DEVICE_OS_TYPES.IOS;
        }

        if (deviceOs) {
          document.documentElement.setAttribute('class', deviceOs)
        }
      },
      registerCallbackService () {
        // app과 연동되는 javascript interface가 callback을 받고 동기 처리되어야 할 경우 CallbackService class로 provider 객체를 생성하여 추가.
      }
    }
  }
</script>

<style scoped>

</style>