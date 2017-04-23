<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <header class="header">
      <h1>头部</h1>
    </header>
    <router-link to="/">首页</router-link>
    <router-link to="/news/hot">新闻</router-link>
    <router-link to="/forum">论坛</router-link>
    <router-view></router-view>
    <footer class="footer">
      <h1>这是尾部</h1>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header,.footer{
  background:yellow;
}
</style>
