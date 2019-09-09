const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');//更方便的获取body内容

const InitManager = require('./core/init');

InitManager.initCore(app);

app.use(bodyparser());

// 发送http koa 接收http
app.listen(3000);
