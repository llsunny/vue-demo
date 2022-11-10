<!--
 * @Author: z_ly
 * @Description:
 * @FilePath: \WechatPatientEnd\src\directive\loading\loading.vue
 * @
-->
<template>
  <div
    v-show="visible"
    class="loading-wrap"
  >
    <div class="loading-box">
      <div class="img-box">
        <img
          src="./images/loading.gif"
          alt=""
        >
      </div>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {},
  data() {
    return {
      visible: false,
      text: null
    }
  },
  methods: {
    setText(text) {
      this.text = text
    }
  }
}
</script>

<style lang="stylus" scoped>
.loading-wrap
  position absolute
  left 0
  right 0
  top 0
  bottom 0
  background rgba(0, 0, 0, 0.2)
  z-index 2003
.loading-box
  position absolute
  left 50%
  top 50%
  // height 60px
  // width 60px
  transform translate(-50%, -50%)
  text-align center
  .img-box
    width 100%
    // height 60px
    >img
      width 60px
  >p
    margin-top 5px
    color $white-color
    letter-spacing 1px
</style>
