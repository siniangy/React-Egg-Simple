'use strict';

const Controller = require('egg').Controller;

class NameController extends Controller {
  async Getname() {
    const { ctx } = this;
    const name = await ctx.service.name.Getname();
    ctx.body = {
      code: 0,
      data: name,
    };
  }
}

module.exports = NameController;
