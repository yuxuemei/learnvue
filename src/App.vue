<template>
  <div id="app">
      <router-view class="view" keep-alive transiton transiton-mode="out-in"></router-view>
      <div class="menu bg-white">
          <router-link to="/">
            <img src="https://s2.mogucdn.com/p2/170315/40592144_6ii829464gk34ai4hkdf14cdea05d_44x44.png">
            <p class="menu-title">首页</p>
          </router-link>  
          <router-link to="/list">
            <img src="https://s2.mogucdn.com/p2/170315/40592144_0b8i11l822b0adfjaaifl11ig86f1_44x44.png">
            <p class="menu-title">文章</p>
          </router-link> 
          <router-link to="/content">
          <img src="https://s2.mogucdn.com/p2/170315/40592144_67ja8jj102089fj6djai0l6khb0h5_44x44.png">
            <p class="menu-title">购物车</p>
          </router-link> 
          <router-link to="/mine">
            <img src="https://s2.mogucdn.com/p2/170315/40592144_35ikl8db8a4lfa3f29k8k4b9k3ji2_44x44.png">
            <p class="menu-title">我的</p>
          </router-link>
      </div>
  </div>
</template>
<script>
export default {
  data:function(){
     return{
        title:"this is a todo list"
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
    }
  },
  //加载即执行
  mounted:function(){
    this.remCalc();
  }
}
</script>
