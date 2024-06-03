import Vue from 'vue'
// import Router from 'uni-simple-router'
import Router from 'vue-router'
Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: () => import('@/pages/index/index.vue')
    },
    {
      path: '/ground',
      name: 'Ground',
      component: () => import('@/pages/market/ground.vue')
    },
	{
	  path: '/redhot',
	  name: 'Redhot',
	  component: () => import('@/pages/redhot/redhotview.vue')
	},
	{
	  path: '/mytask',
	  name: 'mytask',
	  component: () => import('@/pages/myTask/mytask/mytask.vue')
	},
	{
	  path: '/notice',
	  name: 'Notice',
	  component: () => import('@/pages/notice/noticeindex.vue')
	},
	{
	  path: '/listshow',
	  name: 'Listshow',
	  component: () => import('@/pages/notice/listshow.vue')
	},
	
    // 添加其他页面路由...
  ]
})

export default router