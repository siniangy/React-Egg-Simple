'use strict';

const Controller = require('egg').Controller;

class NameController extends Controller {
  async getName() {
    const { ctx } = this;
    const res = await ctx.service.name.getName();
    if (res) {
      ctx.body = {
        status: 200,
        data: res, // 返回一个数组
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '获取失败',
      };
    }

  }
}

module.exports = NameController;
