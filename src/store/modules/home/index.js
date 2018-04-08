import home from '../../../api/home';

// initial state
const state = {
    topicType: [],
    topicID: 0
};

// getters
const getters = {
    topicType: state => state.topicType,
    topicID: state => state.topicID
};

// mutations
const mutations = {
    setTopic (state, topic) {
        state.topicType = topic;
    },
    setTopicID (state, index) {
        // console.log(23333);
        // console.log(state);
        state.topicID = state.topicType[index].topic_id;
    }
};

// actions
const actions = {
    getTopic ({ commit }, fn) {
        console.log('我执行啦');
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