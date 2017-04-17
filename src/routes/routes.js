//引用模板
import list from '../page/media/list'
import articleDetail from '../page/media/detail'
import content from '../page/shopping-car/content'
import home from '../page/home/index'
import mine from '../page/user/mine'
import collection from '../page/user/collection'
import login from '../page/user/login'
import collectionDetail from '../page/user/children/detail'
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
    path: '/articleDetail/:id/:name', //文章详情页
    component: articleDetail,
    name: '文章详情'
},{
  path:'/content',
  component:content,
  name: '购物车'
},{
  path:'/mine',
  component:mine,
  name: '我的'
},{
  path:'/collection',
  component:collection,
  name: '我的收藏',
  children:[{
    path:'detail',
    component:collectionDetail,
    name: '我的收藏详情',
  }]
},{
  path:'/login',
  component:login,
  name: '登录'
},{ 
  path: "*", 
  component:home,//路径不存在
  name: '首页'
 }]