'use strict';

const Service = require('egg').Service;

class NameService extends Service {
  async getName() {
    const { app } = this;
    try {
      const res = await app.mysql.select('user');
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

module.exports = NameService;
