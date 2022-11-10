/**
 * @file:
 * @author: llsunny
 * @lastEditor: llsunny
 * @update: 2022-08-26 18:03:20
 */
<!--
 * @Author: z_ly
 * @Description:
 * @FilePath: \vue-demo\src\views\main\demo\components\Child.vue
 *
-->
<template>
  <div class="child-component">
    <vxe-table
      ref="xTable"
      :data="tableData"
      :highlight-current-row="highlightCurrentRow"
      @current-change="currentChange"
    >
      <slot></slot>
    </vxe-table>
  </div>
</template>

<script type="text/ecmascript-6">
export default {

  props: {
    // eslint-disable-next-line vue/require-default-prop
    tableData: {
      type: Array,
      default: () => []
    }, // 表格展示数据
    highlightCurrentRow: {
      type: Boolean,
      default: true
    } // 行高亮
  },
  data() {
    return {
    }
  },
  methods: {
    /** 设置当前行高亮 */
    setCurrentRow(row, rowIndex) {
      this.$refs.xTable.setCurrentRow(row).then(()=>{
        this.currentChange({row:row, rowIndex:rowIndex})
      })
      this.$refs.xTable.scrollToRow(row)
    },
    /** 表格单选 */
    currentChange(val) {
      this.$emit('current-change', val)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
