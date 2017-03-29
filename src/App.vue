<template>
  <div id="app">
      <router-view class="view" keep-alive transiton transiton-mode="out-in"></router-view>
      <div class="menu bg-white">
          <router-link v-bind:to="nav.to" v-for="(nav,index) in navList" v-on:click.native="navActive(index)">
            <img v-bind:src="nav.imgNormal" v-bind:id="index">    
            <p class="menu-title" v-text="nav.name">首页</p>
          </router-link>  
      </div>
  </div>
</template>
<script>
export default {
  data:function(){
     return{
        navList:[{
          to:"/",
          imgNormal:require("./image/icon_home.png"),
          imgActive:require("./image/icon_home_clicked.png"),
          name:"首页"
        },{
          to:"/list",
          imgNormal:require("./image/icon_article.png"),
          imgActive:require("./image/icon_article_clicked.png"),
          name:"文章"
        },{
          to:"/content",
          imgNormal:require("./image/icon_course.png"),
          imgActive:require("./image/icon_course_clicked.png"),
          name:"购物车"
        },{
          to:"/mine",
          imgNormal:require("./image/icon_mine.png"),
          imgActive:require("./image/icon_mine_clicked.png"),
          name:"我的"
        }]
     }
  },
  methods:{
    remCalc:function(){
        !(function(win, doc){
            function setFontSize() {
                // 获取window 宽度
                var winWidth =  $(win).width();
                // 750宽度以上进行限制 需要css进行配合
                var size = (winWidth / 750) * 100;
                var newSize = (size < 100 ? size : 100) + 'px';
                doc.documentElement.style.fontSize = newSize;
                localStorage.setItem('font',newSize);
            }
            var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize';
            var timer = null;
            win.addEventListener(evt, function () {
                clearTimeout(timer);
                timer = setTimeout(setFontSize, 300);
            }, false);
            win.addEventListener("pageshow",function(e) {
                if (e.persisted) {
                    clearTimeout(timer);
                    timer = setTimeout(setFontSize,300);
                }
            }, false);
            // 初始化
            setFontSize();
        }(window, document));
    },
    /*导航选中更改选中图标*/
    navActive:function(index){
      var _activeImg = $(".menu a img.active");
      var oldIndex = _activeImg.attr("id"); 
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
    }
  },
  //加载即执行
  mounted:function(){
    this.remCalc();
    var url = location.href;
    var urlArray = url.split("/");
    var len =urlArray.length;
    if(urlArray[len-1]){
        $(".menu a").eq(0).removeClass("router-link-active");
    }
    var _activeImg = $(".menu .router-link-active img");
    var index = _activeImg.attr("id");
    $("#"+index).attr("src",this.navList[index].imgActive);
    _activeImg.addClass("active");
  }
}
</script>
