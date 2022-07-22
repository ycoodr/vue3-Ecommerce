import { createWebHistory, createRouter } from 'vue-router';
import ProductsListPage from './pages/ProductsListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ShoppingCartPage from './pages/ShoppingCartPage';

const routes = [
    { path: '/', component: ProductsListPage },
    { path: '/products/:id', component: ProductDetailPage },
    { path: '/cart', component: ShoppingCartPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;