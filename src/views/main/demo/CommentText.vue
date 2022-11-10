<template>
  <div class="test">
    <div class="comment-textarea">
      <draggerable
        v-model="list"
        handle=".seq"
        class="wrap"
      >
        <div
          v-for="(item, index) in list"
          :key="index"
          class="row"
        >
          <span class="seq">{{ index + 1 }}、</span>
          <el-input
            :ref="index"
            v-model="item.content"
            type="textarea"
            size="small"
            autosize
            resize="none"
            @keydown.enter.native="handleTextareaKeydown"
            @keyup.enter.native="handleEnter(item,index,$event)"
            @keydown.delete.native="handleDeleteByKeydown()"
            @keyup.delete.native="handleDeleteByKeyup(item,index,$event)"
            @input="handleInput"
          >
          </el-input>
        </div>
      </draggerable>
    </div>
  </div>
</template>

<script>
import draggerable from 'vuedraggable'
import ElInput from 'element-ui/packages/input/src/input.vue'

export default {
  name: 'CommentText',
  components: {
    draggerable,
    ElInput
  },
  data() {
    return {
      list: [
        { content: '', relatedComentId: '', relatedNodeId: '' }
      ],
      keydownTrigger: false
    }
  },
  methods: {
    handleInput() {
      console.log(this.list)
    },
    // 按回车键时的处理
    handleEnter(item, index, e) {
      let pos = e.srcElement.selectionStart
      let frontStr = item.content.substring(0, pos)
      let backStr = item.content.substring(pos)
      console.log(frontStr, ',', backStr)
      item.content = frontStr
      let obj = {
        content: backStr,
        relatedComentId: '',
        relatedNodeId: ''
      }
      this.list.splice(index + 1, 0, obj)
      this.$nextTick(()=>{
        const element = this.$refs[index+1][0].$refs.textarea
        element.focus()
        element.setSelectionRange(0, 0)
      })
    },
    // 阻止多行文本框换行
    handleTextareaKeydown() {
      let e = window.event || arguments[0]
      if (e.key == 'Enter' || e.code == 'Enter' || e.keyCode == 13) {
        e.returnValue = false
        return false
      }
    },
    // 按退格键时的处理
    handleDeleteByKeydown() {
      this.keydownTrigger = true
    },
    handleDeleteByKeyup(item, index, e) {
      if(!this.keydownTrigger) {
        return false
      }else {
        this.keydownTrigger = false
        let pos = e.srcElement.selectionStart
        let frontStr = item.content.substring(0, pos)
        let backStr = item.content.substring(pos)
        if(frontStr == '' && this.list.length > 1) {
          if(backStr == '') {
            this.list.splice(index, 1)
            this.$nextTick(() => {
              if (index > 0) {
                this.$refs[index - 1][0].focus()
              }
            })
          }else {
            if(index > 0) {
              let len = this.list[index-1].content.length
              this.list.splice(index, 1)
              this.list[index-1].content += backStr
              this.$nextTick(()=>{
                const element = this.$refs[index-1][0].$refs.textarea
                element.focus()
                element.setSelectionRange(len, len)
              })
            }
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.test {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
}
.comment-textarea {
  margin: 60px;
  padding: 5px;
  width: 300px;
  height: 200px;
  background: #fff;
  border: 1px solid var(--BORDER-LINE);
  border-radius: 4px;
  overflow-y: auto;
  .row {
    /deep/.el-textarea {
      width: calc(100% - 32px);
      vertical-align: text-top;
      .el-textarea__inner {
        padding: 3px 0;
        border: 0;
        border-radius: 0;
      }
    }
    .seq {
      display: inline-block;
      padding: 3px 0;
      width: 32px;
      // height: 32px;
      // line-height: 1.5;
      cursor: move;
      vertical-align: text-top;
    }
  }
}

.sortable-ghost,
.sortable-chosen {
  background-color: inherit;
}
</style>