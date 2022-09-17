import { commerce } from 'faker';

export const mount = (el: Element): void => {
  let products = '';

  for (let i = 0; i < 10; i++) {
    const name = commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};
