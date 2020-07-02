'use strict';

const Service = require('egg').Service;

class TestService extends Service {
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

module.exports = TestService;
