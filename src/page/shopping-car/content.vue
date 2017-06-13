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
        <div  class="goods-data" v-if="goodsLength">
            <div class="shop bg-white" v-for="shop in goodsList">
                <h3 class="shopInfo shop-head">
                    <input type="checkbox" class ="shop-checkbox" :class='{"shop-checkbox-checked":shop.check}' @click="shopChecked(shop)">
                    <a href="" v-text="shop.shopInfo.shopName"></a>
                    <span class="right">领券</span>
                </h3>
                <div class="goods" v-for="g in shop.cartItemGroup">
                     <input type="checkbox" class="shop-checkbox" :class='{"shop-checkbox-checked":g.check}' @click="goodChecked(g)">
                     <img v-bind:src="g.sku.imgUrl" alt="g.sku.title">
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
                  <input type="checkbox" class="shop-checkbox" id="for-all" name="for-all" :class='{"shop-checkbox-checked":checkAll}' @click="allChecked">
                  <label for="for-all">全选（{{checkLength}}）</label>
                  <span class="color-money">{{goodsMoney|price}}</span>
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
              goodsMoney:0.00,
              checkLength:0,
              checkAll:false,
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
          },
          //选中函数-公用
          checked:function(item){
            //判断是否有选中的属性
            if(typeof item.check == "undefined"){
                this.$set(item,"check",true);
            }else{
                item.check = !item.check;
            }
          },
          //店铺选中
          shopChecked:function(shop){
            this.checked(shop);
            //店铺选中时把店铺下面的商品都选中
            shop.cartItemGroup.forEach((item,index)=>{
               this.checked(item);
            })
          },
          //商品选中并计算价格
          goodChecked:function(good){
            this.checked(good);
            this.goodsMoney += good.sku.nowprice;
          },
          //全选/取消全选
          allChecked:function(){
            this.checkAll = !this.checkAll;
            if(this.checkAll){
                this.checkLength = this.goodsLength;
            }else{
                this.checkLength = 0;
            }
            this.goodsList.forEach((item,index)=>{
                if(typeof item.check == "undefined"){
                    this.$set(item,"check",this.checkAll);
                }else{
                    item.check = this.checkAll;
                }
            })
          }
        },
        //价格过滤
        filters: {
            price: function (value) {
                return "￥"+(value/100);
            }
        }
    }
</script>