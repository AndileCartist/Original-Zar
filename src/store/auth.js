
 const state = {
    user: null,
 }

 const mutations = {
  setUser(state, user) {
    state.user = user
   // localStorage.setItem("user", user);    
  },

  logout(state) {
    state.user = null
    localStorage.removeItem('user');
  }
}

 const getters = {
  userName(state) {
   return state.user.user.username
  }, 
  getToken(state) {
    return state.user.jwt
  },
  userLogged (state) {
    return state.user.user.confirmed
  },
  userData () {
    return state.user
  },
  userEmail () {
    return state.user.user.email
  },

}

export default {
  state,
  mutations,
  getters
}