 <template>
  <div class="container">
    <h1 class="news-heading">{{msg}}</h1>
  </div>
 </template>
 <script>
   export default{
     name: 'news',
     data () {
       return {
         msg: '这是hot页面'
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
     color: green;
   }
 </style>
