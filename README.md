## 技术栈

---

`Koa + Redis + Apollo + Mysql + Log4js + pm2`


## 项目启动

---

1、安装依赖

```bash
npm install
```

2、开发环境

```bash
npm install supervisor -g
npm run dev
```

## 目录结构

---

```
├── config                     // 公共配置
│   ├── index.js               // 配置出口文件
│   ├── log.js                 // 日志配置
│   ├── dev.env.js             // 开发模式配置
│   ├── qa.env.js              // 测试环境配置
│   ├── pro.env.js             // 正式环境配置
├── controllers                // 业务逻辑处理
├── logs                       // 日志
│   ├── error                  // 异常日志
│   ├── request                // 接口请求日志
│   ├── response               // 接口响应日志
│   ├── pm2                    // pm2管理日志
├── models                     // 数据库模型操作
├── routers                    // 路由管理
├── utils                      // 工具函数
│   ├── log.js                 // 日志服务
│   ├── mysql.js               // 数据库连接
│   ├── redis.js               // redis连接
├── index.js                   // 入口文件
├── server.js                  // 服务配置
├── pm2.config.js              // pm2配置
```
