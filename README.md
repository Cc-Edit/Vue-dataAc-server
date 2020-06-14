# Vue-dataAc-server

Vue-dataAc 后台服务 egg + mongodb

## QuickStart

基于egg + mongodb 搭建日志分析系统


see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

### mongoDb
0. sudo systemctl start mongod
1. sudo systemctl stop mongod
2. sudo systemctl daemon-reload

    https://mongodb.net.cn/manual/tutorial/install-mongodb-on-red-hat/