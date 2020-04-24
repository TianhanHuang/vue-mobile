import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;

// 视图切换动画逻辑
const history = window.sessionStorage;
// history.clear()
history.removeItem('count')
history.removeItem('/')
let historyCount = history.getItem('count') * 1 || 0;
history.setItem('/', 0);

router.beforeEach((to, from, next) => {
  // 解决登录后，token没有更新
  // Vue.prototype.$http.defaults.headers.token = store.getters.getUserInfo
  
  /* 路由发生变化修改页面title */
	if (to.meta.title) {
		document.title = to.meta.title
  }
	// loading状态
  store.commit('updateLoadingStatus', {isLoading: true})
  next()
})

router.afterEach(function (to) {
	store.commit('updateLoadingStatus', {isLoading: false})
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
