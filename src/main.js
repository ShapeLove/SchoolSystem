import Vue from 'vue';
import iView from 'iview';
// 这个东西
import VueRouter from 'vue-router';
import Routers from './router';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import axios from 'axios';
import vueAxios from 'vue-axios';

axios.defaults.withCredentials=true;
axios.defaults.baseURL = 'http://123.206.28.158:8888/school-system'
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if (response.data == "notlogin") {
        router.replace({path: '/login'})
    }else if (response.data.success == false) {
        iView.Message.error(response.data.message);
    }
    return response;
}, function (error) {
    // 对响应错误做点什么
    iView.Message.error("对方不想理你，并向你抛出了个异常");
    return Promise.reject(error);
});
// 在这儿引入的 之前咱们用location跳转 用了这个就用路由跳转 他跟axios一样 有一些api的方法 跟location很像
Vue.use(VueRouter);
Vue.use(iView);
Vue.use(vueAxios,axios)
// 路由配置
const RouterConfig = {
    // mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
