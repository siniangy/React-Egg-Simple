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
    /** 要插入数据库的数据举例
     {
       "user_name": "leslie",
       "create_date": "2020-7-3"
     }
     */
    const params = {
      ...ctx.request.body,
    };
    console.log(params);
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
