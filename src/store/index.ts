import Vue from 'vue'
import Vuex, { StoreOptions, GetterTree, MutationTree, ActionTree } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import RootState, { INITIAL_STATE } from './RootState'

Vue.use(Vuex)

const rootGetters: GetterTree<RootState, {}> = {
  token(state): string {
    return state.token
  }
}

enum MutationType {
  SetToken = 'setToken'
}

const rootMutations: MutationTree<RootState> = {
  [MutationType.SetToken]: (state, payload) => {
    state.token = payload
  }
}

const rootActions: ActionTree<RootState, RootState> = {
  updateToken({ commit }, payload) {
    commit(MutationType.SetToken, payload)
  }
}

const storeOptions: StoreOptions<RootState> = {
  state: {
    ...INITIAL_STATE
  },
  getters: rootGetters,
  mutations: rootMutations,
  actions: rootActions,
  modules: {},
  plugins: [
    createPersistedState({
      key: process.env.VUE_APP_PERSISTED_STATE_KEY
    })
  ]
}

export default new Vuex.Store(storeOptions)
export { MutationType }
