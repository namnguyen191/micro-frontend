import { mount } from 'products/ProductsIndex';
import 'cart/CartShow';

const productsRoot = document.querySelector('#products-root');

if (productsRoot) mount(productsRoot);

export {};
