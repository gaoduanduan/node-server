import ioredis from 'ioredis';
import Config from '../config/index';
const redisConfig = Config['REDIS'];
import Logger from './log'

class Redis {
    constructor() {
        this.redis = new ioredis(redisConfig);
    };
    /**
     * 设置redis data
     * @param {*} key
     * @param {*} data
     * @param {*} maxAge
     * @param {*} ex
     */
    async setCommand (key, data, maxAge = 60 * 60 * 24, ex = 'EX') {
        let status = null;

        try {
            if (data && typeof data === 'object') {
                status = await this.redis.set(key, JSON.stringify(data), ex, maxAge);
            } else {
                status = await this.redis.set(key, data, ex, maxAge);
            }

            Logger.logInfo(`Redis 存储 --${key}-- 键值对成功，值为 => ${JSON.stringify(data)}`);
        } catch (error) {
            Logger.logError(`Redis 存储 --${key}-- 键值对失败 => ${error}`);
        }

        return status === 'OK';
    };
    /**
     * 获取redis的data
     * @param {*} key
     */
    async getCommand (key) {
        try {
            const data = await this.redis.get(key);

            if (data && typeof data === 'string') {
                Logger.logInfo(`Redis 查询 --${key}-- 键值对成功，值为 => ${data}`);

                return JSON.parse(data);
            } else {
                Logger.logInfo(`Redis 查询 --${key}-- 键值对成功，值为 => ${data}`);

                return data;
            }
        } catch (error) {
            Logger.logError(`Redis 查询 --${key}-- 键值对失败 => ${error}`);
        }
    };
    /**
     * 删除redis的data
     * @param {*} key
     */
    async delCommand (key) {
        let status = null;

        try {
            status = await this.redis.del(key);
            Logger.logInfo(`Redis 删除 --${key}-- 键值对成功`);
        } catch (error) {
            Logger.logError(`Redis 删除 --${key}-- 键值对失败 => ${error}`);
        }

        return status > 0;
    };
};

export default new Redis();
