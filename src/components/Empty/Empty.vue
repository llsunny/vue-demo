<!--
 * @Author: z_ly
 * @Description:
 * @FilePath: \Radiology-admin\src\components\Empty\Empty.vue
 *
-->
<template>
  <div class="empty-wrapper f-display-flex">
    <img
      :src="require('../../assets/images/empty_data@2x.png')"
      alt=""
    >
    <p>未检索到匹配内容</p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {},
  data() {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
.empty-wrapper
  height 100%
  align-items center
  flex-direction column
  justify-content center
  // img
  //   width 215px
  //   height 153px
  p
    padding-top 30px
    color #999
</style>
