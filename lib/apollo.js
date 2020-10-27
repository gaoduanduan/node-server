import apollo from 'node-apollo';
import Config from '../config/index';
const apolloConfig = Config['APOLLO'];
import Redis from '../utils/redis';

// 获取Apollo配置 存储至Redis
export async function saveApolloToRedis () {
    const results = await apollo.remoteConfigServiceSkipCache(apolloConfig) || '';
    Redis.setCommand('apolloInfo', results)
};
