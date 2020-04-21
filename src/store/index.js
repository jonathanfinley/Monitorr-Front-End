import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sites: [],
    time: null,
  },
  mutations: {
    UPDATE_SITES(state, data) {
      state.sites = data;
    },
    SET_TIME(state, data) {
      state.time = data;
    },
    UPD_TIME(state) {
      state.time.setSeconds(state.time.getSeconds() + 1);
    },
  },
  actions: {
    getSites({ commit }) {
      axios.get('http://127.0.0.1:7464/ping/').then(({ data }) => {
        commit('UPDATE_SITES', data);
      });
    },
    getTime({ commit }) {
      axios.get('http://127.0.0.1:7464/time').then(({ data }) => {
        commit('SET_TIME', data.date);
        setTimeout(() => { commit('UPD_TIME'); }, 1000); 
      });
    }
  },
  modules: {
  },
});
