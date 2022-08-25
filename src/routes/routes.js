import Home from '~/pages/Home';
import Promotion from '~/pages/Promotion';
import Tracking from '~/pages/Tracking';
import Voucher from '~/pages/Voucher';
import { ProductLayout } from '~/layout';
import Pizza from '~/pages/Product/tabs/Pizza';
import Pasta from '~/pages/Product/tabs/Pasta';
import Dessert from '~/pages/Product/tabs/Dessert';
import Drinks from '~/pages/Product/tabs/Drinks';
import Sides from '~/pages/Product/tabs/Sides';
import Cart from '~/pages/Cart';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/promotion', component: Promotion },
    { path: '/voucher', component: Voucher },
    { path: '/product', component: Pizza, layout: ProductLayout },
    { path: '/product/pizza', component: Pizza, layout: ProductLayout },
    { path: '/product/pizza/:id', component: Pizza, layout: ProductLayout },
    { path: '/product/pasta', component: Pasta, layout: ProductLayout },
    { path: '/product/dessert', component: Dessert, layout: ProductLayout },
    { path: '/product/drinks', component: Drinks, layout: ProductLayout },
    { path: '/product/sides', component: Sides, layout: ProductLayout },
    { path: '/cart', component: Cart },

    { path: '/tracking', component: Tracking },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
