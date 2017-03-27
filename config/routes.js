//引用模板
import list from '../src/page/media/list.vue'
import content from '../src/page/shopping-car/content.vue'
import home from '../src/page/home/index.vue'
import mine from '../src/page/user/mine.vue'
//配置路由
export default[
{
  path:'/',
  component:home
},{
  path:'/list',
  component:list
},{
  path:'/content',
  component:content
},{
  path:'/mine',
  component:mine
}]