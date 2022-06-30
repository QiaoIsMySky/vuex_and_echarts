import { createStore } from "vuex";

export default createStore({
  state: {
    name: "Yin",
  },
  getters: {
    changeName(state) {
      return (state.name += "Hao");
    },
  },
  mutations: {
    addName(state, data) {
      state.name += data;
    },
  },
  actions: {
    aysncAddValue({ commit }, data) {
      setTimeout(() => {
        commit("addName", data);
      }, 2000);
    },
  },
});
