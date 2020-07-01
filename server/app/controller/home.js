'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async get() {
    const { ctx } = this;
    const { name } = ctx.query;
    ctx.body = name;
  }
  async add() {
    const { ctx } = this;
    const { title, content } = ctx.request.body;
    ctx.body = {
      title,
      content,
    };
  }
}

module.exports = HomeController;
