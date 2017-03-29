//引用模板
import list from '../src/page/media/list.vue'
import content from '../src/page/shopping-car/content.vue'
import home from '../src/page/home/index.vue'
import mine from '../src/page/user/mine.vue'
//配置路由
export default[
{
  path:'/',
  component:home, 
  name: '首页'
},{
  path:'/list',
  component:list,
  name: '文章'
},{
  path:'/content',
  component:content,
  name: '购物车'
},{
  path:'/mine',
  component:mine,
  name: '我的'
}]