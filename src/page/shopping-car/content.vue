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
                <div class="goods" v-for="g in shop.cartItemGroup">
                     <input type="checkbox" class="shop-checkbox">
                     <img v-bind:src="g.sku.imgUrl" alt="shop.cartItemGroup[0].sku.title">
                     <div class="goods-right">
                        <p class="good-title" v-text="g.sku.title"></p>
                        <p class="good-desc" v-text="g.sku.skuAttributes"></p>
                        <p class="good-price">
                            <span>{{g.sku.nowprice|price}}</span>
                            <span class="oldprice">{{g.sku.price|price}}</span>
                            <span class="number" v-text="'×' + g.number"></span>
                        </p>
                     </div> 
                </div>
            </div>
            <div class="settlement">
               <div class="selectAll">
                  <input type="checkbox" class="shop-checkbox" id="for-all" name="for-all">
                  <label for="for-all">全选（0）</label>
                  <span class="color-money">￥0.00</span>
                  <div class="settle-btn">去结算</div>
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
        },
        filters: {
            price: function (value) {
                return "￥"+(value/100);
            }
        }
    }
</script>