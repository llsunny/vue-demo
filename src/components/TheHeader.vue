<!--
 * @Author: z_ly
 * @Description:
 * @FilePath: \mobile-office\src\components\TheHeader.vue
 * @symbol_custom_string_obkoro1:
-->
<template>
  <div class="header-wrapper">
    <div class="header-info">
      <img
        class="header-logo"
        :src="require('../assets/images/logo@2x.png')"
        alt="头部logo"
      >
      <div class="header-name">
        移动管理系统
      </div>
      <div class="hospital-name">
        {{ hospitalName }}
      </div>
      <div class="nav-item">
        报告审核
      </div>
    </div>
    <div class="user-info">
      <img
        class="user-avatar"
        :src="require('../assets/images/doctor_avatar@2x.png')"
        alt="用户头像"
      >
      <div class="user-name">
        {{ userName }}
      </div>
      <!-- <span class="line">|</span> -->
      <w-popover
        popper-class="exit-class"
        placement="bottom"
        width="100"
        trigger="click"
      >
        <div
          class="exit-text"
          @click="handleExit"
        >
          退出登录
        </div>
        <div
          slot="reference"
          class="exit-icon"
        ></div>
      </w-popover>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {

  props: {
    userName: {
      type: String,
      default: ''
    },
    hospitalName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {
    /**
     * @description: 退出登录
     * @param {*}
     * @return {*}
     */
    handleExit() {
      this.$emit('handleExit')
    }
  }
}
</script>

<style lang="stylus" scoped>
.header-wrapper
  display flex
  padding 0 24px
  width 100%
  height 48px
  align-items center
  background $blue-color
  box-sizing border-box
  .header-info
    display flex
    flex 1
    align-items center
    .header-logo
      width 88px
      height 28px
    .header-name, .hospital-name
      padding-left 16px
      font-size $font-size-20
      font-weight 400
      color $white-color
    .hospital-name
      padding 0 76px 0 38px
    .nav-item
      position: relative
      width 156px
      height 48px
      line-height 48px
      text-align center
      font-size $font-size-16
      color #6AF0FF
      background linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%)
      &:after
        position absolute
        left 0
        bottom 0
        content ''
        display inline-block
        width 100%
        height 4px
        background #41EDFF
  .user-info
    display flex
    align-items center
    img
      width 33px
      height 33px
    .user-name
      padding 0 12px
      font-size 16px
      font-weight 400
      color $white-color
    .line
      margin 0 16px
      color #EBEEF5
      opacity 0.1
    .exit-icon
      width 19px
      height 20px
      background url('~@/assets/images/icon_exit_nor@2x.png')
      background-size cover
      cursor pointer
      &:hover
        background url('~@/assets/images/icon_exit_hover@2x.png')
        background-size cover
</style>
<style lang="stylus">
.exit-class
  padding 0
  min-width fit-content
  .exit-text
    height 35px
    line-height 35px
    text-align center
    cursor pointer
    &:hover
      background #EEF2FD
</style>