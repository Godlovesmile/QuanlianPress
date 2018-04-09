<template>
  <div class="clearfix" v-scroll="loadmore">
     <!-- 我是活动详细内容 -->
     <activity-chunk v-for="(item, index) in items" :key="index" :chunk-data="item" />
     <loading v-show="!items.length" />
  </div>
</template>

<script>
import axios from 'axios';
import ActivityChunk from '../components/ActivityChunk';
import Loading from '../components/Loading';
import scroll from '@/directives/directives';

export default {
  data () {
    return {
      items: [],
      loading: false,
      index: 0,
      typeNum: 0
    };
  },
  components: {
    ActivityChunk,
    Loading
  },
  methods: {
    // 请求活动数据
    getActivityInfo (typeNum, index) {
      let that = this;
      let url = '/activity/list';
      axios.post(url, { 
        type_id: typeNum,
        index: index
      }).then(res => {
        // console.log(res);
        let activity_list = res.data.data.activity_list;
        if (activity_list.length) {
          that.items = that.items.concat(activity_list);
        }
      }).catch(error => {
        console.log(error);
      });

      this.loading = false;
    },

    // 3.下拉刷新
    async loadmore () {
      if (!this.loading) {
        this.loading = true;
        // 请求下一页数据
        await this.getActivityInfo(this.typeNum, ++this.index);
      }
    }
  },
  created () {
    // 加这两行代码, 目的为了, 防止之某个之路有刷新, 获取对应的数据
    let type = window.location.hash.split('_')[1];
    this.typeNum = type;

    this.getActivityInfo(this.typeNum, 0);
  },
  watch: {
    '$route': function (to, from) {
      // 切换路由时清空之前的数据 / 更新记录页码为0
      this.items = [];
      this.index = 0;
      let num = to.params.type.split('_')[1];
      this.typeNum = num;
      this.getActivityInfo(this.typeNum, 0);
    }
  }
};
</script>

