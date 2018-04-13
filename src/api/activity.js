import axios from 'axios';

 export default {
   getActivityContent (id, cb) {
       let url = 'http://ob.6cd12.cn/v1/api/activity/info';

        axios.post(url, {activity_id: id}).then(res => {
            // console.log(res);
            cb(res.data.data.activity_info);
        }).catch(err => {
            console.log(err);
        });
   }
 };