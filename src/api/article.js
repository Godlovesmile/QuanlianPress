import axios from 'axios';

 export default {
   getArticleContent (url, cb) {
        // console.log(url);
        axios.get(url).then(res => {
            // console.log(res);
            cb(res.data.data.news);
        }).catch(err => {
            console.log(err);
        });
   }
 };