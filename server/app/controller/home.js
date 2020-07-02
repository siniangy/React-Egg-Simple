'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async get() { // localhost:7001/get?name='test'
    const { ctx } = this;
    const { name } = ctx.query;
    ctx.body = name;
  }
  async put() { // localhost:7001
    const { ctx } = this;
    const { title, content } = ctx.request.body;
    ctx.body = {
      title,
      content,
    };
  }
}

module.exports = HomeController;
