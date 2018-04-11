import home from '@/api/home';

// initial state
const state = {
    topicType: [],
    topicID: 0,
    page: 0         // 新闻的页码
};

// getters
const getters = {
    topicType: state => state.topicType,
    topicID: state => state.topicID,
    page: state => state.page
};

// mutations
const mutations = {
    setTopic (state, topic) {
        state.topicType = topic;
    },
    setTopicID (state, index) {
        // console.log(index);
        // console.log(state.topicType[index].topic_id);
        state.topicID = state.topicType[index].topic_id;
    },
    setPage (state, page) {
        state.page = page;
    }
};

// actions
const actions = {
    getTopic ({ commit }, fn) {
        // console.log('我执行啦');
        home.getTopic(topic => {
            commit('setTopic', topic);
            fn();
        });
    }
};

// export
export default {
    state,
    getters,
    mutations,
    actions
};