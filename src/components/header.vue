<template>
  <div class="header" v-text="msg"></div>  
</template>
<script>
    export default {
      name: 'header',
      data:function () {
        return {
          msg: 'component header'
        }
      },
      methods:{
        clickMe:function(){
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
