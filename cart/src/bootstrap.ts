import { datatype } from 'faker';

const cartText = `You have ${datatype.number(10)} items in your cart`;

const cartElement = document.getElementById('dev-cart');

if (!cartElement) throw Error('cannot find cart element');

cartElement.innerHTML = cartText;
