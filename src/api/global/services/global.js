'use strict';

/**
 * global service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global.global', ({ strapi }) =>  ({
    async env(ctx) {
        ctx.send(process.env);
      },
  }));
