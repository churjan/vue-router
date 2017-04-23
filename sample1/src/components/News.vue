<template>
 <div class="container">
   <h1 class="news-heading">{{msg}}</h1>
   <h2>获取路由的id: {{$route.params.id}} </h2>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut beatae consectetur consequuntur, cupiditate fugiat ipsam maxime molestias nulla odit quaerat recusandae reiciendis similique sint, vero. Aliquam ex quia vero.</p>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut beatae consectetur consequuntur, cupiditate fugiat ipsam maxime molestias nulla odit quaerat recusandae reiciendis similique sint, vero. Aliquam ex quia vero.</p>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut beatae consectetur consequuntur, cupiditate fugiat ipsam maxime molestias nulla odit quaerat recusandae reiciendis similique sint, vero. Aliquam ex quia vero.</p>
   <router-link to="/news/hot/hot">hot</router-link>
   <router-view></router-view>
 </div>
</template>
<script>
  export default{
    name: 'news',
    data () {
      return {
        msg: '这是新闻页面'
      }
    }
  }
</script>
<style scoped>
  .container{
    width:800px;
    margin:0 auto;
  }

  .news-heading {
    color: red;
  }
</style>
