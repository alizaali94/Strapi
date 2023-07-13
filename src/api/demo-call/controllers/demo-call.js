// @ts-nocheck
'use strict';

/**
 * demo-call controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::demo-call.demo-call', ((strapi) => ({
  async CustomSettings(ctx){
    try{
      ctx.body = ctx.request.body.data.first_name;
    }
    catch(e){
      ctx.body = e; // handle error here and return a response to the
    }
  }
})));
