<template>
    <div>
        <new-nav />
        <div class="activity">
            <div class="activity_top clearfix">
                <img class="fl at_left" :src="data.activity_poster" alt="活动banner">
                <div class="fr at_right">
                    <p class="title">{{data.title}}</p>
                    <p class="time">{{data.start_time+'-'+data.end_time}}</p>
                    <p class="address">{{data.address}}</p>
                </div>
            </div>
            <p class="tag">活动介绍</p>
            <div class="activity_bottom">
                <div class="content" v-html="data.content"></div>
            </div>
        </div>
        <Footer />
    </div>   
</template>

<script>
import config from '@/api/config';
import activity from '@/api/activity';
import NewNav from '@/components/NewNav';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default {
    name: 'App',
    data () {
        return {
            data: {}
        };
    },
    components: {
        NewNav,
        Footer
    },
    methods: {
        getActivityContent () {
            let urlInfo = config.getQueryStringArgs();
            let id = urlInfo.args.activity_id;
            activity.getActivityContent(id, res => {
                console.log(res);
                this.data = res;

                let title = document.querySelector('.title');
                title.innerHTML = this.data.title;
            });
        }
    },
    created () {
        // 请求活动详情数据
        this.getActivityContent();
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
.activity {
    width: 1200px;
    margin: 0 auto;
    margin-bottom: 50px;
    .activity_top {
        margin-top: 30px;
        height: 280px;
        background: #fff;
        .at_left {
            width: 585px;
            height: 280px;
        }
        .at_right {
            width: 567px;
            height: 280px;
            padding: 22px 24px;
            p {
                margin-bottom: 16px;
            }
            .title {
                color: #222222;
                font-size: 18px;
                text-align: left;
            }
        }
    }
    .tag {
        color: #222;
        font-size: 18px;
        font-weight: bold;
        margin-top: 50px;
        margin-bottom: 20px;
    }
    .activity_bottom {
        background: #fff;
        .content {
            margin: 30px 20px;
            display: inline-block;
            text-align: left;
            font-size: 16px;
            color: #222222;
            line-height: 30px;
        }
    }
}
</style>


