<template>
    <div>
    	  <div class="car-header">
           <p>购物车({{goodsLength}})</p> 
           <div class="header-right">
             <span>编辑</span>
             <span class="new-icon"></span>
           </div>
        </div> 
        <div class="empty" v-if="!goodsLength">
            <div class="empty-text">购物车还是空的哦~</div>
            <router-link to="/list">
              <div class="empty-btn">
                  去逛逛
              </div>
            </router-link>
        </div>
        <div v-if="goodsLength">
            <div class="shop bg-white" v-for="shop in goodsList">
                <h3 class="shopInfo shop-head">
                    <input type="checkbox" class="shop-checkbox">
                    <a href="" v-text="shop.shopInfo.shopName"></a>
                    <span class="right">领券</span>
                </h3>
                <div class="goods">
                     <input type="checkbox" class="shop-checkbox">
                     <img v-bind:src="shop.cartItemGroup[0].sku.imgUrl" alt="shop.cartItemGroup[0].sku.title">
                </div>
            </div>
        </div>    
    	  <foot></foot>
    </div>
</template>
<script>
  import foot from './../../components/footer.vue'
	export default{
        data:function(){
        	return {
              goodsLength:0,
              goodsList:[]
        	}
        },
        components:{foot},
        mounted(){
          this.$nextTick(function(){
              this.getShopList();
          })
        },
        methods:{
          getShopList:function(){
            let _this = this;
            //vue-resource请求
            this.$http.get("./../../../static/data/shopList.json").then(response=>{
              //SE6箭头函数表示当前this作用域与外部一致
              var data  = eval(response.bodyText);
              this.goodsList = data;
              var length = data.length;
              this.goodsLength = length;
            }, function(result){
              // 响应错误回调
            });
          }
        }
    }
</script>