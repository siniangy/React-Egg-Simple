'use strict';

const Service = require('egg').Service;

class TestService extends Service {

  async getDataFromDatabase() {
    const { app } = this;
    try {
      const res = await app.mysql.query('select * from user');
      return res; // res是一个数组
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async putDataIntoDatabase(params) {
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
