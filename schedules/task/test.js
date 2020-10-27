import Common from '../../utils/common';
import Logger from '../../utils/log';

/**
 * 定时器测试任务
 */
module.exports = {
    name: 'test',
    core: "0 */10 * * * ?",
    callback: function () {
        Logger.logInfo(`当前时间 =====>${Common.formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss')}`);
    }
};
