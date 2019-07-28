<template>
  <div class="ajax-test">
    <button type="button">Get</button>
  </div>
</template>

<script>
  export default {
    name: "AjaxTest",
    data: function () {
      return {
        user: {}
      }
    },
    created: function () {},
    methods: {
      getUserInfo: function (userId) {
        const url = `https://reqres.in/api/users/${userId}`
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ajax-test {

  }
</style>