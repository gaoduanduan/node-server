import fs from 'fs';

/*
* 工具集
*/
const common = {
    /**
    * 获取目录下的所有文件
    * @param {*} dir_path 
    */
    getFileList: function(dir_path) {
        let file_list = [];

        if (fs.existsSync(dir_path)) {
        file_list = fs.readdirSync(dir_path);
        }

        return file_list;
    },
    /**
     * 将时间戳转换为正常日期
     * time 时间戳
     * fmt 转换格式
     */
    formatDate: function (time, fmt) {
        if (time == null) {
            return ;
        }

        var fmt = fmt ? fmt : 'yyyy-MM-dd'
        var time = new Date(time)
        var z = {
            M: time.getMonth() + 1,
            d: time.getDate(),
            h: time.getHours(),
            m: time.getMinutes(),
            s: time.getSeconds()
        }
        fmt = fmt.replace(/(M+|d+|h+|m+|s+)/g, function (v) {
            return ((v.length > 1 ? '0' : '') + eval('z.' + v.slice(-1))).slice(
                -2
            )
        })
        return fmt.replace(/(y+)/g, function (v) {
            return time
                .getFullYear()
                .toString()
                .slice(-v.length)
        })
    }
};

export default common;
