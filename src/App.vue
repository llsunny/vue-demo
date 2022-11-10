/**
 * @file:
 * @author: llsunny
 * @lastEditor: llsunny
 * @update: 2022-11-08 16:37:36
 */
<!--
 * @Author: z_ly
 * @Description:
 * @FilePath: \vue-demo\src\App.vue
 * @
-->
<template>
  <div
    id="app"
  >
    <router-view />
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import FormatUtils from '@/utils/formatUtils'
export default {
  name: 'App',
  data () {
    return {
    }
  },

  created() {
    document.documentElement.style.setProperty('--COLOR-NORMAL', '#2a5bfe')
  },
  methods: {
  }
}
</script>

<style lang="stylus">

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  font-size 14px
  letter-spacing 0.05em
  width 100%vw
  height 100%vh
  overflow hidden
</style>
