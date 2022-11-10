<!--
 * @Author: z_ly
 * @Description:
 * @FilePath: \Radiology-admin\src\components\small-title\SmallTitle.vue
 *
-->
<template>
  <div class="small-title-item f-display-flex f-align-items">
    <span></span>
    <h3>{{ title }}</h3>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
.small-title-item
  span
    width 3px
    height 14px
    background #0F49ED
  h3
    padding-left 5px
    font-size $font-size-14
</style>
