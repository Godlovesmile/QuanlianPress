<template>
  <div class="app">
    <NewNav />
    <!-- 导航 -->
    <div class="article clearfix">
        <div class="fl article_left">
            <!-- 头部 -->
            <div class="header">
                <h2>{{news.title}}</h2>
                <!-- 时间/作者 -->
                <div class="article_info">
                  <span class="author">{{name}}</span>
                  <span class="time">{{news.create_time}}</span>
                </div>
            </div>
            <!-- 内容 -->
            <div class="content" v-html="news.content"></div>
        </div>
        <div class="fr article_right"></div>
    </div>
    <!-- 尾部 -->
  </div>
</template>

<script>
import article from '@/api/article';
import config from '@/api/config';
import NewNav from '@/components/NewNav';

export default {
  name: 'App',
  data () {
    return {
      news: {},
      name: ''
    };
  },
  components: {
    NewNav
  },
  created () {
    this.getArticleContent();
  },
  methods: {
    // 请求新闻数据
    getArticleContent () {
        let urlInfo = config.getQueryStringArgs();
        let url = '  http://ob.6cd12.cn' + '/v1/api/news/news_info?news_id=' + urlInfo.args.nid;

        article.getArticleContent(url, res => {
            this.news = res;
            this.name = res.charge_editor.name;

            // 设置头部信息 description keywords
            let title = document.querySelector('.title');
            let description = document.querySelector('.description');
            let keywords = document.querySelector('.keywords');
            title.innerHTML = this.news.title;
            description.content = this.news.digest;
            keywords.content = this.news.tags.join(',');
            console.log(res);
        });
    }
  },
  updated () {
      this.$nextTick(() => {      
        // 富文本的特殊处理
        let imgs = document.querySelectorAll('.content img');
        if (imgs.length) {
            imgs.forEach(element => {
                element.removeAttribute('style');
            });
        }
      });
  }
};
</script>

<style lang="scss">
.article {
    width: 1170px;
    margin: 40px auto;
    position: relative;
    .article_left {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 770px;
        margin: 0 auto;
        .header {
            h2 {
                font-weight: bold;
                font-size: 32px;
                color: #333;
                margin-bottom: 30px;
            }
            .article_info {
                color: #666;
                margin-bottom: 30px;
                line-height: 32px;
                .author {
                  margin-right: 30px;
                }
            }
        }
        .content {
            font-family: 'open sans','PingFang SC','Lantinghei SC','Helvetica Neue',Helvetica,Arial,'Microsoft YaHei',"sans-serif";
            text-align: justify;
            font-size: 20px;
            color: #333;
            margin-bottom: 30px;
            word-wrap: break-word;
            line-height: 35px;
            font-weight: 440;
            img {
                width: 80%;
                margin-left: 10%;
            }
        }
    }
    .article_right {
      width: 0;
      height: 400px;
      line-height: 400px;
      color: red;
    }
}
</style>
