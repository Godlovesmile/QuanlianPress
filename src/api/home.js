import axios from 'axios';

 export default {
   getTopic (cb) {
        let url = 'http://ob.6cd12.cn/v1/api/news/topic_list';
        // let that = this;
        axios.get(url).then(res => {
            // console.log(res);
            // that.topicList = res.data.data.topic_list;
            // that.topicID = that.topicList.topic_id;
            // console.log(that.topicList);
            // 数据请求完成之后, 设置topic默认进去选中第一个
            // Vue.set(that.topicList[0], 'active', true);
            cb(res.data.data.topic_list);
        }).catch(err => {
            console.log(err);
        });
   }
 };