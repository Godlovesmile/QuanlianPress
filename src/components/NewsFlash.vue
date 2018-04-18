<template>
    <div class="news_flash">
        <div class="flash_top clearfix">
            <h3 class="fl">快讯</h3>
            <a href="http://quanlian.io/#/info"><span class="fr">更多	<i>&gt;</i></span></a>
        </div>
        <ul class="flash_bottom">
            <li class="flash_item" v-for="(item, index) in flash" :key="index">
                <div class="item_head">
                    <i class="item_head_circle"></i>
                    <span>{{item.create_time}}</span>
                </div>
                <div class="item_content">{{item.content}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        return {
            flash: []
        };
    },
    methods: {
        getNewsList (page) {
            let url = 'http://ob.6cd12.cn/v1/api/alerts/total/list';
            let _this = this;

            axios.post(url, {
                'index': page,
            }).then(res => {
                // console.log(2333);
                // console.log(res);
                this.flash = res.data.data.alerts_list;
            }).catch(error => {
                console.log(error);
            });
        }
    },
    created () {
        this.getNewsList(0);
    } 
};
</script>

<style lang="scss" scoped>
.news_flash {
    margin-top: 20px;
    color: #686868;
    width: 390px;
    overflow: hidden;
    .flash_top {
        width: 100%;
        height: 33px;
        line-height: 33px;
        // background: red;
        font-size: 20px;
        padding-bottom: 13px;
        span {
            cursor: pointer;
            i {
                font-size: 30px;
            }
        }
    }
    .flash_bottom {
        width: 407px;
        height: 600px;
        background: #fff;
        overflow-y: hidden;
        overflow: scroll;
        overflow-x: hidden;
        .flash_item {
            padding-left: 18px;
            padding-right: 50px;
            padding-top: 25px;
            .item_head {
                color: #FC4908;
                margin-bottom: 15px;
                i {
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    background: #FC4908;
                    border-radius: 50%;
                    margin-right: 10px;
                }
                span {
                    font-size: 18px;
                }
            }
            .item_content {
                font-size: 16px;
                line-height: 25px;
            }
        }
    }
    .flash_bottom::-webkit-scrollbar {
        display: none;
    }
}
</style>


