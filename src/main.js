/**
 * author: 王荣华
 * email: 18823547785@163.com
 */

import Vue from 'vue'
import App from './App.vue'
//路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from './router.js'

//按需组件
import { Tabbar, TabbarItem, Search, Col, Row, Icon, Swipe, SwipeItem, Grid, GridItem, Tab, Tabs, Divider, Button } from 'vant';
import 'vant/lib/index.css'
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Search);
Vue.use(Col);
Vue.use(Row);
Vue.use(Icon);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Divider);
Vue.use(Button);

// 过滤器
Vue.filter('distance', val => val >= 1000 ? `${val / 1000}km` : `${val}km`);
Vue.filter('phone', item => item.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2'));


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
