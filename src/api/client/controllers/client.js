'use strict';

/**
 * client controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::client.client');
