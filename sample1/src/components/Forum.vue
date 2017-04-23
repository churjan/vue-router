 <template>
  <div class="container">
    <h1 class="news-heading">{{msg}}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut beatae consectetur consequuntur, cupiditate fugiat ipsam maxime molestias nulla odit quaerat recusandae reiciendis similique sint, vero. Aliquam ex quia vero.</p>
  </div>
 </template>
 <script>
   export default{
     name: 'news',
     data () {
       return {
         msg: '这是论坛页面'
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
