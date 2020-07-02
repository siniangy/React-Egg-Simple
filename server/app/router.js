'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/get', controller.home.get);
  router.post('/put', controller.home.put);
  router.get('/getdata', controller.test.getName);
};
