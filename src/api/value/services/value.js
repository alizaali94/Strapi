'use strict';

/**
 * value service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::value.value');
