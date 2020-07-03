<!--
 * @Author: zouzheng
 * @Date: 2020-06-01 14:05:47
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-06-05 13:56:58
 * @Description: 这是XXX组件（页面）
--> 
## Introduction

基于vue封装的一个iframe插件

## Features

* 带有默认设置，方便使用iframe，可设置是否隐藏滚动条,修改传入的HTML内容样式等。

## [demo](https://pikaz-18.github.io/pikaz-iframe/example/index.html)

### [demo代码](https://github.com/pikaz-18/pikaz-iframe/tree/master/src/example/components)

## Installation

### With npm or yarn 

```bash
yarn add pikaz-iframe

npm i -S pikaz-iframe
```

## For Vue-cli
``` html
<pikaz-iframe :setting="setting" @onload="onload">
</pikaz-iframe>
```
.vue file:
``` js
  import {PikazIframe} from 'pikaz-iframe'
  ...
  export default {
        components: {
            PikazIframe,
        },
        data () {
          return {
            setting:{
              src: "https://m.baidu.com/"
            },
            onload: ()=> {
                console.log("载入成功")
            }
          }
        }
  ...
```

#### setting参数:
参数|说明|类型|可选值|默认值
-|-|-|-|-
frameborder|是否显示框架周围的边框|number|0/1|0
sandbox|启用iframe中内容的额外限制,传入空字符串则对所有权限做限制，具体查看[MDN-iframe](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe)|string|""/allow-forms/allow-same-origin/allow-scripts/allow-top-navigation等|传入src时默认为"allow-same-origin allow-scripts"，传入srcdoc时默认为"allow-scripts"
src|被嵌套的页面的 URL 地址|string|--|--
srcdoc|html内容|string|--|--
hideScrolling|是否隐藏滚动条，传入true默认隐藏18px宽的滚动条，如需隐藏其他宽度滚动条，则传入宽度如"20px"|boolean/string|--|false
css|传入html内容时，需修改的css样式，如"div{color:red;}"|string|--|--
更多设置选项请查看[MDN-iframe](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe)

#### Events
事件名称|说明|回调参数
-|-|-
onload|iframe加载完成时触发|--
