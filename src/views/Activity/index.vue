<template>
  <div class="activity">
      <div class="activity_type">
        <ul class="cleanfix">
          <li class="fl at_tab" v-for="(item, index) in activityLists" :key="index">
            <router-link :to="`/activity/type_${item.topic_id}`">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
      <!-- 内容显示 -->
      <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'activity',
  data () {
    return {
      activityLists: []
    };
  },
  methods: {
    getActivityLists () {
      let url = 'http://ob.6cd12.cn/v1/api/activity/topic/list';
      let that = this;
      
      axios.get(url).then( res => {
        // console.log(res);
        that.activityLists = res.data.data.topic_list;
      }).catch(error => {
        console.log(error);
      });
    }
  },
  created () {
    // 1.获取活动类型
    this.getActivityLists();
  }
};
</script>

<style lang="scss" scoped>
  .activity_type {
    height: 69px;
    line-height: 69px;
    font-size: 16px;
    color: #222;
    // background: green;
    margin-left: 10px;
    .at_tab {
      margin-right: 10px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .router-link-active {
    color: orangered;
  }
</style>

