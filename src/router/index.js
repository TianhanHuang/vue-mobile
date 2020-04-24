import Vue from 'vue'
import Router from 'vue-router'
import router from "../router";
import store from '../store'
// import { routerMode } from '../config/env'

Vue.use(Router)

export default new Router({
	mode: 'hash',
	routes: [
		{
			path: '/agreement',
			name: 'agreement',
			meta: {
				title: '入职履历填写'
			},
			component: (resovle) => {
				require(['../views/agreement.vue'], resovle)
			}
		},
		{
			path: '/test',
			name: 'agreement',
			meta: {
				title: '入职履历填写'
			},
			component: (resovle) => {
				require(['../views/test.vue'], resovle)
			}
		}
	],
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
})

// 记录页面跳转历史，以此判断页面左滑跳转还是右滑跳转
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

// 全局路由钩子函数 对全局有效
router.beforeEach((to, from, next) => {
	// 当跳转时携带指定方向参数则优先使用指定参数
	if (to.params.direction) {
		store.commit('UPDATE_DIRECTION', to.params.direction)
	} else {
		const toIndex = history.getItem(to.path)
		const fromIndex = history.getItem(from.path)
		// 判断并记录跳转页面是否访问过，以此判断跳转过渡方式
		if (toIndex) {
			alert(toIndex)
			if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
				store.commit('UPDATE_DIRECTION', 'forward')
			} else {
				store.commit('UPDATE_DIRECTION', 'back')
			}
		} else {
			++historyCount
			history.setItem('count', historyCount)
			to.path !== '/' && history.setItem(to.path, historyCount)
			store.commit('UPDATE_DIRECTION', 'forward')
		}
	}
	next()
})
