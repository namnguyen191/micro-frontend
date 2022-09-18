import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMounts } from 'cart/CartShow';

const productsRoot = document.querySelector('#products-root');
const cartRoot = document.querySelector('#cart-root');

if (productsRoot) productsMount(productsRoot);

if (cartRoot) cartMounts(cartRoot);

export {};
