<template>
  <div  class="foot">
    <h1 class="hidden">{{love}}</h1>
      <div class="menu bg-white">
          <router-link v-bind:to="nav.to" v-for="(nav,index) in navList" v-on:click.native="navActive(index)">
            <img v-bind:src="nav.imgNormal" v-bind:id="index">    
            <p class="menu-title" v-text="nav.name"></p>
          </router-link>  
      </div>
  </div>
</template>
<script>
  export default{
    data:function(){
         return {
            navList:[{
                to:"/",
                imgNormal:require("./../image/icon_home.png"),
                imgActive:require("./../image/icon_home_clicked.png"),
                name:"首页"
              },{
                to:"/list",
                imgNormal:require("./../image/icon_article.png"),
                imgActive:require("./../image/icon_article_clicked.png"),
                name:"文章"
              },{
                to:"/content",
                imgNormal:require("./../image/icon_course.png"),
                imgActive:require("./../image/icon_course_clicked.png"),
                name:"购物车"
              },{
                to:"/mine",
                imgNormal:require("./../image/icon_mine.png"),
                imgActive:require("./../image/icon_mine_clicked.png"),
                name:"我的"
            }],
            username:""
         }
    },
    props:["love"], //设置要不要接受父组件的参数
    methods:{
      /*导航选中更改选中图标*/
      navActive:function(index){
        let _activeImg = $(".menu a img.active");
        let oldIndex = _activeImg.attr("id"); 
        //把之前的恢复默认
        $("#"+oldIndex).attr("src",this.navList[oldIndex].imgNormal);
        //把当先选中的激活图标
        $("#"+index).attr("src",this.navList[index].imgActive);
        if(index){
          $(".menu a").eq(0).removeClass("router-link-active");
        }else{
          $(".menu a").eq(0).addClass("router-link-active");
        }
        //先把之前的删掉 再添加
        $("img").removeClass("active");
        $(".menu a").eq(index).find("img").addClass("active");

        this.$store.state.user_name = "footer";
      }
    },
    //加载即执行
    mounted:function(){
      let url = location.href;
      let urlArray = url.split("/");
      let len =urlArray.length;
        if(urlArray[len-1]){
            $(".menu a").eq(0).removeClass("router-link-active");
        }
        let _activeImg = $(".menu .router-link-active img");
        let index = _activeImg.attr("id");
        $("#"+index).attr("src",this.navList[index].imgActive);
        _activeImg.addClass("active");
        //this.$emit('child-tell-me-something',"love you father!")
       
    }
  }
</script>
<style>
  .foot{
      position: fixed;
      bottom: 0;
      width: 100%;
  }
</style>  