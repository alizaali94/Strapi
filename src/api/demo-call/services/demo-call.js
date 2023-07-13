'use strict';

/**
 * demo-call service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::demo-call.demo-call');
