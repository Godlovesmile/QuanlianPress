const BASE_URL = 'http://ob.6cd12.cn/v1/api';
const QUANlIAN_URL = 'http://localhost:8080';

export default {
    BASE_URL,
    QUANlIAN_URL,
    // 获取请求链接
    getQueryStringArgs () {
        // 取得查询字符串并去掉开头的问号
        var protocol = location.protocol;
        var host = location.host;
        var qs = (location.search.length > 0 ? location.search.substring(1) : '');
        // 保存数据对象
        var args = {};
        // 取得每一项
        var items = qs.length ? qs.split('&') : [],
            item = null,
            name = null,
            value = null;

        // 在for中使用
        for (var i = 0; i < items.length; i++) {
            item = items[i].split('=');
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value;
            }
        }
        return {
            "protocol": protocol,
            "host": host,
            "args": args
        };
    }
};