import axios from 'axios';

 export default {
   getRecommendContent (cb) {
       let url = '/recommend/list';

        axios.post(url, {index: 0}).then(res => {
            cb(res.data.data.recommend_list);
        }).catch(err => {
            console.log(err);
        });
   }
 };