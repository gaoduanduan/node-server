import Mysql from 'mysql';
import Config from '../config/index';

//向外暴露方法
module.exports = {
    exec: (sql, arg) => {
        // 创建数据库连接
        const pool  = Mysql.createPool(Config['MYSQL']);

        return new Promise((resolve, reject) => {
            // 在数据池中进行会话操作
            pool.getConnection((err, connection) => {
                if(err){
                    console.log('数据库链接失败');
                    throw err;
                }

                // 开始数据操作
                connection.query(sql, arg, (error, results) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(results);
                    }

                    // 结束会话
                    connection.release();
                });
            });
        });
    }
};
