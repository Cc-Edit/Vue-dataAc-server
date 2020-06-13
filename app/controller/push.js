'use strict';

const Controller = require('egg').Controller;

class PushController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = PushController;
