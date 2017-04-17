<template>
  <div class="header" v-text="msg" v-on:click="userNameChange"></div>  
</template>
<script>
    export default {
      name: 'header',
      data:function () {
        return {
          msg: 'component header'
        }
      },
      props:["placeholder"],
      methods:{
        userNameChange(){
           //this.$store.commit("showUserName");
           this.msg = this.$store.state.user_name
        }
      },
      created:function(){
          this.msg = this.$store.state.user_name
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
