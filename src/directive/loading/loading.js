/*
 * @Author: z_ly
 * @Description:
 * @FilePath: \WechatPatientEnd\src\directive\loading\loading.js
 * @
 */
import Vue from 'vue'
import Loading from './loading.vue'

const Mask = Vue.extend(Loading)

const toggleLoading = (el, binding) => {
  if (binding.value) {
    Vue.nextTick(() => {
      // 控制Loading组件显示
      el.instance.visible = true
      // 插入到目标元素
      insertDom(el, el, binding)
    })
  } else {
    el.instance.visible = false
  }
}

const insertDom = (parent, el) => {
  parent.appendChild(el.mask)
}

export default {
  bind(el, binding, vnode) {
    // 获取绑定指令元素对应元素的属性值，传入到loading组件的data中
    // 在绑定了v-loading指令的元素上添加loading-text属性，其值会被渲染为加载文案，并显示在加载图标的下方
    const textExr = el.getAttribute('loading-text')
    const vm = vnode.context
    const mask = new Mask({
      el: document.createElement('div'),
      data: {
        text: (vm && vm[textExr]) || textExr
      }
    })
    // 将实例放到对应元素dom的instance上
    el.instance = mask
    // 将实例loading组件渲染出来的dom放到mask属性上
    el.mask = mask.$el
    // 存放loading渲染出来的dom属性的行内样式
    el.maskStyle = {}
    // 当值为true时调用
    binding.value && toggleLoading(el, binding)
  },
  update(el, binding) {
    el.instance.setText(el.getAttribute('loading-text'))
    if (binding.oldValue !== binding.value) {
      toggleLoading(el, binding)
    }
  },
  unbind(el, binding) {
    el.instance && el.instance.$destroy()
  }
}