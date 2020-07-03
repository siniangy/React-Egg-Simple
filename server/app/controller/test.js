'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async getData() { // localhost:7001/getdata
    const { ctx } = this;
    const res = await ctx.service.test.getData();
    if (res) {
      ctx.body = {
        status: 200,
        data: res, // sql查询到的res返回一个数组
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '获取失败',
      };
    }
  }
  async putData() { // localhost:7001/putdata
    const { ctx } = this;
    const params = {
      ...ctx.request.body,
    };
    const res = await ctx.service.test.putData(params);
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
