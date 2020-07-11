'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index); // 主页
  router.get('/get', controller.home.get); // get 获取url拼接信息
  router.post('/put', controller.home.put); // post requestBody数据
  router.get('/getdata', controller.test.getDataFromDatabase);
  router.post('/putdata', controller.test.putDataIntoDatabase);
};
