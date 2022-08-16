import Home from '~/pages/Home';
import Product from '~/pages/Product';
import Promotion from '~/pages/Promotion';
import Tracking from '~/pages/Tracking';
import Voucher from '~/pages/Voucher';
import { ProductLayout } from '~/layout';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/promotion', component: Promotion },
    { path: '/voucher', component: Voucher },
    { path: '/product', component: Product, layout: ProductLayout },
    { path: '/tracking', component: Tracking },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
