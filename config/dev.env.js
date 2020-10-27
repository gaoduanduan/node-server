export default {
    MYSQL: {
        host: 'localhost', // 连接的服务器
        user: 'root', // 用户名
        password: '', // 用户密码
        database: 'mysql' // 选择的库
    },
    REDIS: {
        host: 'localhost',  // 地址
        password: '',  // 密码
        port: 6379  // 端口
    },
    APOLLO: {
        configServerUrl: '', // Apollo 服务地址
        appId: '',
        clusterName: 'default',
        namespaceName: ['application'],
        apolloEnv: 'dev'
    }
};
