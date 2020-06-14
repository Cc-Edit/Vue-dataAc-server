'use strict';

const Controller = require('egg').Controller;

class PushController extends Controller {
  async index() {
    const { ctx } = this;
    const { ip, header = {}, request = {} } = ctx;
    const {origin, referer} = header;
    const userAgent = header['user-agent'];
    const {rawBody, body} = request;

    if(!rawBody || !userAgent || !referer || !origin || (body && body.length < 1)){
      ctx.body = { isOk:false, msg:"请求方式异常" };
      return;
    }
    const { AcData } = ctx.model;
    for (let i = 0; i < body.length; i++){
      let {t, uuid, acData} = body[i];
      let { type } = acData
      const acDataIns = new AcData({
        uuid: uuid,
        ip: ip,
        referer: referer,
        type: type,
        updated: new Date().getTime(),
        token: t,
        userAgent: userAgent
      });
      acDataIns._acData = acData;
      acDataIns.markModified('_acData');
      acDataIns.save();
    }
    ctx.body = { isOk:true, msg:"上报成功" };
  }
}

module.exports = PushController;
