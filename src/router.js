import VueRoute from 'vue-router';
import index from '@/components/index.vue';
import order from '@/components/order.vue';
import my from '@/components/my.vue';
import shop from '@/components/shop.vue';
import meal from '@/components/meal.vue';
import search from '@/components/search.vue';
const router = new VueRoute({
    routes: [
        { path: '/', redirect: "/index" },
        { path: '/index', component: index },
        { path: '/order', component: order },
        { path: '/my', component: my },
        { path: "/shop", component: shop },
        { path: "/meal", component: meal },
        { path: "/search", component: search },
    ]
});
export default router;