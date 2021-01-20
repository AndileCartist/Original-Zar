import Cookies from 'js-cookie'

 const state = {
    user: null
 }

 const mutations = {
  setUser(state, user) {
    state.user = user
    Cookies.set('user', user)
  },
  logout(state) {
    state.user = null
    Cookies.set('user', null)
  }
}

 const getters = {
  userName(state) {
   return state.user.username
  }, 
  userLogged (state) {
    return state.user.confirmed
  },
  userData () {
    return state.user
  }
}

export default {
  state,
  mutations,
  getters
}