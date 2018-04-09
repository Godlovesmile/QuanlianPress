<template>
  <div class="tag clearfix">
      <ul class="clearfix tag_topic" @click="selectTopic($event)">
          <li v-if="item.topic_id !== 3" class="fl topic_item" :class="{'active': item.active}" v-for="(item, index) in topicList" :key="index" :value="index">{{item.name}}</li>
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
                 console.log('我的数据完成');
                 // save topicType (注意是在数据请求完成)
                 this.topicList = this.$store.getters.topicType;
                 //  this.$store.commit('setTopic', this.topicList);
                 this.$store.commit('setTopicID', 0);
                 // 设置第一个为选中状态
                 Vue.set(this.topicList[0], 'active', true);
                 console.log(this.topicList);
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

