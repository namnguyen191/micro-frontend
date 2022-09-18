import { datatype } from 'faker';

export const mount = (el: Element): void => {
  const cartText = `You have ${datatype.number(10)} items in your cart`;

  el.innerHTML = cartText;
};
