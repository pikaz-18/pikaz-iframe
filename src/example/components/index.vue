<!--
 * @Author: zouzheng
 * @Date: 2020-06-01 14:42:17
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-06-05 13:57:57
 * @Description: 这是iframe-demo组件（页面）
--> 
<template>
  <div class="layout">
    <div class="layout-item">
      <h4>传入url</h4>
      <div class="demo">
        <pikaz-iframe :setting="setting1">
        </pikaz-iframe>
      </div>
    </div>
    <div class="layout-item">
      <h4>传入html内容</h4>
      <div class="demo">
        <pikaz-iframe :setting="setting2">
        </pikaz-iframe>
      </div>
    </div>
    <div class="layout-item">
      <h4>传入html内容并隐藏滚动条</h4>
      <div class="demo">
        <pikaz-iframe :setting="setting3">
        </pikaz-iframe>
      </div>
    </div>
    <div class="layout-item">
      <h4>传入html内容并修改样式</h4>
      <div class="demo">
        <pikaz-iframe :setting="setting4">
        </pikaz-iframe>
      </div>
    </div>
    <div class="layout-item">
      <h4>onload事件</h4>
      <div class="demo">
        <pikaz-iframe :setting="setting5" @onload="onload">
        </pikaz-iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { PikazIframe } from '../../plugin'
import { doc } from './socdoc'
export default {
  props: {},
  components: { PikazIframe },
  data () {
    return {
      setting1: {
        src: "https://m.baidu.com/"
      },
      setting2: {
        srcdoc: doc
      },
      setting3: {
        hideScrolling: true,
        srcdoc: doc
      },
      setting4: {
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
      },
      setting5: {
        src: "https://m.baidu.com/"
      }
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    onload () {
      console.log("加载成功")
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