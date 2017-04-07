<template>
  <div id="app">
       <router-view class="view"></router-view>
  </div>
</template>
<script>
export default {
  data:function(){
     return{
        title:"zhuye"
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
                var newSize = parseInt(size < 100 ? size : 100) + 'px';
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
  created:function(){
    this.remCalc();
  }
}
</script>
