<template>
 <div class="container">
   <h1 class="news-heading">{{msg}}</h1>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut beatae consectetur consequuntur, cupiditate fugiat ipsam maxime molestias nulla odit quaerat recusandae reiciendis similique sint, vero. Aliquam ex quia vero.</p>
   <div><img src="../assets/logo.png" /></div>
 </div>
</template>
<script>
  export default{
    name: 'news',
    data () {
      return {
        msg: '这是首页页面'
      }
    }
  }
</script>

<style scoped lang="less">
@import '../style/home';
</style>
  .news-heading {
    color: red;
  }
</style>
