<!--
 * @Author: zouzheng
 * @Date: 2020-06-01 14:24:51
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-06-05 13:54:58
 * @Description: 这是iframe组件（页面）
--> 
<script>
export default {
  props: {
    // setting配置
    // iframe url
    // src: {
    //   type: String
    // },
    // // html内容
    // srcdoc: {
    //   type: String
    // },
    // // 是否隐藏滚动条
    // hideScrolling: {
    //   type: [String, Boolean],
    //   default: false
    // },
    // // 添加样式
    // css: {
    //   type: String
    // }
    setting: Object
  },
  render () {
    return (
      <div id="pikaz-iframe-container">
        <iframe {...{ attrs: this.attrs }} style={this.hideScrollBar} id="pikazIframe">
        </iframe>
      </div>
    );
  },
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
    this.iframeOnload()
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
          that.$emit("onload")
        }
      })
    }
  },
  computed: {
    // 是否隐藏滚动条
    hideScrollBar () {
      if (this.setting.hideScrolling) {
        if (Object.prototype.toString.call(this.setting.hideScrolling) === "[object String]") {
          return { width: `calc(100% + ${this.setting.hideScrolling})` }
        } else {
          return { width: `calc(100% + 18px)` }
        }
      }
      return {}
    },
    // iframe参数处理
    attrs () {
      const attr = {}
      Object.keys(this.setting).forEach(key => {
        if (key !== 'hideScrolling' || key !== 'onload' || key !== 'css' || key !== 'srcdoc' || key !== 'src') {
          attr[key] = this.setting[key]
        }
        // 处理css样式
        if (key === 'srcdoc' && this.setting.css && this.setting.srcdoc) {
          // 查找head标签
          const pattern = "<head.*(?=>)(.|\n)*?</head>"
          const html = this.setting.srcdoc.match(pattern)[0]
          // 插入style
          const style = `<style>${this.setting.css}</style></head>`
          const newHtml = html.replace("</head>", style)
          const doc = this.setting.srcdoc.replace(html, newHtml)
          attr[key] = doc
        }
      })

      // 设置默认值
      if (!attr.sandbox || attr.sandbox !== '') {
        // 同源文档
        if (this.setting.srcdoc) {
          attr.sandbox = 'allow-scripts'
        } else {
          attr.sandbox = 'allow-same-origin allow-scripts'
        }
      }
      // 无边框
      if (!attr.frameborder) {
        attr.frameborder = 0
      }
      return attr
    }
  },
  watch: {
    src: {
      handler (val) {
        val && this.iframeOnload()
      },
      immediate: true
    },
    srcdoc: {
      handler (val) {
        val && this.iframeOnload()
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