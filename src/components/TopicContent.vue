<template>
  <div class="content">
      <ul class="article-main">
        <li class="clearfix article_item" v-for="(item, index) in topicContent" :key="index">
          <!-- left -->
          <a class="fl item_left" :href="'http://quanlian.io/article.html?id='+item.news_id" target="_blank">
            <img class="item_left_img" :src="item.figure[0]" alt="news_list_banner">
          </a>
          <!-- right -->
          <div class="fr item_right">
            <h3><a href="http://quanlian.io/article.html" target="_blank">{{item.title}}</a></h3>
            <p class="item_right_center">我是摘要内容我是摘要内容我是摘要内容我是摘要内容我是摘要内容我是摘要内容我是摘要内容我是摘要内容我是摘要内容</p>
            <div class="item_right_bottom">
              <span>{{item.editor.name}}</span>
              <span>{{item.create_time}}</span>
            </div>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
import home from '../api/home';
// https://www.jianshu.com/p/acbff04b4096
// https://github.com/zhuss/vue2-demo

export default {
  data () {
      return {
          topicContent: []
      };
  },
  computed: {
    typeID () {
      return this.$store.getters.topicID;
    }
  },
  created () {
  },
  methods: {
    // 请求对应topicID的内容
    getTopicContent (topicID, page, cb) {
      home.getTopicContent(topicID, page, cb);
    }
  },
  watch: {
    typeID: function (newID, oldID) {
      this.getTopicContent(newID, 0, res => {
        console.log("我在页面拿到数据");
        this.topicContent = res;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
    .article-main {
      width: 100%;
      // margin-top: 30px;
      .article_item {
        background: #fff;
        margin-top: 40px;
        .item_left {
          display: inline-block;
          width: 270px;
          height: 167px;
          background: red;
          .item_left_img {
            width: 100%;
            height: 100%;
          }
        }
        .item_right {
          display: inline-block;
          height: 167px;
          width: 467px;
          margin-left: 20px;
          // background: green;
          position: relative;
          h3 {
            font-size: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
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
            // background: cadetblue;
            position: absolute;
            left: 0;
            top: 65px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
        }
        .item_right_bottom {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 24px;
          line-height: 24px;
          // background: red;
        }
      }
    }
}
</style>

