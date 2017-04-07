<template>
  <div>
	    <header class="bg-white mine-header">
	  	  <img v-bind:src="headImg" alt="头像" class="left">
	  	  <div class="left">
		  	  <span>赵丽颖</span>
		  	  <p>我的收货地址</p>
	  	  </div>
	  	  <img v-bind:src="arrow" alt="头像" class="right arrow">
	    </header>
	    <div class="order bg-white">
		    <div class="orderT clearfix">
		  	    <img v-bind:src="orderIcon" alt="头像" class="left">
			  	<span class="left">我的订单</span>
		  	    <img v-bind:src="arrow" alt="头像" class="right arrow">
		    </div>
		    <div class="borderT order-tab">
		    	<div v-for="tab in orderTab" class="center">
		    	    <img v-bind:src="tab.img" alt="tab.name">
		    	    <div  v-if="tab.number>0" class="point-icon" v-text="tab.number"></div>
		    		<section v-text="tab.name"></section>
		    	</div>	
		    </div>
	    </div>
	    <div class="app-download">
	    	<img v-bind:src="downloadImg" alt="下载APP">
	    </div>
	    <div class="mine-list">
	    	<router-link v-bind:to="mine.to" v-for="mine in mineList.first">
		    	<div class="orderT clearfix" >
			  	    <img v-bind:src="mine.img" alt="图标" class="left">
			  	    <div class="right">
					  	<span class="left" v-text="mine.name"></span>
				  	    <img v-bind:src="arrow" alt="箭头" class="right arrow">
			  	    </div>
			    </div>
		    </router-link>
	    </div>
	    <div class="mine-list">
	    	<router-link v-bind:to="mine.to" v-for="mine in mineList.second">
		    	<div class="orderT clearfix">
			  	    <img v-bind:src="mine.img" alt="图标" class="left">
			  	    <div class="right">
					  	<span class="left" v-text="mine.name"></span>
				  	    <img v-bind:src="arrow" alt="箭头" class="right arrow">
			  	    </div>
			    </div>
		    </router-link>
	    </div>
	    <div class="button-reb">退出登录</div>
	    <foot v-on:child-tell-me-something='listenToMyBoy' love="love you child!"></foot>
  </div>
</template>
<script>
    import foot from './../../components/footer'
    import arrow from './../../image/wallet_arrow.png'
	export default{
		data(){
		    return{
		    	headImg:"http://img3.yxlady.com/yl/UploadFiles_5361/20151215/20151215112238755.jpg",
		    	arrow:arrow,
		    	orderIcon:"https://s10.mogucdn.com/p1/160727/upload_ie4wenzume4tsmjqmezdambqgqyde_56x56.png",
		    	downloadImg:"https://s10.mogucdn.com/p2/170217/79944927_03dfe3a4b2fg9kd5849093d56ib14_750x130.png",
		    	orderTab:[{
		    		img:"https://s10.mogucdn.com/p1/160829/idid_ifqwcmddgrswkzdbmezdambqgyyde_38x33.png",
		    		name:"待付款",
		    		number:0
		    	},{
		    		img:"https://s10.mogucdn.com/p1/160829/idid_ie4dcoddmnswkzdbmezdambqgiyde_38x36.png",
		    		name:"待收货",
		    		number:1
		    	},{
		    		img:"https://s10.mogucdn.com/p1/160830/idid_ie4gimztheygcmdcmezdambqgiyde_38x36.png",
		    		name:"待评价",
		    		number:3
		    	},{
		    		img:"https://s10.mogucdn.com/p1/160829/idid_ie3wezbvhbtgkzdbmezdambqgayde_38x35.png",
		    		name:"售后"
		    	}],
		    	mineList:{
		    		first:[{
			    		img:"https://s10.mogucdn.com/p2/161130/159_0ihj4c5a23kabh84ka8dfhl552dla_56x56.png",
			    		name:"我的购物车",
			    		to:"/collection"
			    	},{
			    		img:"https://s10.mogucdn.com/p2/160822/159_00ijba9e46e13970ec7kakll8a06a_56x56.png",
			    		name:"我的优惠券",
			    		to:"/collection"
			    	},{
			    		img:"https://s10.mogucdn.com/p1/160727/upload_ifqtsndeg43gkmrqmezdambqgyyde_56x56.png",
			    		name:"我收藏的商品",
			    		to:"/collection"
			    	},{
			    		img:"https://s10.mogucdn.com/p1/160727/upload_ie4wmy3gmq3wkmrqmezdambqgqyde_56x56.png",
			    		name:"我收藏的店铺",
			    		to:"/collection"
			    	}],
			    	second:[{
			    		img:"https:////s10.mogucdn.com/p1/160727/upload_ie4tgm3ege4wkmrqmezdambqgqyde_56x56.png",
			    		name:"消息通知",
			    		to:"/collection"
			    	},{
			    		img:"https://s10.mogucdn.com/p1/160307/idid_ifrtqmdfgztggnzsg4zdambqhayde_84x84.png",
			    		name:"客服",
			    		to:"/collection"
			    	},{
			    		img:"https://s10.mogucdn.com/p1/160727/upload_ifrdonbugezgkmrqmezdambqmeyde_56x56.png",
			    		name:"意见反馈",
			    		to:"/collection"
			    	}]
		        }
		    }
	    },
	    components:{foot},
        //加载即执行
        mounted:function(){
        },
        methods:{
        	listenToMyBoy (msg) {
        	  //得到foot传过来的数据
		      console.log(msg) 
		    }
        }
	}
</script>