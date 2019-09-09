/**初始化管理器文件 */
// 使用require-directory加载路由文件夹下的所有router
const Router = require('koa-router');
const requireDirectory = require('require-directory');
const Url = process.cwd();//通过process.cwd()获取当前文件绝对路径
class InitManager {
  // 入口方法
  static initCore(app) {
    InitManager.app = app;
    InitManager.initLoadRouters();
  }
  static initLoadRouters() {
      // 将所有的路由加载上，自动加载代码
    requireDirectory(module, `${Url}/app/api`, { visit: whenLoadModule });
    function whenLoadModule(obj) {
      if (obj instanceof Router) {
        InitManager.app.use(obj.routes());
      }
    }
  }
}

module.exports = InitManager;