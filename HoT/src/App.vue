<script >
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import maHero from './components/maHero.vue' ;
    export default{ 
      name:'App',
      components: {
    maHero // 将组件注册，
  },
      data() {
    return{
      age:20,
      name:'xiaozhang',
      msg:'<h2>一顿操作猛如虎</h2>',
      id:'niuniu',
      url:'www.baidu.com',
      attr:'id',
      mouseman:'click',
      title: '英雄之路' // 修改为这一行
    }
   
  },
  computed:{
    reversename:function(){
      return this.name.split('').reverse().join('')
    }
  },
  methods:{
    changes: function(){
          this.age=this.age+1;
          if(this.age%2==0)
            this.name='帅哥';
            else this.name="没那么帅的人"
  },
  mask:function(){
      if(this.id=='niuniu')
       this.id='ker'
       else this.id='niuniu'
      this.age=this.age-1;
        },
  },
  
  };

</script>

<template>
<div> 
  <p v-html="msg"></p>
    <h1>{{ title }}</h1>
    
     <p>{{reversename}}</p>
     <p v-once>{{name+'桑'}} 呜呼</p>
     <p :[attr]="id">呐呐呐</p>
     <button @click="changes">大小</button>
     <button @[mouseman]="mask">你敢点吗</button>
  </div>
  
</template>
<script>


</script>
<style>
#si {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#niuniu{
  color: rgb(76, 150, 67);
}
#ker{
 color:bisque; 
}
.niuniu{
 font-size: 70px;
}
.ker{
 font-size:5px ; 
}
</style>
