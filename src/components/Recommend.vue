<template>
    <div class="recommend">
        <ul class="main">
            <li class="item clearfix" v-for="(item, index) in recommendData" :key="index">
                <a :href="url+'/article.html?nid='+item.news_id" class="fl item_left" target="_blank">
                    <img :src="item.figure[0]" alt="推荐banner">
                </a>
                <a :href="url+'/article.html?nid='+item.news_id" class="fr item_right" target="_blank">{{item.title}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import info from '@/api/info';
import config from '@/api/config';

export default {
    data () {
        return {
            recommendData: [],
            url: config.QUANlIAN_URL
        };
    },
    created () {
        // 请求推荐数据
        this.getRecommendContent();
    },
    methods: {
        getRecommendContent () {
            info.getRecommendContent(res => {
                console.log(res);
                this.recommendData = res;
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.main {
    padding: 25px;
    .item {
        padding: 25px 0;
        border-bottom: 1px solid #F3F5F7;
        .item_left {
            display: inline-block;
            width: 130px;
            height: 72px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .item_right {
            display: inline-block;
            width: 180px;
            height: 72px;
            &:hover {
                cursor: pointer;
                color: orange;
            }
        }
    }
}
</style>


