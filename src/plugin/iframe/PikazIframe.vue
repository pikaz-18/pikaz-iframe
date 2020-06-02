<!--
 * @Author: zouzheng
 * @Date: 2020-06-01 14:24:51
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-06-02 17:50:44
 * @Description: 这是iframe组件（页面）
--> 
<template>
  <div id="pikaz-iframe-container">
    <iframe :name="iframeName" :sandbox="iframeSandbox" :scrolling="iframeScrolling" :src="iframeSrc"
      :srcdoc="iframeSrcdoc" :frameborder="iframeFrameborder" id="pikazIframe" :style="hideScrollBar">
    </iframe>
  </div>
</template>

<script>
export default {
  props: {
    // iframe name
    name: {
      type: String
    },
    frameborder: {
      type: Number,
      default: 0
    },
    // iframe限制
    sandbox: {
      type: String,
      default: "allow-same-origin allow-scripts"
    },
    // iframe是否可以滚动
    scrolling: {
      type: String,
      default: "auto"
    },
    // iframe url
    src: {
      type: String
    },
    // html内容
    srcdoc: {
      type: String
    },
    // 是否隐藏滚动条
    hideScrolling: {
      type: [String, Boolean],
      default: false
    },
    // 加载完成钩子
    onload: {
      type: Function,
      default: () => {
      }
    },
    // 添加样式
    css: {
      type: String
    }
  },
  components: {},
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    /**
     * @name: onload
     * @param {type} 
     * @return: 
     */
    iframeOnload () {
      this.$nextTick(() => {
        const iframe = document.getElementById("pikazIframe");
        const that = this
        iframe.onload = function () {
          that.onload()
        }
      })
    }
  },
  computed: {
    // 使用computed方便后续做改动
    // iframe name
    iframeName () {
      return this.name
    },
    // iframe限制
    iframeSandbox () {
      return this.sandbox
    },
    // iframe是否可以滚动
    iframeScrolling () {
      return this.scrolling
    },
    // iframe url
    iframeSrc () {
      return this.src
    },
    // iframe html
    iframeSrcdoc () {
      if (this.css && this.srcdoc) {
        // 查找head标签
        const pattern = "<head.*(?=>)(.|\n)*?</head>"
        const html = this.srcdoc.match(pattern)[0]
        // 插入style
        const style = `<style>${this.css}</style></head>`
        const newHtml = html.replace("</head>", style)
        const doc = this.srcdoc.replace(html, newHtml)
        return doc
      }
      return this.srcdoc
    },
    // iframe 是否有边框
    iframeFrameborder () {
      return this.frameborder
    },
    // 是否隐藏滚动条
    hideScrollBar () {
      if (this.hideScrolling) {
        if (Object.prototype.toString.call(this.hideScrolling) === "[object String]") {
          return { width: `calc(100% + ${this.hideScrolling})` }
        } else {
          return { width: `calc(100% + 18px)` }
        }
      }
    }
  },
  watch: {
    src: {
      handler (val) {
        this.iframeOnload()
      },
      immediate: true
    },
    srcdoc: {
      handler (val) {
        this.iframeOnload()
      },
      immediate: true
    }
  }
}
</script>

<style scoped>
#pikaz-iframe-container {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
#pikaz-iframe-container::-webkit-scrollbar {
  display: none;
}
#pikazIframe {
  width: 100%;
  height: 100%;
}
</style>