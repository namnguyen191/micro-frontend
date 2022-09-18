import('./bootstrap').then(({ mount }) => {
  const cartElement = document.getElementById('dev-cart');

  if (!cartElement) throw Error('cannot find cart element');

  mount(cartElement);
});

export {};
