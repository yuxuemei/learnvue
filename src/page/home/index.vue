<template>
	<div>
	    <!-- 模仿自蘑菇街手机端 http://m.mogujie.com/ -->
		<header class="header bg-white">
		    <a class="im-talk" href="//m.mogujie.com/x/im/?imver=1.2&amp;&amp;show_header=qq#recent"></a>
		    <a class="search-index" href="javascript:;">
		    	<input class="search" type="text" name="q" placeholder="省心套装懒癌必备">
		    </a>
		    <a class="im-car" href="/content"></a>
		</header>
		<!-- 轮播部分 -->
		<div class="carousel bg-white">
			<img src="https://s10.mogucdn.com/mlcdn/c45406/170321_2kia616jecgjk9dbli98ffg01hkl0_750x360.jpg_1300x9999.v1c7E.70.webp" alt="轮播">	
		</div>
		<!-- advert部分 -->	
		<div class="advert bg-white">
		    <div class="advert-item">
		        <p>团购</p>
		        <section>量版买就送</section>
		        <img src="https://s2.mogucdn.com/p2/170317/105897215_7fecl8jg88ige3lgbfbhb5i17079i_200x200.jpg_300x9999.v1c7E.70.webp" alt="团购">
		    </div>
		    <div class="advert-item">
		        <p>优选</p>
		        <section>最高满减50</section>
		        <img src="https://s10.mogucdn.com/p1/160518/upload_ie4dgojuga4dkojzhazdambqgiyde_120x120.png_300x9999.v1c7E.70.webp" alt="优选">
		    </div>
		    <div class="advert-item">
		        <p>新人福利</p>
		        <section>百款新人好礼</section>
		        <img src="https://s10.mogucdn.com/p1/160401/1ei_ie4dinbwmnsggntbg4zdambqgiyde_120x120.jpg_300x9999.v1c7E.70.webp" alt="团购">
		    </div>
		</div>
		<!-- 快抢部分 -->	
		<div class="rob bg-white">
		    <div class="clearfix">
			    <section class="rob-title">
			    	15点快抢 距结束00:12:10
			    </section>
			    <a href="//act.mogujie.com/fsfw?ismobile=1" class="rob-arrow">
			    <img src="//s10.mogucdn.com/mlcdn/c45406/170323_0b6e9559cjg8jc7bi55f7h27176i8_32x32.png" alt="icon">
			    </a>
		    </div>
		    <div class="rob-list">
		        <ul class="rob-item"  v-bind:style="width">
		          <li v-for="rob in robList">
		          	 <img v-bind:src="rob.imgurl">
		          	 <p v-text="rob.name" class="color666"></p>
		          	 <p>
			          	 <small v-text="'￥' + rob.money" class="color-money"></small>
			          	 <small><del v-text="'￥' + rob.price" class="color888"></del></small>
		          	 </p>
		          </li>
		        </ul> 
		    </div>
		</div>
		<!-- 热销部分 -->	
		<div class="selling bg-white">
		    <h2 class="head">人气热销</h2>
		    <div class="selling-warp">
		        <div class="center">
		            <p>上衣</p>
		            <section>
				    	领卷直降100元
				    </section>
				    <img src="https://s2.mogucdn.com/p2/170320/16681717_7i2fl9liea42kcdi6d22kk81h7ji0_320x360.jpg_400x400.v1cAC.70.webp" alt="icon">
		        </div>
		        <div>
		        
		        </div>
		    </div>
		</div>
	</div>		
</template>
<script>
	export default {
	    data:function(){
		    return{
	            robList:[{
		              id:1,
		              name:"红豆薏米粉500g美白祛湿",
		              money:17.6,
		              price:20,
		              imgurl:"http://s17.mogucdn.com/p2/170316/upload_7he4d69k95a4579j84f8ec4b284d5_640x640.jpg_320x999.webp"
		             },{
		              id:2,
		              name:"自然堂雪域纯粹",
		              money:28.9,
		              price:40,
		              imgurl:"http://s2.mogucdn.com/p2/170316/upload_5d1c6191h5b02dc7hd4543g898j9e_640x640.jpg_320x999.webp"
		             },{
		              id:3,
		              name:"无痛撕拉一套解决黑头烦恼",
		              money:20.9,
		              price:33,
		              imgurl:"http://s2.mogucdn.com/p2/170322/upload_1b2jf98bck2l803c7jfc5ilki8jji_640x640.jpg_320x999.webp"
		             },{
		              id:4,
		              name:"宾兽飞线情侣气垫跑步鞋",
		              money:28.9,
		              price:33,
		              imgurl:"http://s2.mogucdn.com/p2/170317/upload_4gfif3cl9123b7jb5ch0j29ea8e71_640x640.jpg_320x999.webp"
		             },{
		              id:5,
		              name:"美国复古眼镜",
		              money:188,
		              price:209,
		              imgurl:"http://s2.mogucdn.com/p2/170106/upload_8547ldill4b997fc942g7df6d8418_640x640.jpg_320x999.webp"
		             },{
		              id:6,
		              name:"全身嫩白滋润保湿身体乳",
		              money:19,
		              price:33,
		              imgurl:"http://s2.mogucdn.com/p2/170320/upload_85hdj4j4dffce246dd433544ekc80_640x640.jpg_320x999.webp"
	            }],
               width:{}
		    }
	    },
        //加载即执行
        mounted:function(){
           var count = $(".rob-item li").length;
           this.width = {"width":(2*count)+0.16+"rem"};
      }
	}
</script>