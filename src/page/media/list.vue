<template>
  <div>
    <div class="flag-list bg-white">
        <ul class="flag"  v-bind:style="width">
          <li>全部</li>
          <li v-for="flag in flagList" v-text="flag.name"></li>
        </ul> 
        <div class="flag-more"></div>  
    </div>
    <div class="bg-white">
        <div class="article-item" v-for="(article,index) in articleList">
           <div><img v-bind:src="img_base+article.imgUrl" v-bind:alt="article.title"></div>
           <div>
             <p class="item-title" v-text="article.title" ></p>
             <p class="item-info">
               <span v-text="article.createTime" ></span>
               <span class="right" v-on:click="deleteData(index)">删除</span>
             </p>
           </div>
        </div>
    </div>
  </div>
</template>
<script>
	export default {
	    data:function(){
		    return{
           flagList:[{
              id:1,
              name:"社会"
             },{
              id:2,
              name:"科技"
             },{
              id:3,
              name:"信息"
             },{
              id:4,
              name:"搞笑"
             },{
              id:5,
              name:"美食"
             },{
              id:6,
              name:"旅游"
           }],
           articleList:[],
           width:{},
           img_base:this.IMG_BASEURL
		    }
	    },
      //加载即执行
      mounted:function(){
         var count = $(".flag li").length;
         this.width = {"width":(1.26*count)-1.12+"rem"};
         var _self=this;
         this.ajax({
            url:"/user/v1/query-article-list-front?o=0&requestType=app",
            data:"companyCategoryIds=''&pageNumber=0",
            needToken:false,
            needRemind:false,
            callback:function(data){
               if(!data.code){
                  _self.articleList = data.data;
               }
            }
         });
      },
      methods:{
        deleteData:function(index){
          this.articleList.splice(index,1);
        }
      }
	}
</script>