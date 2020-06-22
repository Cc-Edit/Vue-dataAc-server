'use strict';

const Controller = require('egg').Controller;

class LogController extends Controller {
  async index() {
    const { ctx } = this;
    const { request = {} } = ctx;
    const { query = {} } = request;
    const { uuid, type = '' } = query;
    if(!uuid){
      ctx.body = { isOk:false, msg:"用户数据不存在", data: [] };
      return;
    }
    let selOption = {
      uuid: uuid
    };
    if(type){
      selOption.type = type;
    }

    const { AcData } = ctx.model;
    let result = await AcData.find(selOption).limit(10000);

    ctx.body = { isOk:true, msg:"获取成功" , data: result};
  }
}

module.exports = LogController;
