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
import {
  Tabbar, TabbarItem, Search, Col, Row, Icon, Swipe, SwipeItem,
  Grid, GridItem, Tab, Tabs, Divider, Button, Sidebar, SidebarItem, Card, TreeSelect,
  Sticky, Tag, Rate, Checkbox, CheckboxGroup, Lazyload, Skeleton 
} from 'vant';
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
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Card);
Vue.use(TreeSelect);
Vue.use(Sticky);
Vue.use(Tag);
Vue.use(Rate);
Vue.use(CheckboxGroup);
Vue.use(Checkbox);
Vue.use(Lazyload);
Vue.use(Skeleton);


// 过滤器
Vue.filter('distance', val => val >= 1000 ? `${val / 1000}km` : `${val}km`);
Vue.filter('phone', item => item.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2'));


Vue.config.productionTip = false

// vuex状态管理
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    scrollTop: 0
  },
  getters: {
    onScroll(state) {
      // 滚动监听器
      state.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      // state.scrollTop = state.scrollTop;
    }
  }
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')