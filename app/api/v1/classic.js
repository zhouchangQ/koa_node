const Router = require('koa-router');
const router = new Router();

// 注册
router.get('/v1/classic/index', (ctx, next) => {
  ctx.body = {
    name: '名称'
  };
});

module.exports = router;