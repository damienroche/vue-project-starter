import Vue from 'vue'
import Vuex, { StoreOptions, GetterTree, MutationTree, ActionTree } from 'vuex'

import RootState from './RootState'

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
    token: null
  },
  getters: rootGetters,
  mutations: rootMutations,
  actions: rootActions,
  modules: {},
  plugins: []
}

export default new Vuex.Store(storeOptions)
export { MutationType }
