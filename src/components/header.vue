<template>
  <div class="header" v-text="msg" v-on:click="clickMe"></div>  
</template>
<script>
export default {
  name: 'header',
  data:function () {
    return {
      msg: 'component header'
    }
  },
  //props:['msgfromfather'], //设置要不要接受父组件的参数
  methods:{
    clickMe:function(){
        //console.log(this.msgfromfather);
        //this.$emit("child-message",this.msg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  background-color: #2a3950;
  height:50px;
  line-height:50px;
  color:#ffffff;
}
</style>
