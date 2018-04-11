<template>
  <div class="content">
      <ul class="article-main">
        <li class="clearfix article_item" v-for="(item, index) in topicContent" :key="index">
          <!-- left -->
          <a class="fl item_left" :href="url+'/article.html?nid='+item.news_id" target="_blank">
            <img class="item_left_img" :src="item.figure[0]" alt="news_list_banner">
          </a>
          <!-- right -->
          <div class="fr item_right">
            <h3><a :href="url+'/article.html?nid='+item.news_id" target="_blank">{{item.title}}</a></h3>
            <p class="item_right_center">我是摘要内容我是摘要内容我是摘要内容我是摘要内容我是摘要内容我是摘要内容我是摘要内容我是摘要内容我是摘要内容</p>
            <div class="item_right_bottom">
              <span class="name">{{item.charge_editor.name}}</span>
              <span>{{item.create_time}}</span>
            </div>
          </div>
        </li>
      </ul>
      <!-- more -->
      <div class="more" @click="getMore">更多</div>
  </div>
</template>

<script>
import home from '@/api/home';
import config from '@/api/config';

export default {
  data () {
      return {
          topicContent: [],
          page: 0 ,
          url: config.QUANlIAN_URL
      };
  },
  computed: {
    typeID () {
      return this.$store.getters.topicID;
    },
    hash () {
      return window.location.hash;
    }
  },
  created () {
    // 处理路由切换之后, tag topic 第一个没有数据, 原因是topicID还是原先的, 就没有触发watch中的typeID, 所有手动请求数据
    if (this.hash === '#/') {
        this.getTopicContent(2, 0, res => {
          this.topicContent = res;
        });
    }
    // console.log(this.url);
  },
  methods: {
    // 请求对应topicID的内容
    getTopicContent (topicID, page, cb) {
      home.getTopicContent(topicID, page, cb);
    },

    // getMore
    getMore () {
        this.getTopicContent(this.typeID, ++this.page, res => {
          this.topicContent = this.topicContent.concat(res);
        });
    }
  },
  watch: {
    typeID: function (newID, oldID) {
      this.getTopicContent(newID, 0, res => {
        // 数据源
        this.topicContent = res;
        // 每次进入新的topic, 清空上次的page记录
        this.page = 0;
        // console.log(res);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
    .article-main {
      width: 100%;
      .article_item {
        background: #fff;
        margin-top: 40px;
        .item_left {
          display: inline-block;
          width: 270px;
          height: 167px;
          border-radius: 5px;
          .item_left_img {
            width: 100%;
            height: 100%;
            border-radius: 5px;
          }
        }
        .item_right {
          display: inline-block;
          height: 167px;
          width: 467px;
          margin-left: 20px;
          margin-right: 5px;
          position: relative;
          h3 {
            margin-top: 5px;
            font-size: 20px;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            a {
              display: block;
              &:hover {
                color: #228fbd;
              }
            }
          }
          .item_right_center {
            height: 66px;
            width: 100%;
            position: absolute;
            left: 0;
            top: 65px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
            color: #666;
            font-size: 14px;
        }
        .item_right_bottom {
          position: absolute;
          left: 0;
          bottom: 5px;
          width: 100%;
          height: 24px;
          line-height: 24px;
          span {
            color: #999;
          }
          .name {
            margin-right: 10px;
          }
        }
      }
    }
  }
  .more {
      width: 100%;
      height: 48px;
      line-height: 48px;
      background:#ccc;
      text-align: center;
      border-radius: 8px;
      margin-top: 40px;
      &:hover {
        background: orange;
        opacity: 0.5;
        cursor: pointer;
      }
    }
}
</style>

