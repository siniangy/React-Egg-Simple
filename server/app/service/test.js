'use strict';

const Service = require('egg').Service;

class TestService extends Service {
  async getData() {
    const { app } = this;
    try {
      const res = await app.mysql.query('select * from user');
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async putData(params) {
    const { app } = this;
    try {
      const res = await app.mysql.insert('user', params);
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

module.exports = TestService;
