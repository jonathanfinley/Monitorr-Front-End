import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sites: [],
  },
  mutations: {
    UPDATE_SITES(state, data) {
      state.sites = data;
    },
  },
  actions: {
    getSites({ commit }) {
      axios.get('http://127.0.0.1:7464/').then(({ data }) => {
        commit('UPDATE_SITES', data);
      });
    },
  },
  modules: {
  },
});
