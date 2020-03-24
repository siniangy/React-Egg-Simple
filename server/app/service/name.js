'use strict';

const Service = require('egg').Service;

class NameService extends Service {
  async Getname() {
    const name = await this.ctx.curl('http://127.0.0.1:7001/public/data/name.json', { dataType: 'json' });
    return name.data;
  }
}

module.exports = NameService;
