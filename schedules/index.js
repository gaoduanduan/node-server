import schedule from 'node-schedule';

// Utils 工具集
import Common from '../utils/common';
import Logger from '../utils/log'

const schedules = {
    /**
     * 遍历文件 执行定时任务 
    **/
    exec: function () {
        // 获取定时任务所在目录
        const scheduleFile = Common.getFileList(`${process.cwd()}/schedules/task`);
        Logger.logInfo(`schedule file list ======> 一共${scheduleFile.length}条，值为：${scheduleFile}`)

        scheduleFile.map(item => {
            Logger.logInfo(`schedule current file ======> 当前执行的任务文件名：${item}`)
            
            try {
                const scheduleItem = require(`${process.cwd()}/schedules/task/${item}`);
                Logger.logInfo(`schedule item ======> 当前执行的任务配置：${JSON.stringify(scheduleItem)}`)

                // 定时任务为开启状态 添加至任务列表
                if (scheduleItem) {
                    schedule.scheduleJob(scheduleItem.name, scheduleItem.core, scheduleItem.callback);
                }
            } catch (error) {
                Logger.logError(error.message);
            }
        });        
    }
};

export default schedules;
