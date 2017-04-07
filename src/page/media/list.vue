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
              <router-link v-bind:to="'/articleDetail/' + article.articleId+'/'+article.categoryName">
               <div><img v-bind:src="img" v-bind:alt="article.title"></div>
               <div>
                 <p class="item-title" v-text="article.title" ></p>
                 <p class="item-info">
                   <span v-text="article.createTime" ></span>
                   <span class="right" v-on:click="deleteData(index)">删除</span>
                 </p>
               </div>
           </router-link>
        </div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
  import foot from './../../components/footer.vue'
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
           img:"http://wx1.sinaimg.cn/mw690/4b0c804agy1fbz8z3b39lj21ww1wwu0x.jpg"
		    }
	    },
      components:{foot},
      //加载即执行
      mounted:function(){
         var count = $(".flag li").length;
         this.width = {"width":(1.26*count)-1.12+"rem"};
         var data = {"code":0,"msg":"成功","data":[{"articleId":36102,"title":"触目惊心！牛背山光鲜的背后竟然是这样！","categoryId":null,"categoryName":"兴趣","range":5,"createUser":1173,"createUserName":"阿布","createTime":1491529713000,"state":2,"deleteUser":null,"deleteUserName":null,"isDelete":null,"orgId":0,"deleteReason":null,"deleteTime":null,"content":null,"shareCount":null,"browseCount":18,"supId":null,"supName":null,"isGrab":true,"likeCount":null,"cookiename":null,"isEditor":null,"imgUrl":"/data/images/0/article/20170407/0310502d076a456288680ffb2987798b.jpeg","html_Url":"/data/file/0/20170407/fed054b6c00f4d779401c7d7e775079b.html","updateUser":null,"updateTime":null,"companyCategoryId":9,"companyCategoryName":null,"companySupId":null,"isAllowVisitor":null,"isRecommend":null,"isOpenComment":0,"evaluationCount":null,"realName":null,"phone":null,"email":null,"isThumbsupId":null,"rewardCount":null,"topAdvertId":null,"footAdvertId":null,"modifyAdvertisement":0,"isOpenAreward":0,"deptList":null,"userList":null,"deptIds":null,"userIds":null,"advertBrowse":null},{"articleId":36091,"title":"户口还在农村的速看，这下要发财啦！","categoryId":null,"categoryName":"金融","range":5,"createUser":25,"createUserName":"张晓雨","createTime":1491523506000,"state":2,"deleteUser":null,"deleteUserName":null,"isDelete":null,"orgId":0,"deleteReason":null,"deleteTime":null,"content":null,"shareCount":null,"browseCount":245,"supId":null,"supName":null,"isGrab":true,"likeCount":null,"cookiename":null,"isEditor":null,"imgUrl":"/data/images/2/article/20170407/7392e647b1d14d0abb42389726f9f15f.jpeg","html_Url":"/data/file/2/20170407/7279af5bbeec41c88b418ccb3a2625a4.html","updateUser":null,"updateTime":null,"companyCategoryId":3,"companyCategoryName":null,"companySupId":null,"isAllowVisitor":null,"isRecommend":null,"isOpenComment":0,"evaluationCount":null,"realName":null,"phone":null,"email":null,"isThumbsupId":null,"rewardCount":null,"topAdvertId":null,"footAdvertId":null,"modifyAdvertisement":0,"isOpenAreward":0,"deptList":null,"userList":null,"deptIds":null,"userIds":null,"advertBrowse":null},{"articleId":36084,"title":"定了！到2020年普及高中阶段教育，国家准备这么干","categoryId":null,"categoryName":"教育","range":5,"createUser":25,"createUserName":"张晓雨","createTime":1491522907000,"state":2,"deleteUser":null,"deleteUserName":null,"isDelete":null,"orgId":0,"deleteReason":null,"deleteTime":null,"content":null,"shareCount":null,"browseCount":251,"supId":null,"supName":null,"isGrab":true,"likeCount":null,"cookiename":null,"isEditor":null,"imgUrl":"/data/images/2/article/20170407/d663a7327a8d4c219104ab04b1680250.jpeg","html_Url":"/data/file/2/20170407/9e6cc4f3685b4b7fad0dab28addb7bf6.html","updateUser":null,"updateTime":null,"companyCategoryId":6,"companyCategoryName":null,"companySupId":null,"isAllowVisitor":null,"isRecommend":null,"isOpenComment":0,"evaluationCount":null,"realName":null,"phone":null,"email":null,"isThumbsupId":null,"rewardCount":null,"topAdvertId":null,"footAdvertId":null,"modifyAdvertisement":0,"isOpenAreward":0,"deptList":null,"userList":null,"deptIds":null,"userIds":null,"advertBrowse":null},{"articleId":36079,"title":"湖畔大学的课外课——破碎才是成长的关隘","categoryId":null,"categoryName":"热点","range":5,"createUser":3,"createUserName":"李吉兴","createTime":1491521080000,"state":2,"deleteUser":null,"deleteUserName":null,"isDelete":null,"orgId":0,"deleteReason":null,"deleteTime":null,"content":null,"shareCount":null,"browseCount":79,"supId":null,"supName":null,"isGrab":true,"likeCount":null,"cookiename":null,"isEditor":null,"imgUrl":"/data/images/2/article/20170407/81ab194ce37f4dfea84cc8f773fe8611.jpeg","html_Url":"/data/file/2/20170407/cb7971aeb48f43119c0befa261a603aa.html","updateUser":null,"updateTime":null,"companyCategoryId":1,"companyCategoryName":null,"companySupId":null,"isAllowVisitor":null,"isRecommend":null,"isOpenComment":0,"evaluationCount":null,"realName":null,"phone":null,"email":null,"isThumbsupId":null,"rewardCount":null,"topAdvertId":null,"footAdvertId":null,"modifyAdvertisement":0,"isOpenAreward":0,"deptList":null,"userList":null,"deptIds":null,"userIds":null,"advertBrowse":null},{"articleId":36071,"title":"春天带孩子踏青，教他认识一下路边常见植物吧，太全了！","categoryId":null,"categoryName":"兴趣","range":5,"createUser":2316742,"createUserName":"武伦坤","createTime":1491517875000,"state":2,"deleteUser":null,"deleteUserName":null,"isDelete":null,"orgId":0,"deleteReason":null,"deleteTime":null,"content":null,"shareCount":null,"browseCount":20,"supId":null,"supName":null,"isGrab":true,"likeCount":null,"cookiename":null,"isEditor":null,"imgUrl":"/data/images/0/article/20170407/4a4f4bd7f9954b1ba1033e02280c9746.jpeg","html_Url":"/data/file/0/20170407/0d6756921bb24434bb0d4df51b9e9f53.html","updateUser":null,"updateTime":null,"companyCategoryId":9,"companyCategoryName":null,"companySupId":null,"isAllowVisitor":null,"isRecommend":null,"isOpenComment":0,"evaluationCount":null,"realName":null,"phone":null,"email":null,"isThumbsupId":null,"rewardCount":null,"topAdvertId":null,"footAdvertId":null,"modifyAdvertisement":0,"isOpenAreward":0,"deptList":null,"userList":null,"deptIds":null,"userIds":null,"advertBrowse":null},{"articleId":36068,"title":"是什么限制了你的能力和收入？","categoryId":null,"categoryName":"创业","range":5,"createUser":6138,"createUserName":"郑佳星","createTime":1491516741000,"state":2,"deleteUser":null,"deleteUserName":null,"isDelete":null,"orgId":0,"deleteReason":null,"deleteTime":null,"content":null,"shareCount":null,"browseCount":129,"supId":null,"supName":null,"isGrab":true,"likeCount":null,"cookiename":null,"isEditor":null,"imgUrl":"/data/images/0/article/20170407/f93406d480db42a4ab99b19d38d30483.jpeg","html_Url":"/data/file/0/20170407/8d2945658fe94b89bc080523fcaaae92.html","updateUser":null,"updateTime":null,"companyCategoryId":4,"companyCategoryName":null,"companySupId":null,"isAllowVisitor":null,"isRecommend":null,"isOpenComment":0,"evaluationCount":null,"realName":null,"phone":null,"email":null,"isThumbsupId":null,"rewardCount":null,"topAdvertId":null,"footAdvertId":null,"modifyAdvertisement":0,"isOpenAreward":0,"deptList":null,"userList":null,"deptIds":null,"userIds":null,"advertBrowse":null},{"articleId":36059,"title":"泸县学生死亡案，三大央媒怎么看？","categoryId":null,"categoryName":"热点","range":5,"createUser":884,"createUserName":"房清贵","createTime":1491489897000,"state":2,"deleteUser":null,"deleteUserName":null,"isDelete":null,"orgId":0,"deleteReason":null,"deleteTime":null,"content":null,"shareCount":null,"browseCount":920,"supId":null,"supName":null,"isGrab":true,"likeCount":null,"cookiename":null,"isEditor":null,"imgUrl":"/data/images/2/article/20170406/a4e83b66416f4cdea3319548eb5894fa.jpeg","html_Url":"/data/file/2/20170406/f997bcc2d6434fd78fd27c98b95b9a1f.html","updateUser":null,"updateTime":null,"companyCategoryId":1,"companyCategoryName":null,"companySupId":null,"isAllowVisitor":null,"isRecommend":null,"isOpenComment":0,"evaluationCount":null,"realName":null,"phone":null,"email":null,"isThumbsupId":null,"rewardCount":null,"topAdvertId":null,"footAdvertId":null,"modifyAdvertisement":0,"isOpenAreward":0,"deptList":null,"userList":null,"deptIds":null,"userIds":null,"advertBrowse":null},{"articleId":36050,"title":"理 解（说的真好）","categoryId":null,"categoryName":"兴趣","range":5,"createUser":45,"createUserName":"高秋英","createTime":1491488238000,"state":2,"deleteUser":null,"deleteUserName":null,"isDelete":null,"orgId":0,"deleteReason":null,"deleteTime":null,"content":null,"shareCount":null,"browseCount":1356,"supId":null,"supName":null,"isGrab":true,"likeCount":null,"cookiename":null,"isEditor":null,"imgUrl":"/data/images/2/article/20170406/4025a3a6eb6f49af9f4b89040080ffd1.png","html_Url":"/data/file/2/20170406/691490eca8124b4581ce7db6f6a00b16.html","updateUser":null,"updateTime":null,"companyCategoryId":9,"companyCategoryName":null,"companySupId":null,"isAllowVisitor":null,"isRecommend":null,"isOpenComment":0,"evaluationCount":null,"realName":null,"phone":null,"email":null,"isThumbsupId":null,"rewardCount":null,"topAdvertId":null,"footAdvertId":null,"modifyAdvertisement":0,"isOpenAreward":0,"deptList":null,"userList":null,"deptIds":null,"userIds":null,"advertBrowse":null},{"articleId":36039,"title":"法官表示，我还是第一次见到这么嚣张的被告","categoryId":null,"categoryName":"热点","range":5,"createUser":2316781,"createUserName":"武礼福","createTime":1491487423000,"state":2,"deleteUser":null,"deleteUserName":null,"isDelete":null,"orgId":0,"deleteReason":null,"deleteTime":null,"content":null,"shareCount":null,"browseCount":5755,"supId":null,"supName":null,"isGrab":true,"likeCount":null,"cookiename":null,"isEditor":null,"imgUrl":"/data/images/0/matter/20170407093136/b376f2ec89b94e7782cbbb317dea3407.png","html_Url":"/data/file/0/20170406/921013cce9924ee7b17d0ca4b038185f.html","updateUser":null,"updateTime":null,"companyCategoryId":1,"companyCategoryName":null,"companySupId":null,"isAllowVisitor":null,"isRecommend":null,"isOpenComment":0,"evaluationCount":null,"realName":null,"phone":null,"email":null,"isThumbsupId":null,"rewardCount":null,"topAdvertId":null,"footAdvertId":null,"modifyAdvertisement":0,"isOpenAreward":0,"deptList":null,"userList":null,"deptIds":null,"userIds":null,"advertBrowse":null},{"articleId":35984,"title":"这一幕火了！人们都在找这个扫墓途中的“最美女孩”","categoryId":null,"categoryName":"名人","range":5,"createUser":25,"createUserName":"张晓雨","createTime":1491474777000,"state":2,"deleteUser":null,"deleteUserName":null,"isDelete":null,"orgId":0,"deleteReason":null,"deleteTime":null,"content":null,"shareCount":null,"browseCount":16,"supId":null,"supName":null,"isGrab":true,"likeCount":null,"cookiename":null,"isEditor":null,"imgUrl":"/data/images/2/article/20170406/52d784fff7e743f1966afb0c8c4ba03e.jpeg","html_Url":"/data/file/2/20170406/d1fa72859d6b4064ba2091d98ceb6d3f.html","updateUser":null,"updateTime":null,"companyCategoryId":5,"companyCategoryName":null,"companySupId":null,"isAllowVisitor":null,"isRecommend":null,"isOpenComment":0,"evaluationCount":null,"realName":null,"phone":null,"email":null,"isThumbsupId":null,"rewardCount":null,"topAdvertId":null,"footAdvertId":null,"modifyAdvertisement":0,"isOpenAreward":0,"deptList":null,"userList":null,"deptIds":null,"userIds":null,"advertBrowse":null}]}
           this.articleList = data.data;
           /*this.ajax({
              url:"/user/v1/query-article-list-front?o=0&requestType=app",
              data:"companyCategoryIds=''&pageNumber=0",
              needToken:false,
              needRemind:false,
              callback:function(data){
                 if(!data.code){
                    _self.articleList = data.data;
                 }
              }
           });*/
      },
      methods:{
        deleteData:function(index){
          this.articleList.splice(index,1);
        }
      }
	}
</script>