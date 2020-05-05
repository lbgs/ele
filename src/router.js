import VueRoute from 'vue-router';
import index from './components/index/index.vue'
import order from './components/order/index.vue'
import my from './components/my/index.vue'
const router = new VueRoute({
    routes: [
        { path: '/', redirect: "/index" },
        { path: '/index', component: index },
        { path: '/order', component: order },
        { path: '/my', component: my },
    ]
});
export default router;