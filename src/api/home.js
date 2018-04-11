import axios from 'axios';

 export default {
   getTopic (cb) {
        let url = '/news/topic_list';

        axios.get(url).then(res => {
            cb(res.data.data.topic_list);
        }).catch(err => {
            console.log(err);
        });
   },

   getTopicContent (topicID, page, cb) {
       let url = '/news/news_list';
       let params = {
           'topic_id': topicID,
           'index': page
       };
       axios.post(url, params).then(res => {
            // console.log("请求数据成功");
            // console.log(res);
            cb(res.data.data.news_list);
       }).catch(err => {
           console.log(err);
       });
   }
 };