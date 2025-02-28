module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/env',
        handler: 'global.env',
        config: {
          auth: false,
        },
      },
    ],
  };