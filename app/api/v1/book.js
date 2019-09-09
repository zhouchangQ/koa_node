const Router = require('koa-router');
const router = new Router();

// 注册
router.post('/v1/:id/book/index', (ctx, next) => {
  const path = ctx.params;
  const query = ctx.request.query;
  const headers = ctx.request.header;
  const body = ctx.request.body;
  ctx.body = {
    bookName: '《鲁滨逊漂流记》'
  };
});

module.exports = router;