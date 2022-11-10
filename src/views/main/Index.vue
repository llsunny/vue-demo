<!--
 * @Author: z_ly
 * @Description:
 * @FilePath: \vue-demo\src\views\main\Index.vue
 * @
-->
<template>
  <main class="main-container">
    
    <section class="view-wrapper">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </section>
    <!-- <the-footer></the-footer> -->
  </main>
</template>

<script>
export default {
  name: 'Main',
  
  methods: {
    
  }
}
</script>

<style lang="stylus">
.fade-enter-active, .fade-leave-active
  transition opacity 0.25s
.fade-enter, .fade-leave
  opacity 0
main.main-container
  position relative
  margin 0 auto
  height 100%
  background-color $gray-bg-color
  .view-wrapper
    position absolute
    top 48px
    bottom 0
    width 100%
    overflow hidden
</style>
