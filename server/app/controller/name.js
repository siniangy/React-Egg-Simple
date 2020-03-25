'use strict';

const Controller = require('egg').Controller;

class NameController extends Controller {
  async getName() {
    const { ctx } = this;
    const name = await ctx.service.name.getName();
    ctx.body = {
      code: 0,
      status: 200,
      data: name,
    };
  }
}

module.exports = NameController;
