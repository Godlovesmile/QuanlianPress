<template>
  <div class="tag clearfix">
      <ul class="clearfix tag_topic" @click="selectTopic($event)">
          <li v-if="item.topic_id !== 3 && item.topic_id !== 13" class="fl topic_item" :class="{'active': item.active}" v-for="(item, index) in topicList" :key="index" :value="index">{{item.name}}</li>
      </ul>
      <topic-content />    
  </div>
</template>

<script>
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
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
        getTopic () {
            this.$store.dispatch('getTopic', () => {
                 // save topicType (注意是在数据请求完成)
                 this.topicList = this.$store.getters.topicType;
                 //  this.$store.commit('setTopic', this.topicList);
                 this.$store.commit('setTopicID', 2);
                 // 设置第一个推荐为选中状态
                 Vue.set(this.topicList[2], 'active', true);
                //  console.log(this.topicList);
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

                    // 更新topicID
                    // console.log(event.target.value);
                    this.$store.commit('setTopicID', event.target.value);
                });
            }
        }
    },
    created () {
        this.getTopic();
    }
};
</script>

<style lang="scss" scoped>
    .tag {
        // background: green;
        .tag_topic {
            font-size: 20px;
            height: 50px;
            line-height: 50px;
            color: #999;
            background: #fff;
            .topic_item {
                display: inline-block;
                height: 50px;
                line-height: 50px;
                margin-right: 29px;
                padding: 0 15px;
                cursor: pointer;
                // background: red;
                &:hover {
                    // color: orange;
                }
            }
            .active {
                color: #fff;
                background: #ffc397;
                // border-bottom: 2px solid orange;
            }
        }
    }
</style>

