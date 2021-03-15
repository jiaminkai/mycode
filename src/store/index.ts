import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    connet:2
  },
  mutations: {
    change(state,payload){
      state.token=payload.token
    },

  },
  getters:{

  },
  actions: {
  },
  modules: {
  }
})
