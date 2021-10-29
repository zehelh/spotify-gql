const gitQl = {
  namespaced: true,
  state () {
    return {
      url: 'https://api.github.com/users/zehelh/repos',
      list: {},
    }
  },
  mutations: {
    UPDATE_LIST (state, payload) {
      state.list = payload
    },
  },
  actions: {

    // GETTERS

    // START getProjects
    async getProjects (context) {
      // context.commit('UPDATE_LIST', response.data)
    },
    // END getProjects
  }

}

export default gitQl
