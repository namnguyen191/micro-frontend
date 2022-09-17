import('./bootstrap').then(({ mount }) => {
  console.log('Nam data is: running products logic');

  if (process.env['NODE_ENV'] === 'development') {
    const devRoot = document.querySelector('#dev-products');

    if (devRoot) {
      mount(devRoot);
    }
  }
});

export {};
