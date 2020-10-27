import db from '../utils/mysql';

export async function getUserInfo (ctx) {
    try {
        const results = await db.exec('SELECT * FROM user');

        ctx.body = {
            code: '200',
            data: results,
            msg: 'success'
        };
    } catch (error) {
        ctx.body = {
            code: '500',
            data: '',
            msg: 'System error'
        }
    }
};
