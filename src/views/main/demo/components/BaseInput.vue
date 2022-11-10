/**
 * @file:
 * @author: llsunny
 * @lastEditor: llsunny
 * @update: 2022-11-02 16:13:56
 */
<!--
 * @Author: z_ly
 * @Description:
 * @FilePath: \vue-demo\src\views\main\demo\components\BaseInput.vue
 *
-->
<template>
  <el-input-number
    :value="value"
    v-bind="$attrs"
    v-on="inputListenere"
  ></el-input-number>
  <!-- <el-input
    type="text"
    :value="value"
    v-bind="$attrs"
    v-on="inputListenere"
  >
  </el-input> -->
</template>

<script type="text/ecmascript-6">
import ElInputNumber from 'element-ui/packages/input-number/src/input-number.vue'
import ElInput from 'element-ui/packages/input/src/input.vue'
export default {
  components: {
    ElInputNumber,
    ElInput
  },
  props: {
    value: {
      type: [String, Number],
      default: undefined
    }
  },
  data() {
    return {
      // value:111
    }
  },
  computed: {
    inputListenere() {
      const vm = this
      return Object.assign({}, this.$listeners, {
        input (event) {
          // vm.$emit('input', event.target.value)
          vm.$emit('input', event)
        }
      })
    }
  },
  watch: {
    value: {
      handler(val) {
        // console.log('监听baseinput', val)
      },
      immediate: true
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
