import Vue from 'vue'
import Vuex from 'vuex'
import { api } from '@/api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bodies: []
  },
  mutations: {
    addBody (state, item) {
      state.bodies.unshift(item)
    },
    removeBody (state, id) {
      const removedBodyIndex = state.bodies.findIndex(body => body.id === id)
      state.bodies.splice(removedBodyIndex, 1)
    },
    setBodies (state, bodies) {
      state.bodies = bodies
    }
  },
  actions: {
    async getBodies (context, options) {
      const data = 'id,name,isPlanet,discoveredBy,discoveryDate'
      const order = 'id'
      const params = {
        data,
        page: options.page,
        order
      }
      if (options.filter !== '') {
        params.filter = `name,cs,${options.filter}`
      }
      const res = await api.get('bodies', { params })

      if (res && res.data) {
        context.commit('setBodies', res.data.bodies)
      }
    }
  },
  getters: {
    getBodyById: (state) => (id) => {
      return state.bodies.find(body => body.id === id)
    }
  },
  modules: {
  }
})
