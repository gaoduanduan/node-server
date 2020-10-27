// 引入 依赖包
import Koa from 'koa';
import Favicon from 'koa-favicon';
import BodyParser from 'koa-bodyparser';

// 定时任务
import Schedules from './schedules';

// API路由
import registerRouter from './routers';

// 自执行方法
import { saveApolloToRedis } from './lib/apollo'

// 声明一个 server
const server = new Koa();

// 设置网站图标
server.use(Favicon(`${__dirname}/public/favicon.ico`));

// Request Body解析器
server.use(BodyParser());

// 挂载日志模块
server.use(async (ctx, next) => {
    ctx.logger = require('./utils/log');
    await next();
});

// 记录日志
server.use(async (ctx, next) => {
    const start = new Date();
    let ms = new Date() - start;

    //开始进入到下一个中间件
    await next();

    try {
        // 开始进入到下一个中间件
        if (ctx.status === 404) {
            ctx.throw(404);
        }

        ms = new Date() - start;

        // 记录响应日志
        ctx.logger.logResponse(ctx, ms);
    } catch (error) {
        ms = new Date() - start;

        // 记录异常日志
        ctx.logger.logError(ctx, error, ms);
    }
});

// 加载路由
server.use(registerRouter());

// 自执行函数
saveApolloToRedis(); // 获取Apollo配置 存储至Redis

// 执行定时任务
Schedules.exec();

// 启动服务
const SERVER_PORT = process.env.SERVER_PORT || 9999
server.listen(SERVER_PORT, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${SERVER_PORT}`)
});
