/**
 * @file:
 * @author: llsunny
 * @lastEditor: llsunny
 * @update: 2022-11-09 16:45:40
 */
<template>
  <div class="demo3">
    <el-dropdown
      class="avatar-container"
      trigger="hover"
    >
      <el-button type="primary">
        切换主题
      </el-button>
      <el-dropdown-menu
        slot="dropdown"
        class="user-dropdown"
      >
        <el-dropdown-item @click.native="toggleTheme('2bae85')">
          <span style="display:block">亚丁绿</span>
        </el-dropdown-item>
        <el-dropdown-item @click.native="toggleTheme('eb507e')">
          <span style="display:block">初荷红</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <w-button type="primary">
      ceshi
    </w-button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {

  },
  data() {
    return {
      isFirst: true
      // publicPath: process.env
    }
  },
  created() {
    console.log(location)
    console.log(`${location.origin}/static/css/theme/#2bae85/index.css`)
  },
  methods: {
    toggleTheme(color) {
      this.theme = color
      this.toggleClass(document.body, `custom-${color}`)
      let url = `${location.origin}/static/css/theme/%23${color}/index.css`
      this.loadCSS(url, true)
      localStorage.setItem('theme', color)
    },
    toggleClass(element, className) {
      if (!element || !className) {
        return
      }
      element.className = className
    },
    loadCSS(url, isCache=false) {
      if (this.isFirst) {
        let element = document.createElement('link')
        element.setAttribute('id', 'theme')
        element.setAttribute('rel', 'stylesheet')
        element.setAttribute('type', 'text/css')
        if(isCache) {
          element.setAttribute('href', url + '?t=' + new Date().getTime())
        } else {
          element.setAttribute('href', url)
        }
        document.head.appendChild(element)
        this.isFirst = false
      } else {
        let themeEl = document.getElementById('theme')
        themeEl.setAttribute('href', url)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
