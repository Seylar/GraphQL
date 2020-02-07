import products    from './query/products';
import productById from './query/productById';
import cartById    from './query/cartById';
import promoById   from './query/promoById';

import image from './product/image';
import stock from './product/stock';

import getCartProductsByCartId from './cart/getCartProductsByCartId';
import getCartPromosByCartId   from './cart/getCartPromosByCartId';
import getCartTotalByCartId    from './cart/getCartTotalByCartId';

export default {
    Query: {
        products,
        productById,
        cartById,
        promoById
    },
    Product: {
        image,
        stock
    },
    Cart: {
        cartproducts: getCartProductsByCartId,
        cartpromos: getCartPromosByCartId,
        total: getCartTotalByCartId
    }
}