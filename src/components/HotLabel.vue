<template>
    <div class="hot_label">
        <h2>热门标签</h2>
        <ul class="label_item clearfix">
            <li class="fl unit" v-for="(item, index) in labels" :key="index">
                <a :href="url+'/article.html?nid='+item.news_id" target="_blank">
                    <img :src="item.pic" alt="label_img">
                </a>
                <span>{{item.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import config from '@/api/config';

export default {
    data () {
        return {
            url: config.QUANlIAN_URL,
            labels: [
                {
                    name: '比特币',
                    news_id: 741,
                    pic: 'http://img.kaku.henkuai.com/o_1cb97cmem1es7153orbt1ljibtm8.jpg?imageView2/1/w/230/h/150/q/75|imageslim'
                },
                {
                    name: '以太坊',
                    news_id: 743,
                    pic: 'http://img.kaku.henkuai.com/o_1cb98haua6r81kkkv6d1it91pbr8.jpg?imageView2/1/w/230/h/150/q/75|imageslim'
                },
                {
                    name: '超级账本',
                    news_id: 745,
                    pic: 'http://img.kaku.henkuai.com/o_1cb9agf5i1m00ukb1or41icp1quq8.jpg?imageView2/1/w/230/h/150/q/75|imageslim'
                },
                {
                    name: 'ICO',
                    news_id: 746,
                    pic: 'http://img.kaku.henkuai.com/o_1cb9bs2bl1o31110d1e42vqpj6v8.jpg?imageView2/1/w/230/h/150/q/75|imageslim'
                },
                {
                    name: 'IFO',
                    news_id: 747,
                    pic: 'http://img.kaku.henkuai.com/o_1cb9digni1rtq1ld76bg15rf12n08.jpg?imageView2/1/w/230/h/150/q/75|imageslim'
                },
                {
                    name: '全块链钱包',
                    news_id: 749,
                    pic: 'http://img.kaku.henkuai.com/o_1cb9gn2v71g7fv37rvo10d6p33a.jpg?imageView2/1/w/230/h/150/q/75|imageslim'
                },
                {
                    name: 'EOS',
                    news_id: 754,
                    pic: 'http://img.kaku.henkuai.com/o_1cb9juvke3c41rsn1m4k1us5nnb8.jpg?imageView2/1/w/230/h/150/q/75|imageslim'
                },
                {
                    name: 'Token',
                    news_id: 753,
                    pic: 'http://img.kaku.henkuai.com/o_1cb9jgelkki1l237jia2p688.jpg?imageView2/1/w/230/h/150/q/75|imageslim'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.hot_label {
    width: 100%;
    height: 185px;
    background: #fff;
    margin: 20px 0;
    color: #999;
    h2 {
        font-size: 20px;
        padding: 15px;
    }
    .label_item {
        width: 750px;
        // height: 100px;
        margin: 15px;
        .unit {
            margin-right: 23px;
            // background: red;
            img {
                width: 70px;
                height: 70px;
                display: block;
                cursor: pointer;
            }
            span {
                display: inline-block;
                width: 70px;
                text-align: center;
                font-size: 14px;
                margin-top: 15px;
                padding-bottom: 15px;
            }
        }
    }
}
</style>


