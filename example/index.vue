<!--
 * @Author: zouzheng
 * @Date: 2020-06-01 14:42:17
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-06-01 17:40:46
 * @Description: 这是iframe-demo组件（页面）
--> 
<template>
  <div class="demo">
    <pikaz-iframe :src="src" :onload="onload" :srcdoc="srcdoc" :css="css"></pikaz-iframe>
  </div>
</template>

<script>
import { PikazIframe } from '../src/plugin/index'
import { doc } from './socdoc'
export default {
  props: {},
  components: { PikazIframe },
  data () {
    return {
      src: "https://m.baidu.com/",
      srcdoc: doc,
      css: "div{color:blue}"
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    onload () {
    }
  },
  computed: {},
  watch: {},
}
</script>

<style scoped>
.demo {
  width: 375px;
  height: 700px;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(230, 230, 230, 1);
}
</style>