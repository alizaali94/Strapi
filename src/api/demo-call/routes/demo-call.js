'use strict';

/**
 * demo-call router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::demo-call.demo-call');
