<template>
  <div>
    <div class="flagList" id="flagList">
        <ul class="flag">
          <li>全部</li>
          <li>社会</li>
          <li>科技</li>
          <li>社会</li>
          <li>科技</li>
          <li>科技</li>
        </ul> 
    </div>  
  	<ul class="list">
  		<li v-for="item in lists" v-text="item.title"></li>
  	</ul>
  </div>
</template>
<script>
  import './../css/style.less'
	export default {
	    data:function(){
		    return{
		       lists:[]
		    }
	    },
      //加载即执行
      created:function(){
             this.remCalc();
      },
      methods:{
        remCalc:function(){
            !(function(win, doc){
                function setFontSize() {
                    // 获取window 宽度
                    // zepto实现 $(window).width()就是这么干的
                    //var winWidth =  window.innerWidth;
                    var winWidth =  window.screen.availWidth//(window.innerWidth > 0) ? window.innerWidth : screen.width;
                    console.log(winWidth);
                    //alert(winWidth);
                    // doc.documentElement.style.fontSize = (winWidth / 640) * 100 + 'px' ;
                    
                    // 2016-01-13 订正
                    // 640宽度以上进行限制 需要css进行配合
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
      }
	}
</script>
