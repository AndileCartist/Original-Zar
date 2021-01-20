import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import cart from './cart'
import clothes from './clothes'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        auth,
        cart,
        clothes,
    },
    state: {
        count: 0
      },
      mutations: {
        increment (state) {
          state.count++
        }
      }

});

export default store