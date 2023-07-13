'use strict';

/**
 * client service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client.client');
