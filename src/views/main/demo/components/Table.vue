/**
 * @file:
 * @author: llsunny
 * @lastEditor: llsunny
 * @update: 2022-10-31 16:21:22
 */
<template>
  <div class="table-wrap">
    <el-table
      ref="table"
      v-bind="$attrs"
      @current-change="currentChange"
    >
      <slot></slot>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {

  },
  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
    }
  },
  // mounted() {
  //   this.$refs.table.setCurrentRow(row)
  // },
  methods: {
    /** 设置当前行高亮 */
    setCurrentRow(row, rowIndex) {
      this.$refs.table.setCurrentRow(row)
      this.currentChange({row:row, rowIndex:rowIndex})
    // this.$refs.table.scrollToRow(row)
    },
    /** 表格单选 */
    currentChange(val) {
      console.log(val)
      this.$emit('current-change', val)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
