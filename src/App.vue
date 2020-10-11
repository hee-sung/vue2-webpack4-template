<template>
  <div>
    <router-view />
  </div>
</template>

<script>
  import { W3CDomUtils } from "./js/utils/W3CDomUtils"
  import { BrowserUtils } from "./js/utils/BrowserUtils"

  export default {
    name: "App",
    created () {
      this.setEnvTag()
      this.setDeviceClass()
    },
    methods: {
      setEnvTag: function () {
        let serverType = 'local'

        W3CDomUtils.setMeta('env', serverType)
      },
      setDeviceClass: function () {
        let deviceName = ''

        if (BrowserUtils.isiOS()) {
          deviceName = 'ios'
        } else if (BrowserUtils.isAndroid()) {
          deviceName = 'android'
        }

        let root = document.getElementsByTagName( 'html' )[0];
        root.setAttribute( 'class', deviceName );
      },
    }
  }
</script>

<style lang="scss">
@import "assets/scss/main";
</style>