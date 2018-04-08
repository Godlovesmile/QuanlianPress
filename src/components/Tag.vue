<template>
  <div class="tag">
      <ul class="clearfix tag_topic" @click="selectTopic($event)">
          <li class="fl topic_item" :class="{'active': item.active}" v-for="(item, index) in topicList" :key="index" :value="index">{{item.name}}</li>
      </ul>
      <topic-content :topicID="topicID" />
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import { Store, mapGetters, mapActions } from 'vuex';
import vuex from 'vuex';
import TopicContent from '../components/TopicContent';

export default {
    data () {
        return {
            topicList: [],
            topicID: 0
        };
    },
    components: {
        TopicContent
    },
    methods: {
        // ...mapActions([ getTopic ]),
        // topic_list
        // getTopic () {
        //     let url = 'http://ob.6cd12.cn/v1/api/news/topic_list';
        //     let that = this;
        //     axios.get(url).then(res => {
        //         // console.log(res);
        //         that.topicList = res.data.data.topic_list;
        //         that.topicID = that.topicList.topic_id;
        //         // console.log(that.topicList);
        //         // 数据请求完成之后, 设置topic默认进去选中第一个
        //         Vue.set(that.topicList[0], 'active', true);
        //     }).catch(err => {
        //         console.log(err);
        //     });
        // },
        getTopic () {
            this.$store.dispatch('getTopic', () => {
                console.log('我也执行了');
                console.log(this.$store.getters.topicType);
                 this.topicList = this.$store.getters.topicType;
                 
                 Vue.set(this.topicList[0], 'active', true);
            });
        },
        // click event
        selectTopic (event) {
            if (event.target.nodeName === 'LI') {
                this.$nextTick(() => {
                    this.topicList.forEach(item => {
                        Vue.set(item, 'active', false);
                    });
                    let currentItem = this.topicList[event.target.value];
                    Vue.set(currentItem, 'active', true);

                    this.$store.commit('setTopicID', event.target.value);
                });
                // 更新topicID
                // this.topicID = ++this.topicID;
            }
        }
    },
    created () {
        // console.log('啦啦啦');
        // console.log(vuex);
        // console.log(this.$store);
        this.getTopic();
    }
};
</script>

<style lang="scss" scoped>
    .tag {
        .tag_topic {
            font-size: 22px;
            height: 70px;
            line-height: 70px;
            color: #999;
            .topic_item {
                margin-top: 28px;
                display: inline-block;
                height: 40px;
                line-height: 40px;
                margin-right: 20px;
                cursor: pointer;
                &:hover {
                    color: orange;
                }
            }
            .active {
                color: orange;
                border-bottom: 2px solid orange;
            }
        }
    }
</style>

