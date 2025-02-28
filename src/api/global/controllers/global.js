'use strict';

/**
 *  global controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::global.global', ({ strapi }) =>  ({
    async env(ctx) {
        ctx.send(process.env);
      },
  }));
