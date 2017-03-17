<template>
  <div id="app">
    <p>子组件告诉我：{{childMess}}</p>
    <component-a msgfromfather="父组件的值" v-on:child-message="listenMyChild"></component-a>
    <h1 v-html="title"></h1> 
    <input v-model="newItem" v-on:keyup.enter="addNew">
    <ul v-for="item in items">
      <li v-text="item.name" v-on:click="getVal(item)"></li>
    </ul>
  </div>
</template>

<script>
import Store from './store.js';
import ComponentA from './components/componentA'
export default {
  data:function(){
     return{
        title:"this is a todo list",
        items:Store.fetch(),
        newItem:'',
        childMess:'normal'
     }
  },
  components:{ComponentA}, //注册组件
  watch:{
    items:{
       handler:function(items){
          Store.save(items);
       },
       deep:true
    }
  },
  methods:{
    getVal:function(item){
      item.isFinish = !item.isFinish;
    },
    addNew:function(){
    this.items.push({name:this.newItem,
       isFinish:true,
       description:"的的顶顶顶顶顶"
       })
       this.newItem = "";
    },
    listenMyChild:function(msg){
       this.childMess = msg;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
  padding:0;
}
html,body{
  margin:0;
  padding:0;
}
</style>
