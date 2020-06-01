<!--
 * @Author: zouzheng
 * @Date: 2020-06-01 14:05:42
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-06-01 14:44:46
 * @Description: 这是XXX组件（页面）
--> 
<template>
  <div id="app">
    <example></example>
  </div>
</template>

<script>
import Example from '../example'
export default {
  name: 'App',
  components: {
    Example
  }
}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
}
</style>
