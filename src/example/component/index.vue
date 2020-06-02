<!--
 * @Author: zouzheng
 * @Date: 2020-06-01 14:42:17
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-06-02 17:20:29
 * @Description: 这是iframe-demo组件（页面）
--> 
<template>
  <div class="layout">
    <div class="layout-item">
      <h4>传入url</h4>
      <div class="demo">
        <pikaz-iframe :onload="onload(1)" :src="src">
        </pikaz-iframe>
      </div>
    </div>
    <div class="layout-item">
      <h4>传入html内容</h4>
      <div class="demo">
        <pikaz-iframe :onload="onload(2)" :srcdoc="srcdoc">
        </pikaz-iframe>
      </div>
    </div>
    <div class="layout-item">
      <h4>传入html内容并隐藏滚动条</h4>
      <div class="demo">
        <pikaz-iframe :onload="onload(3)" :srcdoc="srcdoc" :hideScrolling="true">
        </pikaz-iframe>
      </div>
    </div>
    <div class="layout-item">
      <h4>传入html内容并修改样式</h4>
      <div class="demo">
        <pikaz-iframe :onload="onload(4)" :srcdoc="srcdoc" :css="css">
        </pikaz-iframe>
      </div>
    </div>
    <div class="layout-item">
      <h4>添加loading</h4>
      <div class="demo">
        <pikaz-iframe :onload="onload(5)" :src="src">
          <div class="loading">加载中</div>
        </pikaz-iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { PikazIframe } from '../../plugin/index'
import { doc } from './socdoc'
export default {
  props: {},
  components: { PikazIframe },
  data () {
    return {
      src: "https://m.baidu.com/",
      srcdoc: doc,
      css: `
      div{color:red;}
    body::-webkit-scrollbar {width:5px;}
    body::-webkit-scrollbar-track {
    background-color: lightgray;
    -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}
    body::-webkit-scrollbar-thumb {
  background-color: gray;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}
      `
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    onload (index) {
      console.log(`第${index}个iframe载入成功`)
    }
  },
  computed: {},
  watch: {},
}
</script>

<style scoped>
.layout {
  display: flex;
}
.layout-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 30px;
}
.demo {
  width: 375px;
  height: 700px;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(230, 230, 230, 1);
}
</style>