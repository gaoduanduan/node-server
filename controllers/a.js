import Redis from '../utils/redis';

// 获取用户设备信息
export async function getRedisUserInfo (ctx) {
    const result = await Redis.getCommand('user')
    ctx.body = {
        code: '200',
        data: result,
        msg: 'success'
    }
};
