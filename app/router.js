'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/push', controller.push.index);
  router.get('/getLog', controller.log.index);
};