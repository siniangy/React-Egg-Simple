'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {

  async getDataFromDatabase() {
    const { ctx } = this;
    const res = await ctx.service.test.getDataFromDatabase();
    if (res) {
      ctx.body = {
        status: 200,
        data: res,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '获取失败',
      };
    }
  }

  async putDataIntoDatabase() {
    const { ctx } = this;
    const params = {
      ...ctx.request.body,
    };
    console.log(params);
    const res = await ctx.service.test.putDataIntoDatabase(params);
    if (res) {
      ctx.body = {
        status: 200,
        data: res,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '添加失败',
      };
    }
  }
}

module.exports = TestController;
